import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Example 2 Working')
  }

  onSave(form){
    this.global(form.value);
  }

  global(form){
    console.log(form);
    console.log(form.title);
    console.log(form.description)
  }

}
