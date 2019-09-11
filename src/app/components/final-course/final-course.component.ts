import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-final-course',
  templateUrl: './final-course.component.html',
  styleUrls: ['./final-course.component.scss']
})
export class FinalCourseComponent implements OnInit {
  divdata:any;
  component:any;
  component1:any;
  title = 'JSON to Table Example';
  constructor (private httpService: HttpClient) { }
  arrBirds: string [];

  ngOnInit() {
    this.divdata=JSON.parse(localStorage.getItem('form'));
  console.log(JSON.parse(localStorage.getItem('form')));
  this.component = localStorage.getItem("example3");
  this.component1= document.getElementById("comp1");

  this.component1.innerHTML += "<div>" + this.component + "<div>";
  console.log(this.component1.innerHTML)
  }

}
