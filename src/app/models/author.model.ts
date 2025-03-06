export interface Author{
    success : boolean,
    book : [
        id: number,
        title: string,
        authors : [
            {
                id: number,
                name: string,
                bio: string,
            }
        ]
    ]
}