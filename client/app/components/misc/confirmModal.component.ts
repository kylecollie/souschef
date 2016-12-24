// confirmModal.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'confirmModal',
    templateUrl: 'confirmModal.component.html'
})
export class confirmModalComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        let title = 'Delete';
        let prompt = 'Are you sure you want to delete this recipe?';
        let dangerMessage = 'If you delete this recipe, it will be unrecoverable.';
    }
}