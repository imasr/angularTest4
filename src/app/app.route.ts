import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
export const routes: Route[] = [{
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
    }
];
