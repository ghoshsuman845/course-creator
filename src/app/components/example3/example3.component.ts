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
    console.log('Example 3 Working')
  }
  removeComp(item){
    console.log(item)
    this.layoutService.removeItem(item);
  }

}
