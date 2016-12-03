// instruction.component.ts

import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'instruction',
    templateUrl: 'instruction.component.html'
})

export class InstructionComponent {
    @Input('group')
    public instructionForm: FormGroup;
}