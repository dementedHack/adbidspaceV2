import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { CRUDService } from '../../shared/services/CRUD.service';
import { Ad } from '../../shared/models/ad.model';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
      itemValue = '';
      items: Observable<any[]>;
      uid: string;
      adItems = [];
      sportsAdItems = [];

      constructor(public angularFireDatabase: AngularFireDatabase,
                  public CRUDService: CRUDService) {
        // this.items = angularFireDatabase.list('users').valueChanges();
        // this.CRUDService.getItemsOnValueChanges('users');

        this.CRUDService.allAdItems.subscribe(
          (receivedItems: any) => {
            this.items = receivedItems;
            for(var i = 0; i < receivedItems.length; i++){
              const category = Object.values(this.items[i])[0].toString();
              const description = Object.values(this.items[i])[2].toString();
              const owner = Object.values(this.items[i])[3].toString();
              const title = Object.values(this.items[i])[4].toString();
              const created = Object.values(this.items[i])[1].toString();
              // console.log(Object.values(this.items[i]));
              //adItem = Object.values(this.items[i]);
              var adItem = new Ad(title,description,category,owner,created);
              this.adItems.push(adItem);
            }
        });

        this.CRUDService.sportsAdItems.subscribe(
          (receivedItems: any) => {
            console.log(receivedItems);
            //this.items = receivedItems;
            for(var i = 0; i < receivedItems.length; i++){
              // Get the UID for the sports items. Then use filter
              console.log(Object.keys(receivedItems[i])[0]);
              // const category = Object.values(this.items[i])[0].toString();
              // const description = Object.values(this.items[i])[2].toString();
              // const owner = Object.values(this.items[i])[3].toString();
              // const title = Object.values(this.items[i])[4].toString();
              // const created = Object.values(this.items[i])[1].toString();
              // console.log(Object.values(this.items[i]));
              //adItem = Object.values(this.items[i]);
              // var adItem = new Ad(title,description,category,owner,created);
              // this.sportsAdItems.push(adItem);
            }
        });
      }

  ngOnInit() {
    this.CRUDService.getAllAdItemsOnValueChanges('userReadable/ads');
    this.CRUDService.getAllAdItemsOnValueChanges('userReadable/sportsAds');
  }

}
