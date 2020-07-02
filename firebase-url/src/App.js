import React from 'react';
import './App.css';
import Links from './components/links';
import LinkForm from './components/linkForm';

function App() {
  return (
    <>
    <div className="container -p4">
      <div className="row">
        <LinkForm/>
        <Links/>
      </div>
    </div>
    </>
  );
}

export default App;
