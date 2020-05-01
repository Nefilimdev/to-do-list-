import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service'; // TODO: refatorar TaskService
import { BroadcastTodoService } from './../broadcast-todo.service';
import { ApiTaskService } from "../../services/api-task.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  todoInput: string
  placeholder: string = "Ex.: estudar, terminar projeto..."

  constructor(private taskService: TaskService, private _link: BroadcastTodoService, private _apiTask: ApiTaskService) { }

  ngOnInit(): void {
  }

  sendTodoData(todo:string) {
    if (todo != '') {
      this._link.passTodoValue(todo);
      this.todoInput = "";
      this.placeholder = ""
    } else {
      this.placeholder = "O campo não pode estar vazio!"
    }
  }

  sendTodoDataClick() {
    if (this.todoInput == undefined || this.todoInput.length <= 0) {
      this.placeholder = "O campo não pode estar vazio!"
    } else {
      this._link.passTodoValue(this.todoInput);
      this.todoInput = ""
      this.placeholder = ""
    }
  }

  resetPlaceholder(){
    this.placeholder = "Ex.: estudar, terminar projeto..."
  }

}
