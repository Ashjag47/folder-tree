import { v4 as uuidv4 } from "uuid";

const useTreeTraverse = () => {
  function insertNode(tree, itemName, isFolder, parentId) {
    // Base Case: return updated tree
    if (tree.id === parentId && tree.isFolder) {
      return {
        ...tree,
        item: [
          {
            id: uuidv4(),
            name: itemName,
            isFolder,
            item: [],
          },
          ...tree.item,
        ],
      };
    }

    // Recursive call: if the base case is not meet
    if (tree.isFolder) {
      return {
        ...tree,
        item: tree.item.map((item) =>
          insertNode(item, itemName, isFolder, parentId)
        ),
      };
    }

    // return the unchanged tree if no matchs are meet
    return tree;
  }

  function deleteNode(tree, deleteNodeId) {
    //  Base Case: if the id is found filter it out
    if (tree.item.find((item) => item.id === deleteNodeId)) {
      return {
        ...tree,
        item: [...tree.item.filter((item) => item.id !== deleteNodeId)],
      };
    }

    // Recursive call: if the base case is not meet
    if (tree.isFolder) {
      return {
        ...tree,
        item: tree.item.map((item) => deleteNode(item, deleteNodeId)),
      };
    }

    // return the unchanged tree if no matchs are meet
    return tree;
  }

  function updateNode(tree, itemName, renameNodeId) {
    // Base Case: return updated tree
    if (tree.id === renameNodeId) {
      return {
        ...tree,
        name: itemName,
      };
    }

    // Recursive call: if the base case is not meet
    if (tree.isFolder) {
      return {
        ...tree,
        item: tree.item.map((item) => updateNode(item, itemName, renameNodeId)),
      };
    }

    // return the unchanged tree if no matchs are meet
    return tree;
  }

  return { insertNode, deleteNode, updateNode };
};

export default useTreeTraverse;
