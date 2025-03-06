export interface Book{
    id : number,
    title : string,
    author : [
        {
          id : number,
        name : string,  
        }  
    ],
    category : {
        id : number,
        name : string, 
    },
    year : number,
    description : string,
    available : boolean,
}