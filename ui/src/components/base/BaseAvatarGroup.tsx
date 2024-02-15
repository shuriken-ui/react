import { forwardRef, useMemo } from "react";
import { BaseAvatar } from "./BaseAvatar";
import { cn } from "../../utils";
import { useConfig } from "../../Provider";

type BaseAvatarGroupProps = {
  /** The maximum number of avatars to display. */
  limit?: number;

  /** The size of the avatars.
   *
   */
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

  /** An array of avatar objects. */
  avatars: {
    /** The source URL for the avatar image. */
    src: string;

    /** The source URL for the dark version of the avatar image. */
    srcDark?: string;

    /** The text to display as the avatar. */
    text?: string;
  }[];
};

const sizes = {
  xxs: "nui-avatar-group-xxs",
  xs: "nui-avatar-group-xs",
  sm: "nui-avatar-group-sm",
  md: "nui-avatar-group-md",
  lg: "nui-avatar-group-lg",
  xl: "nui-avatar-group-lg",
  "2xl": "nui-avatar-group-lg",
  "3xl": "nui-avatar-group-lg",
  "4xl": "nui-avatar-group-lg",
};

export const BaseAvatarGroup = forwardRef<HTMLDivElement, BaseAvatarGroupProps>(
  function BaseAvatarGroup(props, ref) {
    const config = useConfig();

    const size = props.size ?? config.BaseAvatarGroup?.size;

    const limit = props.limit ?? config.BaseAvatarGroup?.limit;

    const avatarDisplay = useMemo(() => {
      if (props.avatars && limit && props.avatars.length > limit) {
        return props.avatars.slice(0, limit - 1);
      }

      return props.avatars;
    }, [props.avatars, limit]);

    return (
      <div className={cn("nui-avatar-group", size && sizes[size])} ref={ref}>
        {avatarDisplay.map((avatar, index) => (
          <div
            key={`${avatar.src || avatar.srcDark || "avatar"}-${index}`}
            className="nui-avatar-outer"
          >
            <BaseAvatar
              size={size}
              rounded="full"
              tabIndex={0}
              className="bg-primary-500/20 text-primary-500 !scale-90"
              {...avatar}
              alt=""
            />
          </div>
        ))}
        {limit && props.avatars.length > limit && (
          <div className="nui-avatar-count">
            <div className="nui-avatar-count-inner">
              <span className="nui-avatar-count-text">
                +{props.avatars.length - limit + 1}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  },
);
