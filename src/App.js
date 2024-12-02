import "./App.css";
import Folder from "./components/Folder";
import { useState } from "react";
import folderData from "./data/folderData";
import useTreeTraverse from "./hooks/use-tree-traverse";

function App() {
  const [explorer, setExplorer] = useState({
    ...folderData,
  });
  const { insertNode, deleteNode, updateNode } = useTreeTraverse();

  const handleTreeUpdate = (itemName, isFolder, parentId) => {
    const result = { ...insertNode(explorer, itemName, isFolder, parentId) };
    setExplorer(result);
  };

  const handleTreeDelete = (deleteNodeId) => {
    const result = { ...deleteNode(explorer, deleteNodeId) };
    setExplorer(result);
  };

  const handleTreeRename = (itemName, renameNodeId) => {
    const result = { ...updateNode(explorer, itemName, renameNodeId) };
    setExplorer(result);
  };

  return (
    <div className="ml-3">
      <Folder
        handleTreeUpdate={handleTreeUpdate}
        handleTreeDelete={handleTreeDelete}
        handleTreeRename={handleTreeRename}
        explorer={explorer}
      />
    </div>
  );
}

export default App;
