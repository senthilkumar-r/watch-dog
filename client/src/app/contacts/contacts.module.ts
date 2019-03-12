import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [ContactListComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MaterialModule
  ]
})
export class ContactsModule { }
