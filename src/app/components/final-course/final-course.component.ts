import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { LayoutService, IComponent } from '../../services/layout.service';
@Component({
  selector: 'app-final-course',
  templateUrl: './final-course.component.html',
  styleUrls: ['./final-course.component.scss']
})
export class FinalCourseComponent implements OnInit {
 
  divdata:any;
  component:any;
  component1:any;
  block1:any;
  block:any;
  evt: any;
  listPost = [];
 
  constructor (private httpService: HttpClient,private layoutService:LayoutService) { }
  

  ngOnInit() {
    this.layoutService.chatMessageAdded.subscribe((data) => {
     this.divdata = this.listPost.push(data);
     localStorage.setItem("form",this.divdata)
      console.log("data", data)
     });
   
    // this.layoutService.onSubmit(form.value);
    //   this.divdata=JSON.parse(localStorage.getItem('form'));
    //   console.log(JSON.parse(localStorage.getItem('form')));
    //this.block = localStorage.getItem("block");
        // this.block1= document.getElementById("block");
      
        // this.block1.innerHTML += "<div>" + this.block + "<div>";
        // console.log(this.block1.innerHTML)
    //   this.component = localStorage.getItem("example3");
    //   this.component1= document.getElementById("comp1");
    
    //   this.component1.innerHTML += "<div>" + this.component + "<div>";
    //   console.log(this.component1.innerHTML)

      
    
  }
  

 

}
