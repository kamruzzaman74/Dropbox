'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import DropzoneComponent from 'react-dropzone';

function Dropzone() {
  const maxSize = 20971520; // Maximum file size in bytes (20 MB)

  return (
    <DropzoneComponent
      minSize={0}
      maxSize={maxSize}
      onDrop={(acceptedFiles) => console.log(acceptedFiles)}
    >
      {({
        getRootProps,
        getInputProps,
        isDragReject,
        isDragActive,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

        return (
          <section className='m-4'>
            <div {...getRootProps()}
            className={cn(
                "w-full flex justify-center items-center p-5 border border-dashed rounded-lg text-center",
                 isDragActive ?"bg-[#035FFE] text-white animate-pulse":"bg-slate-100/50 dark:bg-slate-500/80 text-slate-400"
            )}
            >
              <input {...getInputProps()} />
              {!isDragActive && !isDragReject && !isFileTooLarge && 
                "Click here to drop a file to upload!"
              }
              {isDragActive && !isDragReject && !isFileTooLarge && 
           " Drop to upload this file!"
              }
              {isDragReject && 
                " File type not accepted, sorry! "
              }
              {isFileTooLarge && 
               "File is too large"
              }
            </div>
          </section>
        );
      }}
    </DropzoneComponent>
  );
}

export default Dropzone;
