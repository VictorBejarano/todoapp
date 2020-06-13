import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
    @Input() todo: Todo;
    @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

    chkField: FormControl;
    txtInput: FormControl;

    editando: boolean;

    constructor() {}

    ngOnInit(): void {
        this.chkField = new FormControl(this.todo.completado);
        this.txtInput = new FormControl(this.todo.texto, Validators.required);

        this.chkField.valueChanges.subscribe((valor) => {
            console.log(valor);
        });
    }

    editar() {
        this.editando = true;
        setTimeout(() => {
            this.txtInputFisico.nativeElement.select();
        }, 1);
    }

    terminarEdicion() {
        this.editando = false;
    }
}
