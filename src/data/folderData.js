const explorer = {
    id: 1,
    name: 'Root',
    isFolder: true,
    item: [
        {
            id: 2,
            name: 'Folder 1',
            isFolder: true,
            item: [
                {
                    id: 3,
                    name: 'File 1',
                    isFolder: false,
                    item: []
                },
                {
                    id: 4,
                    name: 'File 2',
                    isFolder: false,
                    item: []
                }
            ]
        },
        {
            id: 5,
            name: 'Folder 2',
            isFolder: true,
            item: [
                {
                    id: 6,
                    name: 'Folder 3',
                    isFolder: true,
                    item: [
                        {
                            id: 7,
                            name: 'File 3',
                            isFolder: false,
                            item: []
                        }
                    ]
                },
                {
                    id: 8,
                    name: 'File 4',
                    isFolder: false,
                    item: []
                }
            ]
        },
        {
            id: 9,
            name: 'File 5',
            isFolder: false,
            item: []
        }
    ]
}

export default explorer;