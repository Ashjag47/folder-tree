import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [isExpand, setIsExpand] = useState(false);
  const [showInputBox, setShowInputBox] = useState({
    visible: false,
    isFolder: null,
  });

  const handleAddFItem = (e, isFolder) => {
    e.stopPropagation();
    setIsExpand(true);
    setShowInputBox({
      visible: true,
      isFolder,
    });
  };

  const handleAddLogic = (e) => {
    const fName = e.target.value
    const {isFolder} = showInputBox
    if (e.keyCode === 13 && fName.trim() !== "") {
      // add logic here
      console.log("isFolder", isFolder);
      console.log("fName", fName);

      setShowInputBox({
        ...showInputBox,
        visible: false,
      });
    }
  };

  if (explorer.isFolder) {
    return (
      <>
        <div
          onClick={() => setIsExpand(!isExpand)}
          className="w-1/4 bg-slate-300 my-2 flex justify-between"
        >
          <span>📁 {explorer.name}</span>
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
          </span>
        </div>
        {showInputBox.visible && (
          <div className="w-1/4 my-2 ml-5 flex justify-between">
            <span>
              {showInputBox.isFolder ? "📁" : "📄"}
              <input
                autoFocus
                type="text"
                onKeyDown={(e) =>
                  handleAddLogic(e)
                }
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
            {explorer.item.map((item) => {
              if (item.isFolder) {
                return <Folder explorer={item} key={item.key} />;
              } else {
                return (
                  <div className="w-1/4 bg-slate-300 my-2 p-1">
                    <span>📄 {item.name}</span>
                  </div>
                );
              }
            })}
          </div>
        )}
      </>
    );
  } else {
    return (
      <div>
        <span className="w-1/4 bg-slate-300 my-2 p-1">📄 {explorer.name}</span>
      </div>
    );
  }
};

export default Folder;
