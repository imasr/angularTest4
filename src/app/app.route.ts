import { Route } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Route[] = [{
        path: '',
        component: DashboardComponent,
        pathMatch: 'full' 
    }, { 
        path: 'category',
        component: CategoryComponent
    }
]