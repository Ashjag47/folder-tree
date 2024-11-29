import React from "react";

const Folder = ({ explorer }) => {
  if (explorer.isFolder) {
    return (
      <>
        <div>
          <span>📁 {explorer.name}</span>
        </div>
        <div>
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
