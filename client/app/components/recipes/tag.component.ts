// tag.component.ts

import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component ({
    moduleId: module.id,
    selector: 'tag',
    templateUrl: 'tag.component.html'
})

export class TagComponent{
    @Input('group')
    public tagForm: FormGroup;
}