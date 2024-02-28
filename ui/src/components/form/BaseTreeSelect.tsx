/* eslint-disable no-nested-ternary */
import { Icon } from "@iconify/react";
import {
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { cn } from "../../utils";
import { BaseCheckbox } from "./BaseCheckbox";

type TreeViewItemTreeLeaf = {
  item: unknown;
};

type TreeViewItemTreeChildren = {
  item: unknown;
  open?: boolean;
  // eslint-disable-next-line no-use-before-define
  children?: TreeViewTreeSource;
};

type TreeViewItemNode = TreeViewItemTreeLeaf | TreeViewItemTreeChildren;

type TreeViewTreeSource =
  | TreeViewItemNode[]
  | (() => Promise<TreeViewItemNode[]>);

type TreeViewSubtreeState = {
  tree: TreeViewItemNode[];
  pending: boolean;
  loaded: boolean;
};

type BaseTreeSelectProps = {
  /**
   * The tree items
   */
  items?: TreeViewTreeSource;

  /**
   *
   */
  value?: unknown[];

  /**
   * Custom icons to use for the component.
   */
  icons?: {
    open?: string;
    closed?: string;
    item?: string;
    pending?: string;
    empty?: string;
  };

  /**
   * Display a line between items of the same level.
   */
  treeline?:
    | boolean
    | {
        offset?: string;
        minLevel?: number;
      };

  /**
   * Translation strings.
   */
  i18n?: {
    pending: string;
    empty: string;
  };

  /**
   * Optional CSS classes to apply to the wrapper, label, and input elements.
   */
  classes?: {
    /**
     * Classes applied to the icon when the node is pending.
     */
    pendingIcon?: string | string[];
    /**
     * Classes applied to the icon when the node is empty.
     */
    emptyIcon?: string | string[];
    /**
     * Classes applied to the icon when the node have children.
     */
    treeIcon?: string | string[];
    /**
     * Classes applied to the icon when the node have no children.
     */
    itemIcon?: string | string[];
    /**
     * Classes applied to the treeline.
     */
    treeline?: string | string[];
    /**
     * Classes applied to the inner checkbox element.
     *
     * @see [BaseCheckbox]
     */
    checkbox?: unknown;
  };

  /**
   * @internal
   */
  level?: number;

  /**
   * @internal
   */
  parent?: unknown;

  /**
   * Renders custom pending ui
   */
  renderPending?: (props: { level: number; parent: unknown }) => ReactNode;

  /**
   * Renders custom pending icon
   */
  renderPendingIcon?: (props: { level: number; parent: unknown }) => ReactNode;

  /**
   * Renders custom pending label
   */
  renderPendingLabel?: (props: { level: number; parent: unknown }) => ReactNode;

  /**
   * Renders custom empty ui
   */
  renderEmpty?: (props: { level: number; parent: unknown }) => ReactNode;

  /**
   * Renders custom empty icon
   */
  renderEmptyIcon?: (props: { level: number; parent: unknown }) => ReactNode;

  /**
   * Renders custom empty label
   */
  renderEmptyLabel?: (props: { level: number; parent: unknown }) => ReactNode;

  /**
   * Renders custom item ui
   */
  renderItem?: (props: {
    index: number;
    level: number;
    child: TreeViewItemNode;
    parent: unknown;
    toggle: () => boolean;
    open: boolean;
  }) => ReactNode;

  /**
   * Renders custom item icon
   */
  renderItemIcon?: (props: {
    index: number;
    level: number;
    child: TreeViewItemNode;
    parent: unknown;
    toggle: (event?: Event) => void;
    open: boolean;
  }) => ReactNode;

  /**
   *  Renders custom item select
   */
  renderItemSelect?: (props: {
    index: number;
    level: number;
    child: TreeViewItemNode;
    parent: unknown;
    toggle: (event?: Event) => void;
    open: boolean;
  }) => ReactNode;

  /**
   * Renders custom item label
   */
  renderItemLabel?: (props: {
    index: number;
    level: number;
    child: TreeViewItemNode;
    parent: unknown;
    toggle: (event?: Event) => void;
    open: boolean;
  }) => ReactNode;

  /**
   * Renders custom tree children
   */
  renderTreeChildren?: (props: {
    index: number;
    level: number;
    child: TreeViewItemTreeChildren;
    parent: unknown;
  }) => ReactNode;
};

const defaultIcons = {
  open: "lucide:minus",
  closed: "lucide:plus",
  item: "",
  empty: "",
  pending: "",
};

const defaultTreeline = {
  offset: "0.625rem",
  minLevel: 1,
};

const defaultCheckboxClasses = {
  wrapper: "text-primary-500 scale-[0.8] me-1",
};

type TreeMap = {
  treeMap: WeakMap<TreeViewTreeSource, TreeViewSubtreeState>;
};

export type BaseTreeSelectRef = {
  /**
   * The loaded tree items from the `children` prop.
   */
  tree: TreeViewItemNode[] | undefined;

  /**
   * Force the component to load the tree from the `children` prop.
   */
  loadTree: (source?: TreeViewTreeSource) => Promise<void>;

  /**
   * Returns all nodes from a tree source
   */
  getChildren: (tree?: TreeViewTreeSource) => TreeViewItemNode[] | undefined;

  /**
   * Returns the children from a node.
   */
  getNodeChildren: (node?: TreeViewItemNode) => TreeViewItemNode[] | undefined;

  /**
   * Check if all sub-nodes are selected from a node.
   */
  areAllChildSelected: (node?: TreeViewItemNode) => boolean;

  /**
   * Check if some sub-nodes are selected from a node.
   */
  areSomeChildSelected: (node?: TreeViewItemNode) => boolean;

  /**
   * Select all sub-nodes from a node.
   */
  selectAllNode: (node?: TreeViewItemNode) => void;

  /**
   * Unselect all leaf nodes from a node.
   */
  unselectAllNode: (node?: TreeViewItemNode) => void;

  /**
   * Is a node in undeterminate state. (some children are selected / children not loaded)
   */
  isUndeterminate: (node?: TreeViewItemNode) => boolean;

  /**
   * Is a node loaded.
   */
  isNodeLoaded: (node?: TreeViewItemNode) => boolean;

  /**
   * Invert the selection state from a node.
   */
  toggleNodeSelection: (node?: TreeViewItemNode, event?: Event) => void;

  /**
   * Invert the selection state.
   */
  toggleChildrenSelection: (tree?: TreeViewItemNode[], event?: Event) => void;

  /**
   * Select all nodes.
   */
  selectAllChildren: (tree?: TreeViewItemNode[]) => void;

  /**
   * Unselect all nodes.
   */
  unselectAllChildren: (tree?: TreeViewItemNode[]) => void;
};

export const BaseTreeSelect = forwardRef<
  BaseTreeSelectRef,
  BaseTreeSelectProps
>(function BaseTreeSelect(
  {
    icons: iconsProp = {
      open: "lucide:minus",
      closed: "lucide:plus",
      item: "",
      pending: "",
      empty: "",
    },
    classes = {
      pendingIcon: "",
      emptyIcon: "",
      treeIcon: "",
      itemIcon: "",
      treeline: "border-muted-300 dark:border-muted-700",
      checkbox: {
        wrapper: "text-primary-500 scale-[0.8] me-1",
      },
    },
    treeline: treelineProp = false,
    i18n = {
      pending: "pending...",
      empty: "empty",
    },
    level = 1,
    ...props
  },
  ref,
) {
  const [treeState, setTreeState] = useState<TreeMap>({
    treeMap: new WeakMap(),
  });

  const icons = useMemo(() => {
    if (!iconsProp) return defaultIcons;

    return {
      ...defaultIcons,
      ...iconsProp,
    };
  }, [iconsProp]);

  const treeline = useMemo(() => {
    if (treelineProp === false) return false;
    if (treelineProp === true) return defaultTreeline;

    return {
      ...defaultTreeline,
      ...treelineProp,
    };
  }, [treelineProp]);

  const checkboxClasses = useMemo(() => {
    if (!classes?.checkbox) return defaultCheckboxClasses;

    return {
      ...defaultCheckboxClasses,
      ...classes.checkbox,
    };
  }, [classes.checkbox]);

  const loadTree = useCallback(
    async (source?: TreeViewTreeSource) => {
      if (!source) return;
      // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
      const _subtreeState = treeState?.treeMap.get(source);

      if (!_subtreeState) {
        return;
      }

      if (typeof source === "function") {
        _subtreeState.pending = true;
        try {
          _subtreeState.tree = await source();
        } finally {
          _subtreeState.pending = false;
          _subtreeState.loaded = true;
        }

        return;
      }

      _subtreeState.tree = source ?? [];
      _subtreeState.loaded = true;
    },
    [treeState?.treeMap],
  );

  const getChildren = useCallback(
    (tree?: TreeViewTreeSource): TreeViewItemNode[] | undefined => {
      if (!tree) return;
      if (treeState.treeMap.has(tree)) {
        // eslint-disable-next-line consistent-return
        return treeState.treeMap.get(tree)?.tree;
      }

      // eslint-disable-next-line consistent-return
      return Array.isArray(tree) ? tree : undefined;
    },
    [treeState.treeMap],
  );

  function getDefaultOpenMap(source?: TreeViewTreeSource) {
    const map: Record<number, boolean> = {};

    const children = getChildren(source);

    if (!children) return map;

    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const index in children) {
      const item = children[index]!;

      if ("open" in item && item.open !== undefined) {
        map[index] = item.open;
      }
    }

    return map;
  }

  const subtreeState = useMemo(
    () => (props.items ? treeState.treeMap.get(props.items) : undefined),
    [props.items, treeState?.treeMap],
  );

  const [openMap, setOpenMap] = useState(getDefaultOpenMap(props.items));

  const internalItems = useMemo(() => subtreeState?.tree, [subtreeState?.tree]);

  const isNodeLoaded = useCallback(
    (node?: TreeViewItemNode) => {
      if (!node) return false;

      if ("children" in node) {
        if (typeof node.children === "function") {
          return treeState?.treeMap.get(node.children)?.loaded ?? false;
        }

        return true;
      }

      return true;
    },
    [treeState?.treeMap],
  );

  const getNodeChildren = useCallback(
    (node?: TreeViewItemNode) => {
      if (!node) return;
      if (!("children" in node) || !node.children) return;

      // eslint-disable-next-line consistent-return
      return getChildren(node.children);
    },
    [getChildren],
  );

  const areAllChildSelected = useCallback(
    (node?: TreeViewItemNode): boolean => {
      // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
      const _value = props.value;

      if (!_value) return false;
      if (!node) return false;
      const children = getNodeChildren(node);

      if (!children) {
        return false;
      }

      return (
        isNodeLoaded(node) &&
        children.every((child) => {
          if (!("children" in child)) return _value.includes(child);

          const subchildren = getNodeChildren(child);

          if (subchildren && isNodeLoaded(child)) {
            return areAllChildSelected(child);
          }

          return false;
        })
      );
    },
    [getNodeChildren, isNodeLoaded, props.value],
  );

  const areSomeChildSelected = useCallback(
    (node?: TreeViewItemNode): boolean => {
      // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
      const _value = props.value;

      if (!_value) return false;
      if (!node) return false;
      const children = getNodeChildren(node);

      if (!children) {
        return false;
      }

      return (
        isNodeLoaded(node) &&
        children.some((child) => {
          if (!("children" in child)) return _value.includes(child);

          const subchildren = getNodeChildren(child);

          if (subchildren && isNodeLoaded(child)) {
            return areSomeChildSelected(child);
          }

          return false;
        })
      );
    },
    [getNodeChildren, isNodeLoaded, props.value],
  );

  const isUndeterminate = useCallback(
    (node?: TreeViewItemNode) => {
      if (!node) return false;
      if (!isNodeLoaded(node)) return false;

      return areSomeChildSelected(node) && !areAllChildSelected(node);
    },
    [areAllChildSelected, areSomeChildSelected, isNodeLoaded],
  );

  const selectAllNode = useCallback(
    (node?: TreeViewItemNode) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
      const _value = props.value;

      if (!_value) return;
      if (!node) return;

      if (!("children" in node) || !node.children) {
        const idx = _value.indexOf(node);

        if (idx === -1) {
          _value.push(node);
        }

        return;
      }

      if (!isNodeLoaded(node)) return;

      const children = getNodeChildren(node);

      if (!children) {
        return;
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const child of children) {
        if ("children" in child) {
          selectAllNode(child);
        } else {
          const idx = _value.indexOf(child);

          if (idx === -1) {
            _value.push(child);
          }
        }
      }
    },
    [getNodeChildren, isNodeLoaded, props.value],
  );

  const selectAllChildren = useCallback(
    (tree?: TreeViewItemNode[]) => {
      const children = tree || internalItems;

      if (!children) return;

      // eslint-disable-next-line no-restricted-syntax
      for (const child of children) {
        selectAllNode(child);
      }
    },
    [internalItems, selectAllNode],
  );

  const unselectAllNode = useCallback(
    (node?: TreeViewItemNode) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
      const _value = props.value;

      if (!_value) return;
      if (!node) return;
      if (!("children" in node) || !node.children) {
        const idx = _value.indexOf(node);

        if (idx >= 0) {
          _value.splice(idx, 1);
        }

        return;
      }

      if (!isNodeLoaded(node)) return;

      const children = getNodeChildren(node);

      if (!children) {
        return;
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const child of children) {
        if ("children" in child) {
          unselectAllNode(child);
        } else {
          const idx = _value.indexOf(child);

          if (idx >= 0) {
            _value.splice(idx, 1);
          }
        }
      }
    },
    [getNodeChildren, isNodeLoaded, props.value],
  );

  const unselectAllChildren = useCallback(
    (tree?: TreeViewItemNode[]) => {
      const children = tree || internalItems;

      if (!children) return;

      // eslint-disable-next-line no-restricted-syntax
      for (const child of children) {
        unselectAllNode(child);
      }
    },
    [internalItems, unselectAllNode],
  );

  const toggleNodeSelection = useCallback(
    (node?: TreeViewItemNode, event?: Event) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle
      const _value = props.value;

      if (!_value) return;
      if (!node) return;

      if ("children" in node) {
        if (!isNodeLoaded(node)) {
          event?.preventDefault();

          return;
        }

        const children = getNodeChildren(node);

        if (!children || children.length === 0) {
          event?.preventDefault();

          return;
        }

        if (areAllChildSelected(node)) {
          unselectAllNode(node);
        } else if (children.length > 0) {
          selectAllNode(node);
        }

        return;
      }

      const idx = _value.indexOf(node);

      if (idx >= 0) {
        _value.splice(idx, 1);
      } else {
        _value.push(node);
      }
    },
    [
      areAllChildSelected,
      getNodeChildren,
      isNodeLoaded,
      props.value,
      selectAllNode,
      unselectAllNode,
    ],
  );

  const toggleChildrenSelection = useCallback(
    (tree?: TreeViewItemNode[], event?: Event) => {
      const children = tree || internalItems;

      if (!children) return;

      // eslint-disable-next-line no-restricted-syntax
      for (const child of children) {
        if ("children" in child) {
          toggleChildrenSelection(getNodeChildren(child), event);
        } else {
          toggleNodeSelection(child, event);
        }
      }
    },
    [getNodeChildren, internalItems, toggleNodeSelection],
  );

  useImperativeHandle(
    ref,
    () => ({
      tree: internalItems,
      loadTree,
      getChildren,
      getNodeChildren,
      areAllChildSelected,
      areSomeChildSelected,
      selectAllNode,
      unselectAllNode,
      isUndeterminate,
      isNodeLoaded,
      toggleNodeSelection,
      toggleChildrenSelection,
      selectAllChildren,
      unselectAllChildren,
    }),
    [
      areAllChildSelected,
      areSomeChildSelected,
      getChildren,
      getNodeChildren,
      internalItems,
      isNodeLoaded,
      isUndeterminate,
      loadTree,
      selectAllChildren,
      selectAllNode,
      toggleChildrenSelection,
      toggleNodeSelection,
      unselectAllChildren,
      unselectAllNode,
    ],
  );

  useEffect(() => {
    const initChildren = async () => {
      if (props.items) {
        const localTree: TreeMap = {
          treeMap: new WeakMap(),
        };

        localTree.treeMap.set(props.items, {
          tree: [],
          pending: false,
          loaded: false,
        });

        setTreeState(localTree);
      }
    };

    initChildren();
  }, [props.items]);

  useEffect(() => {
    loadTree(props.items);
  }, [loadTree, props.items]);

  return (
    <ul className="treeview relative w-full [&_.treeview]:ps-6">
      {subtreeState?.pending && (
        <li>
          {props.renderPending?.({ level, parent: props.parent }) || (
            <div className="text-muted-400 dark:text-muted-600 relative z-10 flex items-center gap-1 py-2 font-sans text-sm">
              {props.renderPendingIcon?.({ level, parent: props.parent }) || (
                <span className="text-muted-400 flex h-5 w-5 items-center justify-center">
                  {icons.pending && (
                    <Icon
                      icon={icons.pending}
                      className={cn("h-4 w-4", classes?.pendingIcon)}
                    />
                  )}
                </span>
              )}

              {props.renderPendingLabel?.({
                level,
                parent: props.parent,
              }) || <span>{i18n.pending}</span>}
            </div>
          )}
        </li>
      )}
      {!subtreeState?.pending && !subtreeState?.tree?.length ? (
        <li>
          {props.renderEmpty?.({ level, parent: props.parent }) || (
            <div className="text-muted-400 dark:text-muted-600 relative z-10 flex items-center gap-1 py-2 font-sans text-sm">
              {props.renderEmptyIcon?.({ level, parent: props.parent }) || (
                <span className="text-muted-400 flex h-5 w-5 items-center justify-center">
                  {icons.empty && (
                    <Icon
                      icon={icons.empty}
                      className={cn("h-4 w-4", classes?.emptyIcon)}
                    />
                  )}
                </span>
              )}

              {props.renderEmptyLabel?.({ level, parent: props.parent }) || (
                <span>{i18n.empty}</span>
              )}
            </div>
          )}
        </li>
      ) : (
        subtreeState.tree.map((child, index) => (
          <li key={index}>
            {props.renderItem?.({
              index,
              level,
              child,
              parent: props.parent,
              toggle: () => {
                const newOpenValue = !openMap[index];

                setOpenMap((oldMap) => ({
                  ...oldMap,
                  [index]: newOpenValue,
                }));

                return newOpenValue;
              },
              open: openMap[index]!,
            }) || (
              <div className="text-muted-700 dark:text-muted-400 relative z-10 flex items-center gap-1 py-2 font-sans text-sm">
                {"children" in child ? (
                  <button
                    type="button"
                    className="text-muted-400 nui-focus me-1 flex h-5 w-5 items-center justify-center rounded"
                    onClick={() =>
                      setOpenMap((oldMap) => ({
                        ...oldMap,
                        [index]: !openMap[index],
                      }))
                    }
                  >
                    {openMap[index] && icons.open ? (
                      <Icon
                        icon={icons.open}
                        className={cn("h-4 w-4", classes?.treeIcon)}
                      />
                    ) : (
                      !openMap[index] &&
                      icons.closed && (
                        <Icon
                          icon={icons.closed}
                          className={cn("h-4 w-4", classes?.treeIcon)}
                        />
                      )
                    )}
                  </button>
                ) : (
                  props.renderItemIcon?.({
                    index,
                    level,
                    child,
                    parent: props.parent,
                    toggle: (event?: Event) => {
                      if ("children" in child) {
                        openMap[index] = !openMap[index];

                        return;
                      }

                      toggleNodeSelection(child, event);
                    },
                    open: openMap[index]!,
                  }) || (
                    <span className="text-muted-400 me-1 flex h-5 w-5 items-center justify-center">
                      {icons.item && (
                        <Icon
                          icon={icons.item}
                          className={cn("h-4 w-4", classes?.itemIcon)}
                        />
                      )}
                    </span>
                  )
                )}

                {props.value &&
                  (props.renderItemSelect?.({
                    index,
                    level,
                    child,
                    parent: props.parent,
                    toggle: (event?: Event) => {
                      if ("children" in child) {
                        openMap[index] = !openMap[index];

                        return;
                      }

                      toggleNodeSelection(child, event);
                    },
                    open: openMap[index]!,
                  }) ||
                    ("children" in child ? (
                      <BaseCheckbox
                        checked={
                          isNodeLoaded(child) &&
                          !!getNodeChildren(child)?.length &&
                          areAllChildSelected(child)
                        }
                        indeterminate={isUndeterminate(child)}
                        disabled={
                          subtreeState.pending ||
                          !isNodeLoaded(child) ||
                          getNodeChildren(child)?.length === 0
                        }
                        classes={checkboxClasses}
                        color="default"
                        onClick={(event) =>
                          toggleNodeSelection(child, event as unknown as Event)
                        }
                      />
                    ) : (
                      <BaseCheckbox
                        disabled={subtreeState.pending}
                        value={child as unknown as string}
                        classes={checkboxClasses}
                        color="default"
                        onClick={(event) =>
                          toggleNodeSelection(child, event as unknown as Event)
                        }
                      />
                    )))}

                {props.renderItemLabel?.({
                  index,
                  level,
                  child,
                  parent: props.parent,
                  toggle: (event) => {
                    if ("children" in child) {
                      setOpenMap((oldMap) => ({
                        ...oldMap,
                        [index]: !openMap[index],
                      }));

                      return;
                    }

                    toggleNodeSelection(child, event);
                  },
                  open: openMap[index]!,
                }) || <span>{child.item as ReactNode}</span>}
              </div>
            )}

            {"children" in child && index in openMap && openMap[index] && (
              <div className="relative">
                {treeline && (
                  <div
                    className={cn(
                      "absolute top-0 h-full w-px border-l",
                      classes?.treeline,
                    )}
                    style={{
                      left: treeline.offset,
                    }}
                  />
                )}

                {props.renderTreeChildren?.({
                  index,
                  level,
                  child,
                  parent: props.parent,
                }) || (
                  <BaseTreeSelect
                    level={level + 1}
                    items={child.children}
                    i18n={i18n}
                    parent={child}
                    icons={icons}
                    treeline={treeline}
                    classes={classes}
                  />
                )}
              </div>
            )}
          </li>
        ))
      )}
    </ul>
  );
});
