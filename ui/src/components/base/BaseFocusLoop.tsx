import {
  ElementType,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { PolymorphicComponentProps, PolymorphicRef } from "../../types";

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

  return (
    <Component {...props} ref={ref}>
      {children}
    </Component>
  );
});
