import { Component } from '@angular/core';
import { Student } from './student';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student';

  name: string;
  age: number;
  id: number;

  student: Student[] = [
    {
      "studentId": 1,
      "studentName": "android",
      "studentAge": 10,

    },
    {
      "studentId": 2,
      "studentName": "India",
      "studentAge": 1,

    },
    {
      "studentId": 3,
      "studentName": "Vishwanth",
      "studentAge": 2,

    },
    {
      "studentId": 4,
      "studentName": "Vishwanth2",
      "studentAge": 22,

    }

  ]
  studentId: number;
  studentName: string;
  studentAge: number;
  IsForUpdate: boolean=false;
  onClick1:boolean= false;

  Add() {
    this.student.push({ studentName: this.name, studentAge: this.age, studentId: this.id });
    this.name = '';
    this.age = 0;
    this.id = 0;
    console.log(this.id);

  }

  Delete(index) {
    this.student.splice(index, 1);
  }
  Edit(index)
  {
    this.onClick1=true;
    this.IsForUpdate = true;
    
  }

  Update() {
    for (var val of this.student) 
    {
      if (val.studentId == this.id) 
      {
        val.studentId = this.id;
        val.studentName = this.name;
        val.studentAge = this.age;
      }
      

    }
    this.id=0;
    this.name="";
    this.age=0;
    this.IsForUpdate = false;
    
  }

}

//   Delete (id :Student){
  //     this.student.splice(this.student.indexOf(id), 1);
  //   }  