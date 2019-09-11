import { Component, OnInit } from '@angular/core';
import { LayoutService, IComponent } from '../../services/layout.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit {

  constructor(private layoutService:LayoutService, private modalService: NgbModal) { }

  ngOnInit() {
    console.log('Button is Working')
  }

  get components(): IComponent[] {
    return this.layoutService.components;
  }

  removeComp(item){
    console.log(item)
    this.layoutService.removeItem(item);
  }

}
