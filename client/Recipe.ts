export class Recipe {
    "_id": string;
    "title": string;
    "description": string;
    "rating": number;
    "category": string;
    "comments": string;
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