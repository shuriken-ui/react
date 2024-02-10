"use client";
import React, { Fragment, useState } from "react";
import NuiPreview from "@/components/NuiPreview";
import {
  BaseInputFileHeadless,
  BaseButtonIcon,
  BaseProgress,
} from "@shuriken-ui/react";

import Iconify from "@/components/Iconify";
import Image from "next/image";

const currentAvatar = "https://tairo.cssninja.io/img/avatars/10.svg";
const InputFileHeadless = () => {
  const [inputFile, setInputFile] = useState<FileList | null>(null);

  const [uploadedFiles, setUploadedFiles] = useState<FileList | null>(null);
  return (
    <Fragment>
      <NuiPreview title="Profile" description="Profile upload variation">
        <div>
          <form action="" method="POST" onSubmit={(e) => e.preventDefault()}>
            <BaseInputFileHeadless
              accept="image/*"
              value={inputFile}
              onChange={setInputFile}
            >
              {({ open, remove, preview, files }) => (
                <div className="relative h-20 w-20">
                  {files?.length && files.item(0) ? (
                    <Fragment>
                      <Image
                        height={80}
                        width={80}
                        src={preview(files.item(0)!)}
                        alt="Upload preview"
                        className="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"
                      />

                      <div className="absolute bottom-0 end-0 z-20">
                        <BaseButtonIcon
                          size="sm"
                          rounded="full"
                          data-nui-tooltip="Remove image"
                          className="scale-90"
                          onClick={() => remove(files.item(0)!)}
                        >
                          <Iconify icon="lucide:x" className="h-4 w-4" />
                        </BaseButtonIcon>
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <Image
                        height={80}
                        width={80}
                        src={currentAvatar}
                        alt="Upload preview"
                        className="bg-muted-200 dark:bg-muted-700/60 h-20 w-20 rounded-full object-cover object-center"
                      />

                      <div className="absolute bottom-0 end-0 z-20">
                        <div
                          className="relative"
                          data-nui-tooltip="Upload image"
                        >
                          <BaseButtonIcon
                            size="sm"
                            rounded="full"
                            onClick={open}
                          >
                            <Iconify icon="lucide:plus" className="h-4 w-4" />
                          </BaseButtonIcon>
                        </div>
                      </div>
                    </Fragment>
                  )}
                </div>
              )}
            </BaseInputFileHeadless>
          </form>
        </div>
      </NuiPreview>

      <NuiPreview title="File" description="File upload variation">
        <div className="max-w-xl">
          <BaseInputFileHeadless
            multiple
            value={uploadedFiles}
            onChange={setUploadedFiles}
          >
            {({ open, remove, preview, drop, files }) => (
              <Fragment>
                <div className="mb-4 flex items-center gap-2">
                  <button
                    type="button"
                    className="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                    // @ts-ignore
                    tooltip="Select files"
                    onClick={open}
                  >
                    <Iconify icon="lucide:plus" className="h-4 w-4" />

                    <span className="sr-only">Select files</span>
                  </button>

                  <button
                    type="button"
                    className="nui-focus border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                    // @ts-ignore
                    tooltip="Start Upload"
                  >
                    <Iconify icon="lucide:arrow-up" className="h-4 w-4" />

                    <span className="sr-only">Start Upload</span>
                  </button>
                </div>
                <div
                  onDragEnter={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onDrop={(e) => drop(e as unknown as DragEvent)}
                >
                  {!files?.length ? (
                    <div
                      className="nui-focus border-muted-300 dark:border-muted-700 hover:border-muted-400 focus:border-muted-400 dark:hover:border-muted-600 dark:focus:border-muted-700 group cursor-pointer rounded-lg border-[3px] border-dashed p-8 transition-colors duration-300"
                      tabIndex={0}
                      role="button"
                      onClick={open}
                      onKeyDown={(e) => e.key === "Enter" && open()}
                    >
                      <div className="p-5 text-center">
                        <Iconify
                          icon="mdi-light:cloud-upload"
                          className="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 mb-2 h-10 w-10 transition-colors duration-300 inline-block"
                        />

                        <h4 className="text-muted-400 font-sans text-sm">
                          Drop files to upload
                        </h4>

                        <div>
                          <span className="text-muted-400 font-sans text-[0.7rem] font-semibold uppercase">
                            Or
                          </span>
                        </div>

                        <label
                          htmlFor="file"
                          className="text-muted-400 group-hover:text-primary-500 group-focus:text-primary-500 cursor-pointer font-sans text-sm underline underline-offset-4 transition-colors duration-300"
                        >
                          Select files
                        </label>
                      </div>
                    </div>
                  ) : (
                    <ul className="mt-6 space-y-2">
                      {Array.from(files).map((file) => (
                        <li key={file.name}>
                          <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative flex items-center justify-end gap-2 rounded-xl border bg-white p-3">
                            <div className="flex items-center gap-2">
                              <div className="shrink-0">
                                {file.type.startsWith("image") ? (
                                  <Image
                                    height={56}
                                    width={56}
                                    className="h-14 w-14 rounded-xl object-cover object-center"
                                    src={preview(file)}
                                    alt="Image preview"
                                  />
                                ) : (
                                  <Image
                                    height={56}
                                    width={56}
                                    className="h-14 w-14 rounded-xl object-cover object-center"
                                    src="https://tairo.cssninja.io/img/avatars/placeholder-file.png"
                                    alt="Image preview"
                                  />
                                )}
                              </div>

                              <div className="font-sans">
                                <span className="text-muted-800 dark:text-muted-100 line-clamp-1 block text-sm">
                                  {file.name}
                                </span>

                                <span className="text-muted-400 block text-xs">
                                  {file.size}
                                </span>
                              </div>
                            </div>

                            <div className="ms-auto w-32 px-4 transition-opacity duration-300 opacity-100">
                              <BaseProgress
                                value={0}
                                size="xs"
                                color="success"
                              />
                            </div>

                            <div className="flex gap-2">
                              <button
                                className="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                                disabled
                                type="button"
                                // @ts-ignore
                                tooltip="Cancel"
                              >
                                <Iconify
                                  icon="lucide:slash"
                                  className="h-4 w-4"
                                />

                                <span className="sr-only">Cancel</span>
                              </button>

                              <button
                                className="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                                type="button"
                                // @ts-ignore
                                tooltip="Upload"
                              >
                                <Iconify
                                  icon="lucide:arrow-up"
                                  className="h-4 w-4"
                                />

                                <span className="sr-only">Upload</span>
                              </button>

                              <button
                                className="border-muted-200 hover:border-primary-500 text-muted-700 dark:text-muted-200 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:hover:border-primary-500 dark:hover:text-primary-600 relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border bg-white transition-colors duration-300"
                                type="button"
                                // @ts-ignore
                                tooltip="Remove"
                                onClick={(e) => {
                                  e.preventDefault();
                                  remove(file);
                                }}
                              >
                                <Iconify icon="lucide:x" className="h-4 w-4" />

                                <span className="sr-only">Remove</span>
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Fragment>
            )}
          </BaseInputFileHeadless>
        </div>
      </NuiPreview>
    </Fragment>
  );
};

export default InputFileHeadless;
