import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
      itemValue = '';
      items: Observable<any[]>;

      constructor(public db: AngularFireDatabase) {
        this.items = db.list('items').valueChanges();
      }

  ngOnInit() {
  }

}
