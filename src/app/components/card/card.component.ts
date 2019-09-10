import { Component } from '@angular/core';
import { LayoutService, IComponent } from '../../services/layout.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  closeResult: string;
  settingPanelComp:boolean=false;
  itemId:string;
  constructor(private layoutService:LayoutService, private modalService: NgbModal)
  {  }
  cardSamples = [
    {
      title: 'Card 1',
      value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.'
    },
    {
      title: 'Card 2',
      value: 'Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Fusce nec tellus sed augue semper porta.'
    },
    {
      title: 'Card 3',
      value: 'Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.'
    },
    {
      title: 'Card 4',
      value: 'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.'
    }
  ]

  get options(): GridsterConfig {
    return this.layoutService.options;
  }

  get layout(): GridsterItem[] {
    // console.log(this.layoutService.layout)
    return this.layoutService.layout;
  }

  get components(): IComponent[] {
    return this.layoutService.components;
  }

  ngOnInit() {
  }

  addItem(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })
    // this.layoutService.addItem();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  submitValue(form){
    this.layoutService.addItem(form.value);
    this.modalService.dismissAll('After Sumbit');
  }

  openSettings(item){
      this.settingPanelComp = !this.settingPanelComp
      this.itemId = item.id;
      console.log(item)
  }

  // dropItem(item){
  //   this.layoutService.dropItem(item);
  // }
  // setDropId(id){
  //   this.layoutService.setDropId(id)
  // }
  // getComponentRef(id){
  //   this.layoutService.getComponentRef(id)
  // }
  // deleteItem(item){
  //   this.layoutService.deleteItem(item)
  // }

  public isSwitcherShown = false;

  toggleThemeSwitcher() {
    this.isSwitcherShown = !this.isSwitcherShown;
  }

  panelOpenState = false;

}