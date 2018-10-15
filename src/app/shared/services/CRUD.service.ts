import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable, Subject } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
 itemsFromDatabase: any;
 allAdItems = new Subject();
 sportsAdItems = new Subject();
 username = new Subject();

  constructor(public angularFireDatabase: AngularFireDatabase) {
  }

  getAllAdItemsOnValueChanges(tableName:string) {
      this.itemsFromDatabase = this.angularFireDatabase.list(tableName).valueChanges().subscribe(items => {
        this.itemsFromDatabase = items;
        // for(var i =0; i < items.length; i++){
        //   console.log(items[i]);
        // }
        //console.log(items);
        if (tableName === 'userReadable/ads') {
          this.allAdItems.next(items);
        } else if (tableName === 'userReadable/sportsAds') {
          this.sportsAdItems.next(items);
        }
      })
  }

  getAdItemsByCategory(tableToSearch: string) {
    this.itemsFromDatabase = this.angularFireDatabase.list(tableToSearch).valueChanges().subscribe(items => {
      this.itemsFromDatabase = items;
      this.sportsAdItems.next(items);
    })
  }

  getUsers() {

  }

  getUserNameOfCurrentLoggedIn() {
    const uid = localStorage.getItem('uid');
    this.angularFireDatabase.list('/users/' + uid).valueChanges().subscribe( (data) => {
       // Set the username to a variable and then local storage
       const username = data[1].toString();
       localStorage.setItem('username', username);
       this.username.next(username);
    });
  }
  // Add operations
  addAd(value: string) {
    const ads = this.angularFireDatabase.list(value);
    ads.push('new item');
  }
}
