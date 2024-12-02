import { v4 as uuidv4 } from 'uuid';

const useTreeTraverse = () => {
    function insertNode(tree, itemName, isFolder, parentId) {
        if(tree.id === parentId && tree.isFolder) {
            tree.item.unshift({
                id: uuidv4(),
                name: itemName,
                isFolder,
                item: []
            })
            return tree
        }
        let latestItems = []
        latestItems = tree.isFolder ? tree.item.map((item)=>{
            return insertNode(item, itemName, isFolder, parentId)
        }) : []
        return ({...tree, item: latestItems})
    }
    return {insertNode}
}

export default useTreeTraverse