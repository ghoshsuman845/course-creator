import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component implements OnInit {
  
  constructor() { }
  

  ngOnInit() {
    var code = document.getElementById("example2");
    console.log(code);
    localStorage.setItem("example2",code.innerHTML);

    console.log('textarea Working');
   
  }

  onSave(form){
    this.global(form.value);
  }

  global(form){
    console.log(form);
    console.log(form.title);
    localStorage.setItem("form", JSON.stringify(form));

  
  }

}
