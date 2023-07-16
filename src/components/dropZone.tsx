import React, { useCallback } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';

export default function DropZone() {
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = (e: any) => {
        const text = e.target.result;
        console.log(text);
      };
      reader.readAsText(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
    // <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
    //   {({ getRootProps, getInputProps }) => (
    //     <section>
    //       <div {...getRootProps()}>
    //         <Box component="span" sx={{ p: 15, border: '1px dashed grey' }}>
    //           <input {...getInputProps()} />
    //           <label>
    //             <b>Choose a file</b> or drag it here.
    //           </label>
    //         </Box>
    //       </div>
    //     </section>
    //   )}
    // </Dropzone>
  );
}
