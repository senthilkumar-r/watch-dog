import { Injectable } from '@angular/core';
import {
  HttpClient, HttpHeaders, HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
// import Contact from './contact';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  //retriving all contacts
  getContacts() {
    return this.http.get('http://localhost:3000/api/contacts')
      .pipe(map((res: any) => res));
  };
  //add contact
  addContact(contact) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json;' });
    return this.http.post('http://localhost:3000/api/contact', contact, { headers: headers })
      .pipe(map((res: any) => res));
  };
  //delete contact
  deleteContact(id) {
    return this.http.delete('http://localhost:3000/api/contact/' + id)
      .pipe(map((res: any) => res));
  };
}
