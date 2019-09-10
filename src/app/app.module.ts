import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GridsterModule } from 'angular-gridster2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutItemDirective } from './directives/layout-item.directive';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { Example3Component } from './components/example3/example3.component';
import { Example4Component } from './components/example4/example4.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FinalCourseComponent } from './components/final-course/final-course.component';
import { OutputComponent } from './components/output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavigationComponent,
    ThemePickerComponent,
    FooterComponent,
    LayoutComponent,
    LayoutItemDirective,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    FinalCourseComponent,
    OutputComponent
  ],
  entryComponents: [
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GridsterModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
