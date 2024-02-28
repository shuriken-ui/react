"use client";
import { tree, fileTree, topicTree, teamTree } from "./treselect";
import { Fragment, ReactNode, useRef, useState } from "react";
import NuiPreview from "@/components/NuiPreview";

import { Menu } from "@headlessui/react";

import {
  BaseTreeSelect,
  BaseTreeSelectItem,
  type BaseTreeSelectRef,
  BaseButton,
  BaseDropdown,
} from "@shuriken-ui/react";

const TreeSelect = () => {
  const [selection1, setSelection1] = useState<unknown[]>([]);
  const [selection2, setSelection2] = useState<unknown[]>([]);
  const [selection3, setSelection3] = useState<unknown[]>([]);
  const [selection4, setSelection4] = useState<unknown[]>([]);

  const treeSelectRef = useRef<BaseTreeSelectRef>(null);
  const treeSelectRef2 = useRef<BaseTreeSelectRef>(null);
  return (
    <Fragment>
      <NuiPreview title="Default" description="Tree select component default">
        <div className="max-w-xs">
          <BaseTreeSelect
            items={tree}
            renderPendingLabel={({ parent }) =>
              parent?.item ? parent.item + " loading..." : "loading..."
            }
            renderEmptyLabel={({ parent }) =>
              parent?.item ? parent.item + " is empty" : "is empty"
            }
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Checkbox" description="Tree select component checkbox">
        <div className="max-w-xs">
          <BaseTreeSelect items={tree} value={selection1} />
        </div>
      </NuiPreview>

      <NuiPreview title="Lines" description="Tree select component lines">
        <div className="max-w-xs">
          <BaseTreeSelect
            items={tree}
            treeline
            icons={{
              open: "lucide:chevron-up",
              closed: "lucide:chevron-down",
              pending: "svg-spinners:270-ring-with-bg",
            }}
          />
        </div>
      </NuiPreview>

      <NuiPreview
        title="Custom"
        description="Tree select component custom icons"
      >
        <div className="max-w-xs">
          <BaseTreeSelect
            items={tree}
            icons={{
              open: "tabler:square-minus",
              closed: "tabler:square-plus",
            }}
            treeline
            renderItemLabel={({ child }) => (
              <span>custom: {child.item as ReactNode}</span>
            )}
          />
        </div>
      </NuiPreview>

      <NuiPreview title="File" description="Tree select component file tree">
        <div className="max-w-xs">
          <BaseTreeSelect
            value={selection2}
            items={fileTree}
            icons={{
              open: "clarity:folder-open-line",
              closed: "clarity:folder-line",
              item: "clarity:file-line",
            }}
            classes={{
              treeline: "border-muted-300 dark:border-muted-700",
              checkbox: {
                wrapper: "!text-success-500 mx-2",
              },
            }}
            treeline
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Topic" description="Tree select component topic icons">
        <div className="max-w-xs">
          <BaseTreeSelect
            items={topicTree}
            renderItemLabel={({ level, child, toggle }) => (
              <BaseTreeSelectItem
                level={level}
                toggle={toggle}
                value={{
                  name: child.item.name,
                  text: child.item.text,
                  icon: child.item.icon,
                }}
              />
            )}
          />
        </div>
      </NuiPreview>

      <NuiPreview title="Image" description="Tree select component images">
        <div className="max-w-full">
          <BaseTreeSelect
            ref={treeSelectRef2}
            items={teamTree}
            treeline
            value={selection3}
            classes={{
              checkbox: {
                wrapper: "!text-success-500 mx-2",
              },
            }}
            renderItemLabel={({ level, child, toggle }) => (
              <BaseTreeSelectItem
                level={level}
                toggle={toggle}
                value={{
                  name: child.item?.name,
                  text: child.item?.text,
                  media: child.item?.media,
                }}
              />
            )}
          />
          <div className="flex gap-2 mt-4">
            <BaseButton
              onClick={() => treeSelectRef2.current?.toggleChildrenSelection()}
            >
              toggle selection
            </BaseButton>
            <BaseButton
              onClick={() => treeSelectRef2.current?.toggleChildrenSelection()}
            >
              select all selection
            </BaseButton>
            <BaseButton
              onClick={() => treeSelectRef2.current?.unselectAllChildren()}
            >
              unselect all selection
            </BaseButton>
          </div>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Dropdown"
        description="Tree select component in dropdown"
      >
        <div>
          <BaseDropdown
            variant="button"
            label="Dropdown"
            size="lg"
            orientation="start"
          >
            <BaseTreeSelect
              ref={treeSelectRef}
              items={teamTree}
              value={selection4}
              renderItemLabel={({ level, child, toggle }) => (
                <Menu.Item>
                  <BaseTreeSelectItem
                    level={level}
                    toggle={toggle}
                    value={{
                      name: child.item?.name,
                      text: child.item?.text,
                      media: child.item?.media,
                    }}
                  />
                </Menu.Item>
              )}
            />
            <BaseButton
              onClick={() => {
                console.log("toggle all ?", treeSelectRef.current);
                treeSelectRef.current?.toggleChildrenSelection();
              }}
            >
              toggle selection
            </BaseButton>
          </BaseDropdown>
          <div className="mt-4">
            <pre>{JSON.stringify(selection4)}</pre>
          </div>
        </div>
      </NuiPreview>
    </Fragment>
  );
};

export default TreeSelect;
