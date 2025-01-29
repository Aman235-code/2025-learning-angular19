import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { VariablesComponent } from './components/variables/variables.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ApiCallComponent } from './components/api-call/api-call.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'directive',
    component: DirectiveComponent,
  },
  {
    path: 'variable',
    component: VariablesComponent,
  },
  {
    path: 'templateForm',
    component: TemplateFormComponent,
  },
  {
    path: 'api-call',
    component: ApiCallComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
];
