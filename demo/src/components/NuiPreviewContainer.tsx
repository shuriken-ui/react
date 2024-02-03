import React, { FC, PropsWithChildren } from "react";

const NuiPreviewContainer: FC<PropsWithChildren<{ title?: string }>> = ({
  title,
  children,
}) => {
  return (
    <div className="w-full bg-muted-50 dark:bg-muted-900 min-h-screen px-4">
      <div className="w-full max-w-7xl mx-auto py-12">
        {title && (
          <h2 className="text-2xl font-medium mb-10 text-muted-800 dark:text-muted-100">
            {title}
          </h2>
        )}
        <div className="flex flex-col gap-y-20 w-full">{children}</div>
      </div>
    </div>
  );
};

export default NuiPreviewContainer;
