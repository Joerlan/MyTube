import { HeaderIconButtonComponent } from './header/header-icon-button/header-icon-button.component';
import { NavSectionComponent } from './sidenav/nav-section/nav-section.component';
import { NavItemComponent } from './sidenav/nav-item/nav-item.component';
import { AngularMaterialModule } from '../material/angular-material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';
import { LogoIconComponent } from './header/logo-icon/logo-icon.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    NavItemComponent,
    NavSectionComponent,
    HeaderIconButtonComponent,
    LogoIconComponent
  ],
  exports: [
    LayoutComponent
  ],
})
export class LayoutModule { }
