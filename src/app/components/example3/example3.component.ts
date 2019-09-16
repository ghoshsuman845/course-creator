import { Component, OnInit } from '@angular/core';

import { LayoutService, IComponent } from '../../services/layout.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss']
})
export class Example3Component implements OnInit {

  constructor(private layoutService:LayoutService, private modalService: NgbModal) { }

  ngOnInit() {
    

    console.log('Input is working')
  }
  removeComp(item){
    console.log(item)
    this.layoutService.removeItem(item);
  }
  addInput(){
    var code2 = document.getElementById("example3");
    console.log(code2);
    localStorage.setItem("example3",code2.innerHTML);
  }

}
