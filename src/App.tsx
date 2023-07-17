import { useState } from 'react';
import './App.css';
import DenseTable from './components/table';
import DropZone from './components/dropZone';
import { Container } from '@mui/material';

function App() {
  const [showDrop, setShowDrop] = useState(true);
  const [data, setData] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        {showDrop && (
          <DropZone
            showData={(d: string) => {
              setData(d);
              setShowDrop(false);
            }}
          />
        )}
        {!showDrop && (
          <Container>
            <DenseTable />
          </Container>
        )}
      </header>
    </div>
  );
}

export default App;
