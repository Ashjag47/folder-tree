import "./App.css";
import Folder from "./components/Folder";
import { useState } from "react";
import folderData from "./data/folderData";
import useTreeTraverse from "./hooks/use-tree-traverse";

function App() {
  const [explorer, setExplorer] = useState({
    ...folderData,
  });
  const {insertNode} = useTreeTraverse()

  const handleTreeUpdate = (itemName, isFolder, parentId) => {
    const result = {...insertNode(explorer, itemName, isFolder, parentId)}
    setExplorer(result)
  }

  return (
    <div className="ml-3">
      <Folder handleTreeUpdate={handleTreeUpdate} explorer={explorer} key={explorer.id}/>
    </div>
  );
}

export default App;
