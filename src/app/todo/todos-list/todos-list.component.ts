import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent implements OnInit {
    todos: Todo[] = [];

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.store.subscribe((state) => {
            this.todos = state.todos;
        });
    }
}
