import React from 'react';
import Dropzone from 'react-dropzone';
import Box from '@mui/material/Box';

export default function DropZone() {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <Box component="span" sx={{ p: 15, border: '1px dashed grey' }}>
              <input {...getInputProps()} />
              <label>
                <b>Choose a file</b> or drag it here.
              </label>
            </Box>
          </div>
        </section>
      )}
    </Dropzone>
  );
}
