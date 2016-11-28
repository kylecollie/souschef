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
}