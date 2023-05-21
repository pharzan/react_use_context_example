import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import StructureContextProvider from './store/structure-context';
import ViewerComponent from './components/viewer-component';
import ChangerComponent from './components/changer-component';
import ReactorComponent from './components/reactor-component';

import './css/App.css';

function App() {
  return (
    <StructureContextProvider>
      <div className="app">
        <ViewerComponent />
        <ChangerComponent />
        <ReactorComponent />
      </div>
    </StructureContextProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
