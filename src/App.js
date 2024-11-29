import './App.css';
import Folder from './components/folder/Folder';
import { useState } from 'react';
import folderData from './data/folderData';

function App() {
  const [explorer, setExplorer] = useState({
    ...folderData
  });
  return (
    <div className="App">
      <Folder explorer={explorer}/>
    </div>
  );
}

export default App;
