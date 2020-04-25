import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApplyComponent } from './apply/apply.component';
import { SelfComponent } from './self/self.component';
import { FaqComponent } from './faq/faq.component';
import { RetreatsComponent } from './retreats/retreats.component';
import { DailyComponent } from './daily/daily.component';
import { TeachersComponent } from './teachers/teachers.component';
import { EthicsComponent } from './ethics/ethics.component';
import { TtcComponent } from './ttc/ttc.component';
import { KundaliniComponent } from './kundalini/kundalini.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'apply',
                component: ApplyComponent
            },
            {
                path: 'self',
                component: SelfComponent
            },
            {
                path: 'faq',
                component: FaqComponent
            },
            {
                path: 'daily',
                component: DailyComponent
            },
            {
                path: 'teachers',
                component: TeachersComponent
            },
            {
                path: 'retreats',
                component: RetreatsComponent
            },
            {
                path: 'ethics',
                component: EthicsComponent
            },
            {
                path: 'ttc',
                component: TtcComponent
            },
            {
                path: 'kundalini',
                component: KundaliniComponent
            },

        ]
    }
]