import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivationComponent } from './components/activation/activation.component';
import { ConfigComponent } from './components/config/config.component';
import { AlertComponent } from './components/alert/alert.component';

const routes: Routes = [
  { path: '', redirectTo: '/activation', pathMatch: 'full' },
  { path: 'activation', component: ActivationComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'alert', component: AlertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
