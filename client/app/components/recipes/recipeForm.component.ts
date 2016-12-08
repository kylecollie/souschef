import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from './recipe.interface';

@Component({
    moduleId: module.id,
    selector: 'recipeForm',
    templateUrl: 'recipeForm.component.html'
})

export class RecipeFormComponent implements OnInit {
    public myForm: FormGroup;
    public recipes: Recipe[];

    constructor(private _fb: FormBuilder, private recipeService: RecipeService) { }

    ngOnInit() {
        // initilize form here
        this.myForm = this._fb.group({
            title: ['', [Validators.required, Validators.minLength(5)]],
            description: ['', [Validators.required]],
            ingredients: this._fb.array([
                this.initIngredient(),
            ]),
            instructions: this._fb.array([
                this.initInstruction(),
            ]),
            tags: this._fb.array([
                this.initTag(),
            ]),
            imagePath: [''],
            rating: [''],
            category: [''],
            comments: ['']
        });
    }

    initIngredient() {
        return this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            quantity: ['', [Validators.required]],
            measurement: ['', [Validators.required, Validators.minLength(3)]]
        });
    }

    addIngredient() {
        const control = <FormArray>this.myForm.controls['ingredients'];
        control.push(this.initIngredient());
    }

    removeIngredient(i: number) {
        const control = <FormArray>this.myForm.controls['ingredients'];
        control.removeAt(i);
    }

    initInstruction() {
        return this._fb.group({
            order: [0, [Validators.required]],
            direction: ['', [Validators.required, Validators.minLength(5)]]
        });
    }

    addInstruction() {
        const control = <FormArray>this.myForm.controls['instructions'];
        control.push(this.initInstruction());
    }

    removeInstruction(i: number) {
        const control = <FormArray>this.myForm.controls['instructions'];
        control.removeAt(i);
    }

    initTag() {
        return this._fb.group({
            tag: ['']
        });
    }

    addTag() {
        const control = <FormArray>this.myForm.controls['tags'];
        control.push(this.initTag());
    }

    removeTag(i: number) {
        const control = <FormArray>this.myForm.controls['tags'];
        control.removeAt(i);
    }

    save(model: FormGroup) {
        // call API to save recipe
        var newRecipe = <Recipe>{};
        newRecipe = model.value;
        this.recipeService.addRecipe(newRecipe).subscribe(recipe => {
            this.myForm.reset();
        })
    }
}
