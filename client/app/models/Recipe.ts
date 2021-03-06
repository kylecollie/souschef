export class Recipe {
    "_id": string;
    "title": string;
    "description": string;
    "ingredients": [{
        "name": string,
        "quantity": string,
        "mesurement": string
    }];
    "instructions": [{
        "order": number,
        "direction": string
    }];
    "tags": [string];
    "imagePath": string;
    "rating": number;
    "category": string;
    "comments": string;
}

// export class Recipe implements IRecipe {
//   constructor (
                //   public "_id": string,
                //   ...
                //  ) {}
// }