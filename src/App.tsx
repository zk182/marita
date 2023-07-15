import React from 'react';
import './App.css';
import DenseTable from './components/table';
import DropZone from './components/dropZone';
import { Container } from '@mui/material';

function App() {
  const show = true;
  return (
    <div className="App">
      <header className="App-header">
        <DropZone />
        {/* <Container>{show && <DenseTable />}</Container> */}
      </header>
    </div>
  );
}

export default App;
