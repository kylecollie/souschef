// recipe-edit.component.ts

import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { IRecipe } from '../../models/IRecipe';
import { RecipeService } from '../../recipes/shared/recipe.service';

import { GenericValidator } from '../../core/validation/genericValidator';
import { NumberValidators } from '../../core/validation/numberValidator';

@Component({
    moduleId: module.id,
    selector: 'recipe-edit',
    templateUrl: 'recipe-edit.component.html',
    styleUrls: ['recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    pageTitle: string = 'Recipe Edit';
    errorMessage: string;
    recipeForm: FormGroup;

    recipe: IRecipe;
    private sub: Subscription;

    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [kry: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;

    get tags(): FormArray {
        return <FormArray>this.recipeForm.get('tags');
    }

    get ingredients(): FormArray {
        return <FormArray>this.recipeForm.get('ingredients');
    }

    constructor(private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private recipeService: RecipeService) {

        // Define all validation messages. May be moved to file or DB later.
        this.validationMessages = {
            title: {
                required: 'Recipe title is required.',
                minlength: 'Recipe title must be at least three characters.',
                maxlength: 'Recipe title cannot exceed 50 characters.'
            },
            description: {
                required: 'Recipe description is required.'
            },
            rating: {
                range: 'Rate the recipe between 1 (lowest) and 5 (highest).'
            }
        };

        // Define an instance of the Validator
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {
        this.recipeForm = this.fb.group({
            _id: '',
            title: ['', [Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50)]],
            description: ['', Validators.required],
            ingredients: this.fb.array([this.buildIngredients()]),
            // instructions: [{
            //     order: [],
            //     direction: [],
            // }];
            tags: this.fb.array([]),
            imagePath: '',
            rating: ['', NumberValidators.range(1, 5)],
            category: '',
            comments: ''
        });

        // Read the recipe Id from the route parameter
        this.sub = this.route.params.subscribe(
            params => {
                let id = params['id'];
                if (id) {
                    this.getRecipe(id);
                } else {
                    this.pageTitle = 'Add Recipe';
                }
            }
        );
    }

    ngOnDestroy() {
        // blow it up!
        this.sub.unsubscribe();
    }

    ngAfterViewInit(): void {
        // Watch for the blur event from any input element on the form.
        let controlBlurs: Observable<any>[] = this.formInputElements
            .map((formControl: ElementRef) => Observable.fromEvent(formControl.nativeElement, 'blur'));

        // Merge the blur event observable with the valueChanges observable
        Observable.merge(this.recipeForm.valueChanges, ...controlBlurs).debounceTime(800).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.recipeForm);
        });
    }

    addTag(): void {
        this.tags.push(new FormControl());
    }

    addIngredient(): void {
        this.ingredients.push(this.buildIngredients());
    }

    buildIngredients(): FormGroup {
        return this.fb.group({
                name: '',
                quantity: '',
                measurement: ''
        });
    }

    getRecipe(id: string): void {
        this.recipeService.getRecipe(id)
            .subscribe(
            (recipe: IRecipe) => this.onRecipeRetrieved(recipe),
            (error: any) => this.errorMessage = <any>error
            );
    }

    onRecipeRetrieved(recipe: IRecipe): void {
        if (this.recipeForm) {
            this.recipeForm.reset();
        }
        this.recipe = recipe;

        if (this.recipe._id) {
            this.pageTitle = `Edit Product: ${this.recipe.title}`;
        } else {
            this.pageTitle = 'Add Recipe';
        }

        // Update data on form
        this.recipeForm.patchValue({
            _id: this.recipe._id,
            title: this.recipe.title,
            description: this.recipe.description,
            imagePath: this.recipe.imagePath,
            rating: this.recipe.rating,
            category: this.recipe.category,
            comments: this.recipe.comments
        });
        this.recipeForm.setControl('tags', this.fb.array(this.recipe.tags || []));
        this.recipeForm.setControl('ingredients', this.fb.array(this.recipe.ingredients || []));
    }

    deleteRecipe(): void {
        if (!this.recipe._id) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        } else {
            if (confirm(`Really delete the recipe: ${this.recipe.title}?`)) {
                this.recipeService.deleteRecipe(this.recipe._id)
                    .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }

    saveRecipe(): void {
        if (this.recipeForm.dirty && this.recipeForm.valid) {
            // Copy the form values over the product object values
            let r = Object.assign({}, this.recipe, this.recipeForm.value);
            console.log('r' + JSON.stringify(r));
            this.recipeService.saveRecipe(r)
                .subscribe(
                () => this.onSaveComplete(),
                (error: any) => this.errorMessage = <any>error
                );
        } else if (!this.recipeForm.dirty) {
            this.onSaveComplete();
        }
    }

    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.recipeForm.reset();
        this.router.navigate(['/recipes']);
    }
}