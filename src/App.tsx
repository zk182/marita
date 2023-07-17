import { useState } from 'react';
import './App.css';
import DropZone from './components/dropZone';
import { Container, TextField } from '@mui/material';

function App() {
  const [data, setData] = useState('');
  const [perc, setPerc] = useState(8);

  function dataHandler(d: string) {
    setData(d);
  }

  function handleTextChange(e: any) {
    setPerc(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <DropZone showData={dataHandler} />
        {/* <Container>
          <TextField
            id="outlined-basic"
            label="% of G/g"
            variant="outlined"
            value={perc}
            onChange={handleTextChange}
          />
        </Container> */}
      </header>
    </div>
  );
}

export default App;
