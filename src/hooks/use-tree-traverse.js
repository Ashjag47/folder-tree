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
        item: tree.item.map((item) => insertNode(item, itemName, isFolder, parentId)),
      };
    }

    // return the unchanged tree if no matchs are meet
    return tree;
  }
  return { insertNode };
};

export default useTreeTraverse;
