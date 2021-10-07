import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: Tab1Page,
      children: [
        {
          path: 'tab3',
          children: [
            {
              path: '',
              loadChildren: './tab3/tab3.module#Tab3PageModule'
            }
          ]
        }
      ]
    }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
