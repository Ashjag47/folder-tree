import React, { useState } from "react";

const Folder = (props) => {
  const { handleTreeUpdate, handleTreeDelete, handleTreeRename, explorer } =
    props;
  const [isExpand, setIsExpand] = useState(false);
  const [showInputBox, setShowInputBox] = useState({
    visible: false,
    isFolder: null,
  });
  const [editingNodeId, setEditingNodeId] = useState(null);

  const handleAddFItem = (e, isFolder) => {
    e.stopPropagation();
    setIsExpand(true);
    setShowInputBox({
      visible: true,
      isFolder,
    });
  };

  const handleUpdateFItem = (e, nodeId) => {
    e.stopPropagation();
    setEditingNodeId(nodeId);
  };

  const handleAddLogic = (e) => {
    const fName = e.target.value;
    const { isFolder } = showInputBox;
    if (e.keyCode === 13 && fName.trim() !== "") {
      handleTreeUpdate(fName, isFolder, explorer.id);
      setShowInputBox({
        ...showInputBox,
        visible: false,
      });
    }
  };

  const handleUpdateLogic = (e, renameNodeId) => {
    const fName = e.target.value;
    if (e.keyCode === 13 && fName.trim() !== "") {
      handleTreeRename(fName, renameNodeId);
      setEditingNodeId(null);
    }
  };

  const handleDeleteLogic = (e, deleteNodeId) => {
    e.stopPropagation();
    handleTreeDelete(deleteNodeId);
  };

  if (explorer.isFolder) {
    return (
      <>
        <div
          onClick={() => setIsExpand(!isExpand)}
          className="w-2/4 bg-slate-300 my-2 flex justify-between"
        >
          <span>
            📁
            {editingNodeId === explorer.id ? (
              <input
                className="ml-2"
                autoFocus
                type="text"
                onBlur={() => setEditingNodeId(null)}
                onKeyDown={(e) => handleUpdateLogic(e, explorer.id)}
              />
            ) : (
              explorer.name
            )}
          </span>
          <span>
            <button
              className="py-0.5 px-1 border-slate-800 rounded-md border m-1"
              onClick={(e) => handleAddFItem(e, true)}
            >
              Folder +
            </button>
            <button
              className="py-0.5 px-1 border-slate-800 rounded-md border m-1"
              onClick={(e) => handleAddFItem(e, false)}
            >
              File +
            </button>
            {explorer.name !== "Root" && (
              <>
                <button onClick={(e) => handleDeleteLogic(e, explorer.id)}>
                  🗑
                </button>
                <button onClick={(e) => handleUpdateFItem(e, explorer.id)}>
                  ✏
                </button>
              </>
            )}
          </span>
        </div>
        {showInputBox.visible && (
          <div className="w-2/4 my-2 ml-5 flex justify-between">
            <span>
              {showInputBox.isFolder ? "📁" : "📄"}
              <input
                autoFocus
                type="text"
                onKeyDown={(e) => handleAddLogic(e)}
                onBlur={() =>
                  setShowInputBox({
                    ...showInputBox,
                    visible: false,
                  })
                }
              />
            </span>
          </div>
        )}
        {isExpand && (
          <div className="ml-5">
            {explorer.item.map((item) => (
              <Folder
                key={item.id}
                handleTreeUpdate={handleTreeUpdate}
                handleTreeDelete={handleTreeDelete}
                handleTreeRename={handleTreeRename}
                explorer={item}
              />
            ))}
          </div>
        )}
      </>
    );
  } else {
    return (
      <div className="w-2/4 bg-slate-300 my-2 p-1 flex justify-between">
        <span>
          📄{" "}
          {editingNodeId === explorer.id ? (
            <input
              className="ml-2"
              autoFocus
              type="text"
              onBlur={() => setEditingNodeId(null)}
              onKeyDown={(e) => handleUpdateLogic(e, explorer.id)}
            />
          ) : (
            explorer.name
          )}
        </span>
        <span>
          <button onClick={(e) => handleDeleteLogic(e, explorer.id)}>🗑</button>
          <button onClick={(e) => handleUpdateFItem(e, explorer.id)}>✏</button>
        </span>
      </div>
    );
  }
};

export default Folder;
