import React from 'react';
import './styles/main.css'
import  {TipForm}  from './Components/TipForm';

function App() {
  return (
    <div className="App">
      <section className="header">
        <div className="w3-container">
            <h2>SPLITTER</h2>
        </div>
      </section>
      {<TipForm />}
      
    </div>
  );
}

export default App;
