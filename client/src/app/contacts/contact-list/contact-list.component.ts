import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../../contact.service';
import { Contact } from '../../models/contact.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})
export class ContactListComponent implements OnInit {
  public displayedColumns = ['full_name', 'phone_number'];
  public dataSource = new MatTableDataSource<Contact>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private contactService: ContactService) { console.log("constructor called"); }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  contacts: Contact[];
  contact: Contact;
  // id: number;
  first_name: string;
  last_name: string;
  // gender: string;
  // email?: string;
  phone_number: string;
  // date_of_birth: Date;
  // avatar_url?: string;
  // created_date: Date;
  // updated_date: Date;
  // errorMessage: null;

  getContacts() {
    this.contactService.getContacts()
      .subscribe(contacts => {
        this.contacts = contacts as Contact[];
        this.dataSource.data = contacts as Contact[];
      });
  }
  addContact() {
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone_number: this.phone_number
    };
    this.contactService.addContact(newContact)
      .subscribe(contact => {
        this.contacts.push(contact);
      });
  }
  deleteContact(id: any) {
    const contacts = this.contacts;
    this.contactService.deleteContact(id)
      .subscribe(data => {
        if (data.n == 1) {
          for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].id == id) {
              contacts.splice(i, 1);
            }
          }
        }
      })
  }
  ngOnInit() {
    this.getContacts();
  }




}
