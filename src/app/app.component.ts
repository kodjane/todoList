import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { json } from 'stream/consumers';
import { CommonModule, NgClass } from '@angular/common';

export interface TodoTask {
  id: number,
  task: string,
  completed: boolean,
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, CheckboxModule, CommonModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  todoList: TodoTask[] = [];
  newTask:string = '';
  isAccepted : boolean = true;

  checkBoxChange(event : any) {
    console.log(event);
  }

  addNewTask() : void {
    if(this.newTask.trim() !== '') {
        const newTodotask: TodoTask = {
            id : Date.now(),
            task : this.newTask,
            completed : false
        }
        this.todoList.push(newTodotask);  
    }

    this.newTask = '';
  }

  toggleCompleted(index: number) : void {
      this.todoList[index].completed = ! this.todoList[index].completed;
  }

  deleteTask(id : number) : void {
    this.todoList = this.todoList.filter(item => item.id !== id)
    console.log(this.todoList)
  }
}
