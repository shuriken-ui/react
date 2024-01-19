"use client";

import {
  BaseAccordion,
  BaseAvatar,
  BaseButton,
  BaseButtonAction,
  BaseButtonIcon,
  BaseCard,
  BaseDropdown,
  BaseHeading,
  BaseIconBox,
  BaseMessage,
  BaseProse,
  useConfig,
  BaseTabSlider,
  BaseTag,
  BaseProgress,
} from "@shuriken-ui/react";
import React from "react";
import { Icon } from "@iconify/react";

const Shapes = () => {
  const config = useConfig();
  return (
    <>
      <div className="flex flex-col gap-12 [&>*]:p-8 [&>:nth-child(odd)]:bg-muted-100 dark:[&>:nth-child(odd)]:bg-muted-900 pb-32">
        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            Shapes orders
          </BaseHeading>
          <div className="flex gap-2">
            <div>straight</div>
            <div>rounded</div>
            <div>curved</div>
            <div>full</div>
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            Current defaults
          </BaseHeading>
          <div className="flex gap-2">
            <BaseProse>
              <pre>
                <code>{JSON.stringify(config.defaultShapes, null, 2)}</code>
              </pre>
            </BaseProse>
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BaseAccordion
          </BaseHeading>
          <div className="flex gap-4">
            <BaseAccordion
              items={[
                { title: "default", content: "default" },
                { title: "default1", content: "default1" },
              ]}
            />
            <BaseAccordion
              shape="straight"
              items={[
                { title: "straight", content: "straight" },
                { title: "straight1", content: "straight1" },
              ]}
            />
            <BaseAccordion
              shape="rounded"
              items={[
                { title: "rounded", content: "rounded" },
                { title: "rounded1", content: "rounded1" },
              ]}
            />
            <BaseAccordion
              shape="curved"
              items={[
                { title: "curved", content: "curved" },
                { title: "curved1", content: "curved1" },
              ]}
            />
            <small>no full</small>
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BaseAutocompleteItem
          </BaseHeading>
          <div className="flex gap-4">
            {/* <BaseAutocompleteItem active :value="{ name: 'default' }" />
      <BaseAutocompleteItem
        shape="straight"
        active
        :value="{ name: 'straight' }"
      />

      
      <BaseAutocompleteItem
        shape="rounded"
        active
        :value="{ name: 'rounded' }"
      />
      <BaseAutocompleteItem
        shape="curved"
        active
        :value="{ name: 'curved' }"
      />
      <BaseAutocompleteItem shape="full" active :value="{ name: 'full' }" /> */}
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BaseAvatar
          </BaseHeading>
          <div className="grid grid-cols-8 gap-6">
            <div className="flex flex-col items-center">
              <BaseAvatar src="https://source.unsplash.com/random/" dot />
              <small>default</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseAvatar
                src="https://source.unsplash.com/random/"
                shape="straight"
                dot
              />
              <small>straight</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseAvatar
                src="https://source.unsplash.com/random/"
                shape="rounded"
                dot
              />
              <small>rounded</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseAvatar
                src="https://source.unsplash.com/random/"
                shape="curved"
                dot
              />
              <small>curved</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseAvatar
                src="https://source.unsplash.com/random/"
                shape="full"
                dot
              />
              <small>full</small>
            </div>
          </div>
        </div>
        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BaseAvatar
            <small>xl</small>
          </BaseHeading>
          <div className="grid grid-cols-8 gap-6">
            <div className="flex flex-col items-center">
              <BaseAvatar
                src="https://source.unsplash.com/random/"
                size="xl"
                dot
              />
              <small>default</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseAvatar
                src="https://source.unsplash.com/random/"
                size="xl"
                shape="straight"
                dot
              />
              <small>straight</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseAvatar
                src="https://source.unsplash.com/random/"
                size="xl"
                shape="rounded"
                dot
              />
              <small>rounded</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseAvatar
                src="https://source.unsplash.com/random/"
                size="xl"
                shape="curved"
                dot
              />
              <small>curved</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseAvatar
                src="https://source.unsplash.com/random/"
                size="xl"
                shape="full"
                dot
              />
              <small>full</small>
            </div>
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BaseButton
          </BaseHeading>
          <div className="flex gap-4">
            <BaseButton>default</BaseButton>
            <BaseButton shape="straight">straight</BaseButton>
            <BaseButton shape="rounded">rounded</BaseButton>
            <BaseButton shape="curved">curved</BaseButton>
            <BaseButton shape="full">full</BaseButton>
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BaseButtonAction
          </BaseHeading>
          <div className="flex gap-4">
            <BaseButtonAction>default</BaseButtonAction>
            <BaseButtonAction shape="straight">straight</BaseButtonAction>
            <BaseButtonAction shape="rounded">rounded</BaseButtonAction>
            <BaseButtonAction shape="curved">curved</BaseButtonAction>
            <BaseButtonAction shape="full">full</BaseButtonAction>
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BaseButtonIcon
          </BaseHeading>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <BaseButtonIcon>
                <Icon icon="fluent-mdl2:shapes" />
              </BaseButtonIcon>
              <small>default</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseButtonIcon shape="straight">
                <Icon icon="fluent-mdl2:shapes" />
              </BaseButtonIcon>
              <small>straight</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseButtonIcon shape="rounded">
                <Icon icon="fluent-mdl2:shapes" />
              </BaseButtonIcon>
              <small>rounded</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseButtonIcon shape="curved">
                <Icon icon="fluent-mdl2:shapes" />
              </BaseButtonIcon>
              <small>curved</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseButtonIcon shape="full">
                <Icon icon="fluent-mdl2:shapes" />
              </BaseButtonIcon>
              <small>full</small>
            </div>
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BaseCard
          </BaseHeading>
          <div className="grid grid-cols-5 gap-6">
            <BaseCard className="p-2">default</BaseCard>
            <BaseCard className="p-2" shape="straight">
              straight
            </BaseCard>
            <BaseCard className="p-2" shape="rounded">
              rounded
            </BaseCard>
            <BaseCard className="p-2" shape="curved">
              curved
            </BaseCard>
            <BaseCard className="p-2" shape="smooth">
              smooth
            </BaseCard>
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BaseDropdown
          </BaseHeading>
          <div className="flex gap-2 items-center">
            <BaseDropdown label="default">default</BaseDropdown>
            <BaseDropdown shape="straight" label="straight">
              straight
            </BaseDropdown>
            <BaseDropdown shape="rounded" label="rounded">
              rounded
            </BaseDropdown>
            <BaseDropdown shape="curved" label="curved">
              curved
            </BaseDropdown>
            <BaseDropdown shape="smooth" label="smooth">
              smooth
            </BaseDropdown>
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BaseIconBox
            <small>bordered</small>
          </BaseHeading>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <BaseIconBox bordered>
                <Icon icon="fluent-mdl2:shapes" />
              </BaseIconBox>
              <small>default</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseIconBox shape="straight" bordered>
                <Icon icon="fluent-mdl2:shapes" />
              </BaseIconBox>
              <small>straight</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseIconBox shape="rounded" bordered>
                <Icon icon="fluent-mdl2:shapes" />
              </BaseIconBox>
              <small>rounded</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseIconBox shape="curved" bordered>
                <Icon icon="fluent-mdl2:shapes" />
              </BaseIconBox>
              <small>curved</small>
            </div>
            <div className="flex flex-col items-center">
              <BaseIconBox shape="full" bordered>
                <Icon icon="fluent-mdl2:shapes" />
              </BaseIconBox>
              <small>full</small>
            </div>
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BaseMessage
          </BaseHeading>
          <div className="flex gap-2">
            <BaseMessage>default</BaseMessage>
            <BaseMessage shape="straight">straight</BaseMessage>
            <BaseMessage shape="rounded">rounded</BaseMessage>
            <BaseMessage shape="curved">curved</BaseMessage>
            <BaseMessage shape="full">full</BaseMessage>
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BasePagination
          </BaseHeading>
          <div className="flex flex-col gap-6">
            {/* <div>
        <BasePagination :item-per-page="1" :total-items="3" />
        <small>default</small>
      </div>
      <div>
        <BasePagination
          shape="straight"
          :item-per-page="1"
          :total-items="3"
        />
        <small>straight</small>
      </div>
      <div>
        <BasePagination shape="rounded" :item-per-page="1" :total-items="3" />
        <small>rounded</small>
      </div>
      <div>
        <BasePagination shape="curved" :item-per-page="1" :total-items="3" />
        <small>curved</small>
      </div>
      <div>
        <BasePagination shape="full" :item-per-page="1" :total-items="3" />
        <small>full</small>
      </div> */}
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BaseProgress
            <small>xl</small>
          </BaseHeading>
          <div className="flex flex-col gap-6">
            <div>
              <BaseProgress size="xl" value={100}></BaseProgress>
              <small>default</small>
            </div>
            <div>
              <BaseProgress
                size="xl"
                shape="straight"
                value={100}
              ></BaseProgress>
              <small>straight</small>
            </div>
            <div>
              <BaseProgress
                size="xl"
                shape="rounded"
                value={100}
              ></BaseProgress>
              <small>rounded</small>
            </div>
            <div>
              <BaseProgress size="xl" shape="curved" value={100}></BaseProgress>
              <small>curved</small>
            </div>
            <div>
              <BaseProgress size="xl" shape="full" value={100}></BaseProgress>
              <small>full</small>
            </div>
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BaseProse
          </BaseHeading>
          <div className="grid grid-cols-5 gap-6 items-end">
            <BaseProse>
              <figure>
                <img src="https://source.unsplash.com/random/" alt="" />
                <figcaption>default</figcaption>
              </figure>
            </BaseProse>
            <BaseProse shape="straight">
              <figure>
                <img src="https://source.unsplash.com/random/" alt="" />
                <figcaption>straight</figcaption>
              </figure>
            </BaseProse>
            <BaseProse shape="rounded">
              <figure>
                <img src="https://source.unsplash.com/random/" alt="" />
                <figcaption>rounded</figcaption>
              </figure>
            </BaseProse>
            <BaseProse shape="curved">
              <figure>
                <img src="https://source.unsplash.com/random/" alt="" />
                <figcaption>curved</figcaption>
              </figure>
            </BaseProse>
            <small>no full</small>
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BaseTabSlider
          </BaseHeading>
          <div className="grid grid-cols-5 gap-6">
            <BaseTabSlider
              tabs={[{ value: "default" }, { value: "default2" }]}
            ></BaseTabSlider>
            <BaseTabSlider
              shape="straight"
              tabs={[{ value: "straight" }, { value: "straight2" }]}
            ></BaseTabSlider>
            <BaseTabSlider
              shape="rounded"
              // :model-value="'rounded2'"
              tabs={[{ value: "rounded" }, { value: "rounded2" }]}
            ></BaseTabSlider>
            <BaseTabSlider
              shape="curved"
              tabs={[{ value: "curved" }, { value: "curved2" }]}
            ></BaseTabSlider>
            <BaseTabSlider
              shape="full"
              tabs={[{ value: "full" }, { value: "full2" }]}
            ></BaseTabSlider>
          </div>
        </div>

        <div>
          <BaseHeading size="xl" weight="medium" className="mb-10">
            BaseTag
          </BaseHeading>
          <div className="flex gap-2">
            <BaseTag>default</BaseTag>
            <BaseTag shape="straight">straight</BaseTag>
            <BaseTag shape="rounded">rounded</BaseTag>
            <BaseTag shape="curved">curved</BaseTag>
            <BaseTag shape="full">full</BaseTag>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shapes;
