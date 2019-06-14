import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LoggerService } from './services/common/logger.service';

export interface Item { name: string; }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent {
  items: Observable<any[]>;
  constructor(
    private db: AngularFirestore,
    private logger: LoggerService
  ) {
    // this.items = db.collection('items').valueChanges();
  }

  /**
   * @desc test function to log message.
   */
  public logMessage(){
    this.logger.log('Test Messsage from angular app','error',response => {
    }, error => {});
  }
}