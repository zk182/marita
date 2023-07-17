import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';

export default function DropZone(props: any) {
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      let text = '';
      const reader = new FileReader();
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onloadend = () => {
        console.log('finished');
        props.showData(text);
      };
      reader.onload = (e: any) => {
        text = e.target.result;
      };
      reader.readAsText(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <section>
      <div {...getRootProps()}>
        <Box component="span" sx={{ p: 15, border: '1px dashed grey' }}>
          <input {...getInputProps()} />
          <label>
            <b>Choose a file</b> or drag it here. //{' '}
          </label>
        </Box>
      </div>
    </section>
  );
}
