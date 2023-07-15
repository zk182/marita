import React from 'react';
import './App.css';
import DenseTable from './components/table';
import { Container } from '@mui/material';

function App() {
  const show = true;
  return (
    <div className="App">
      <header className="App-header">
        <Container>{show && <DenseTable />}</Container>
      </header>
    </div>
  );
}

export default App;
