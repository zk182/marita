import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Box from '@mui/material/Box';

function exportResult(data: any) {
  const blob = new Blob([data], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = 'results.txt';
  link.href = url;
  link.click();
}

export default function DropZone(props: any) {
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      let text = '';
      const reader = new FileReader();
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onloadend = () => {
        const results = text
          .split('>')
          .slice(1)
          .filter((p) => {
            const chars = p.split(/\r?\n/)[1];
            let i = 0;
            let g = 0;
            for (const c of chars) {
              if (c === 'g' || c === 'G') g++;
              i++;
            }
            return (g * 100) / i > 8;
          });
        exportResult(results);
        props.showData(results);
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
            <b>Choose a file</b> or drag it here.
          </label>
        </Box>
      </div>
    </section>
  );
}
