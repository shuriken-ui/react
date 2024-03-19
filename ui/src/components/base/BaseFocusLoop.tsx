import {
  type ElementType,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { type PolymorphicComponentProps, type PolymorphicRef } from "~/types";
import { useEventListener } from "~/hooks/useEventListener";

type BaseFocusLoopProps<E extends ElementType = "div"> = {
  /**
   * The HTML tag to use for the wrapper
   *
   * @default div
   */
  as?: E;

  /**
   * Keys to trigger the next focusable element
   *
   * @default PageUp
   * @see https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
   */
  nextKeys: string | string[];

  /**
   * Keys to trigger the previous focusable element
   *
   * @default PageDown
   */
  prevKeys: string | string[];

  /**
   * Prevent the default behavior of the keys
   */
  prevent: boolean;
};

function compareKeys(key: string, keys: string | string[]) {
  if (Array.isArray(keys)) {
    return keys.includes(key);
  }

  return keys === key;
}

export const BaseFocusLoop = forwardRef(function BaseFocusLoop<
  E extends ElementType = "div",
>(
  {
    prevent = true,
    prevKeys = "PageUp",
    nextKeys = "PageDown",
    children,
    as: element,
    ...props
  }: PolymorphicComponentProps<E, BaseFocusLoopProps<E>>,
  ref: PolymorphicRef<E>,
) {
  const Component = element || "div";

  const wrapperRef = useRef<PolymorphicRef<E>>(null);

  useImperativeHandle(ref, () => wrapperRef.current, [wrapperRef]);

  const [focusableItems, setFocusableItems] = useState(new Map());

  const listeners = useRef<
    {
      focusListener: () => void;
      focusOutListener: () => void;
      node: HTMLElement;
    }[]
  >([]);

  const focusActiveIndex = useRef<number | null>(null);

  const focusLoopLength = useRef(0);

  const clearListeners = useCallback(() => {
    listeners.current.forEach(({ node, focusListener, focusOutListener }) => {
      node.removeEventListener("focus", focusListener);
      node.removeEventListener("focusout", focusOutListener);
    });
    listeners.current = [];
  }, [listeners]);

  const checkFocusables = useCallback(() => {
    if (wrapperRef.current) {
      const treeWalker = document.createTreeWalker(
        wrapperRef.current,
        NodeFilter.SHOW_ELEMENT,
        {
          acceptNode: (node: HTMLElement) => {
            // @ts-expect-error disabled may not be defined
            if (node.disabled || !node.isConnected) {
              return NodeFilter.FILTER_SKIP;
            }

            return node.tabIndex >= 0
              ? NodeFilter.FILTER_ACCEPT
              : NodeFilter.FILTER_SKIP;
          },
        },
      );

      clearListeners();
      const newFocusableItems = new Map();

      let index = 0;

      while (treeWalker.nextNode()) {
        const node = treeWalker.currentNode as HTMLElement;

        const currentIndex = index;

        newFocusableItems.set(index, node as HTMLElement);

        const focusListener = () => {
          focusActiveIndex.current = currentIndex;
        };

        const focusOutListener = () => {
          focusActiveIndex.current = null;
        };

        node.addEventListener("focus", focusListener);
        node.addEventListener("focusout", focusOutListener);

        listeners.current.push({ node, focusListener, focusOutListener });

        focusLoopLength.current = index;
        index += 1;
      }

      setFocusableItems(newFocusableItems);
    }
  }, [clearListeners, wrapperRef]);

  useEffect(() => {
    checkFocusables();

    return () => {
      clearListeners();
    };
  }, [checkFocusables, clearListeners]);

  useEventListener("keydown", (ev) => {
    if (focusActiveIndex.current === null) {
      return;
    }

    if (prevent) {
      ev.preventDefault();
    }

    /** handele prev */
    if (compareKeys(ev.key, prevKeys)) {
      if (focusActiveIndex.current > 0) {
        focusableItems.get(focusActiveIndex.current - 1)?.focus();
      } else {
        focusableItems.get(focusLoopLength)?.focus();
      }
    }

    /** handle next */
    if (compareKeys(ev.key, nextKeys)) {
      if (focusActiveIndex.current + 1 <= focusLoopLength.current) {
        focusableItems.get(focusActiveIndex.current + 1)?.focus();
      } else {
        focusableItems.get(0)?.focus();
      }
    }
  });

  return (
    <Component {...props} ref={wrapperRef}>
      {children}
    </Component>
  );
});
