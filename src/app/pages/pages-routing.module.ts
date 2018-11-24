import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { ColorsComponent } from './colors/colors.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonImportModule } from '../shared/imports/common.module';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {path: '', component: PagesComponent, children: [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'cards', component: CardsComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'typography', component: TypographyComponent},
    {path: 'colors', component: ColorsComponent},
    {path: 'helper-classes', component: HelperClassesComponent},
  ]}
  /* {path: '', component: PagesComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'cards', component: CardsComponent}, */
];
@NgModule({
  declarations: [
    PagesComponent,
    CardsComponent,
    DashboardComponent,
    IconsComponent,
    TypographyComponent,
    HelperClassesComponent,
    ColorsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonImportModule
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}

