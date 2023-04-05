import { ThemeService } from './services/theme/theme.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import{MaterialModule}  from'angular-material-config';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponentComponent } from './modules/components/header-component/header-component.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TypographyComponent } from './core/contents/typography/typography.component';
import { ColorsComponent } from './core/customize/colors/colors.component';
import { ButtonsComponent } from './core/components/buttons/buttons.component';
import { CheckBoxComponent } from './core/components/check-box/check-box.component';
import { RadioButtonComponent } from './core/components/radio-button/radio-button.component';
import { ToggleSwitchComponent } from './core/components/toggle-switch/toggle-switch.component';
import { FormsComponent } from './core/components/forms/forms.component';
import { TextAreaComponent } from './core/components/text-area/text-area.component';
import { DropDownComponent } from './core/components/drop-down/drop-down.component';
import { SidebarMenuComponent } from './modules/components/sidebar-layout/sidebar-menu/sidebar-menu.component';
import { SidebarLayoutComponent } from './modules/components/sidebar-layout/sidebar-layout/sidebar-layout.component';
import { MainSectionComponent } from './modules/components/sidebar-layout/main-section/main-section.component';
import { SelectComponent } from './core/components/select/select.component';
import { InputFormComponent } from './core/components/input-form/input-form.component';
import { InputIconComponent } from './core/components/input-icon/input-icon.component';
import { InputTitleComponent } from './core/components/input-title/input-title.component';
import { InputTitleIconComponent } from './core/components/input-title-icon/input-title-icon.component';
import { InputPasswordComponent } from './core/components/input-password/input-password.component';
import { OverlayComponent } from './modules/components/overlay/overlay.component';
import { LoginComponent } from './modules/login/login.component';
import { AccountsComponent } from './core/components/accounts/accounts.component';
import { DomainComponent } from './core/components/domain/domain.component';
import { StatusComponent } from './core/components/status/status.component';
import { CreateAcountComponent } from './core/components/create-acount/create-acount.component';
import { DashboardContentComponent } from './modules/components/dashboard-content/dashboard-content.component';
import { CreateProjectComponent } from './modules/components/create-project/create-project.component';
import { ResourceSectionComponent } from './modules/components/resource-section/resource-section.component';
import { TableComponent } from './core/components/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe, NgFor } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormValiadteComponent } from './core/components/form-valiadte/form-valiadte.component';
import { ReactiveFormComponent } from './core/components/reactive-form/reactive-form.component';
import { FormReactiveComponent } from './core/components/form-reactive/form-reactive.component';
import { ResourceTableComponent } from './core/components/resource-table/resource-table.component';
import { SelectResourceComponent } from './core/components/select-resource/select-resource.component';
//import { DashboardTableComponent } from './core/components/dashboard-table/dashboard-table.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
//import { TestTableComponent } from './core/components/test-table/test-table.component';
//import { Table2Component } from './core/components/table2/table2.component';
import { HttpClientModule } from '@angular/common/http';
//import { DashboradTableComponent } from './core/components/dashborad-table/dashborad-table.component';
import { TableDashboardComponent } from './core/components/table-dashboard/table-dashboard.component';
import { TableUpdateComponent } from './core/components/table-update/table-update.component';
// import { DashboradTableComponent } from './core/components/dashborad-table/dashborad-table.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    DashboardComponent,
    TypographyComponent,
    ColorsComponent,
    ButtonsComponent,
    CheckBoxComponent,
    RadioButtonComponent,
    ToggleSwitchComponent,
    FormsComponent,
    TextAreaComponent,
    DropDownComponent,
    SidebarMenuComponent,
    SidebarLayoutComponent,
    MainSectionComponent,
    SelectComponent,
    InputFormComponent,
    InputIconComponent,
    InputTitleComponent,
    InputTitleIconComponent,
    InputPasswordComponent,
    OverlayComponent,
    LoginComponent,
    AccountsComponent,
    DomainComponent,
    StatusComponent,
    CreateAcountComponent,
    DashboardContentComponent,
    CreateProjectComponent,
    ResourceSectionComponent,
    TableComponent,
    FormValiadteComponent,
    ReactiveFormComponent,
    FormReactiveComponent,
    ResourceTableComponent,
    SelectResourceComponent,
   // DashboardTableComponent,
    FilterPipe,
    //TestTableComponent,
//    Table2Component,
    TableDashboardComponent,
    TableDashboardComponent,
    TableUpdateComponent
   // DashboradTableComponent
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //MaterialModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
   // ReactiveFormsModule
    DecimalPipe, 
    NgFor,
     NgbTypeaheadModule, 
     NgbPaginationModule,
     ReactiveFormsModule,
     NgxPaginationModule
    

  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule { }
