import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { VariablesComponent } from './components/variables/variables.component';

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
];
