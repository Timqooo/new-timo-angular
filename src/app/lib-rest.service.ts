import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Book } from './models/book';



@Injectable({
  providedIn: 'root'
})
export class LibRestService {
  constructor(private firestore: AngularFirestore) { }

  callListOfBooksEndpoint(): Observable<Book[]> {
    return this.firestore.collection<Book>('books').get().pipe(
      map(snapshot =>
        snapshot.docs.map(doc => ({ ...(doc.data()) as Book }))
      )
    );
  }

  
}