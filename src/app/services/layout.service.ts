import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';
import {Subject} from 'rxjs';
import { isNgTemplate } from '@angular/compiler';


export interface IComponent {
  id: string;
  componentRef: string;
}

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public options: GridsterConfig = {
    displayGrid: DisplayGrid.OnDragAndResize,
    gridType:GridType.Fit,
    compactType: CompactType.None,
    draggable: {
      enabled: true
    },
    pushItems: true,
    resizable: {
      enabled: true
    },
    pushDirections: {
      north: true,
      east: true,
      south: true,
      west:true
    },
    swap : true
  };

  public layout: GridsterItem[] = [];
  public components: IComponent[] = [];

  dropId: string;
  element:string;
  hasContent:boolean=false;
  dragEnabled:boolean=false;
  resizeEnabled:boolean=false;
  newLayout:any;
  example3:any;
  item:any;

  chatMessageAdded = new Subject();

  constructor() { }

  addItem(value): void {
    this.layout.push({
      cols: value.compCols != '' ? value.compCols : 5,
      id: UUID.UUID(),
      rows: value.compRows != '' ? value.compRows : 5,
      x: value.compXaxis != '' ? value.compXaxis : 0,
      y: value.compYaxis != '' ? value.compYaxis : 0,
      hasContent: value.compHasContent == '1' ? true : false,
      dragEnabled: value.compDragEnabled == '1' ? true : false,
      resizeEnabled : value.compResizeEnabled == '1' ? true : false,
      label : value.compLabel != '' ? value.compLabel : 'Block Title',
      // element: this.components,
      
    });
    console.log("layout",this.layout)
  }

  deleteItem(id: string): void {
    const item = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
    const comp = this.components.find(c => c.id === id);
    this.components.splice(this.components.indexOf(comp), 1);
  }

  setDropId(dropId: string): void {
    this.dropId = dropId;
    console.log("dropId",this.dropId);
  }

  dropItem(dragId: string): void {
    const { components } = this;
    const comp: IComponent = components.find(c => c.id === this.dropId);
    const updateIdx: number = comp ? components.indexOf(comp) : components.length;
    const componentItem: IComponent = {
      id: this.dropId,
      componentRef: dragId,
    };
    console.log("componentItem",componentItem.componentRef)
    if(componentItem.componentRef==="example3"){
      console.log("true");
     this.example3= localStorage.getItem("example3");
     console.log("droppeditemInput",this.example3)


    }else{
      console.log("false")
    }

    this.components = Object.assign([], this.components, { [updateIdx]: componentItem });
    console.log("component",this.components);

   
  //  this.element= localStorage.setItem("componentId",JSON.stringify(this.components));
  }

  removeItem(item): void {
    // console.log(item.layoutService.components[0].componentRef)
    let ExistingComponentRef = item.layoutService.components[0].componentRef;
    const { components } = this;
    console.log(components,'components')
    const comp: IComponent = components.find(c => c.id === this.dropId);
    console.log(comp,'comp')
    const currentIdx: number = comp ? components.indexOf(comp) : components.length;    
    console.log(currentIdx,'currentIdx')
    //this.components.splice(this.components.indexOf(currentIdx), 1);
    console.log(this.components.length,'this.components.length')
    //this.components = Object.assign([], this.components);
    console.log(this.components,'this.components last')
  }

  getComponentRef(id: string): string {
    const comp = this.components.find(c => c.id === id);
    // console.log("comp",comp);
    return comp ? comp.componentRef : null;
  }

  onSubmit(value): void {
   this.layout.push({
      cols: value.compCols != '' ? value.compCols : "not specified",
      id: UUID.UUID(),
      rows: value.compRows != '' ? value.compRows : 5,
      x: value.compXaxis != '' ? value.compXaxis : 0,
      y: value.compYaxis != '' ? value.compYaxis : 0,
      hasContent: value.compHasContent == '1' ? true : false,
      dragEnabled: value.compDragEnabled == '1' ? true : false,
      resizeEnabled : value.compResizeEnabled == '1' ? true : false,
      label : value.compLabel != '' ? value.compLabel : 'Block Title',
      element: this.components,
      item:this.example3 != 'undefined'? this.example3 : 'undefined',
      // element: this.components,
      
   });
    console.log("final layout",this.layout);
    // console.log("componentRef", this.components)
    // var i;
    // var text = "";
    // for (i = 0; i < this.components.length; i++) {
    //   text += this.components[i] ;
    //   console.log("componentRef", text)
    // }
    this.item = this.example3;
    localStorage.setItem("item",this.item);
    console.log( "this.item", this.item);


  
  }
}