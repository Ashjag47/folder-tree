import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [isExpand, setIsExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <>
        <div onClick={() => setIsExpand(!isExpand)}>
          <span>📁 {explorer.name}</span>
        </div>
        {isExpand && (
          <div style={{ marginLeft: "10px" }}>
            {explorer.item.map((item) => {
              if (item.isFolder) {
                return <Folder explorer={item} key={item.key} />;
              } else {
                return (
                  <div>
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
        <span>📄 {explorer.name}</span>
      </div>
    );
  }
};

export default Folder;
