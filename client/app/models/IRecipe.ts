// Define th recipe entity

export interface IRecipe {
    _id: string;
    title: string;
    description: string;
    ingredients: [{
        name: string,
        quantity: string,
        mesurement: string
    }];
    instructions: [{
        order: number,
        direction: string
    }];
    tags?: string[];
    imagePath: string;
    rating: number;
    category: string;
    comments: string;
}