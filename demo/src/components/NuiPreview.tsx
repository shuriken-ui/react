import React, { FC, PropsWithChildren } from "react";

const NuiPreview: FC<
  PropsWithChildren<{ title?: string; description?: string }>
> = ({ title, description, children }) => {
  return (
    <div className="border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950 p-6 rounded-sm">
      <div className="mb-6">
        {title && (
          <h3 className="font-sans font-medium text-lg text-muted-800 dark:text-muted-100 mb-2">
            {title}
          </h3>
        )}
        {description && (
          <p className="font-sans text-sm text-muted-500 dark:text-muted-400">
            {description}
          </p>
        )}
      </div>
      {children}
    </div>
  );
};

export default NuiPreview;
