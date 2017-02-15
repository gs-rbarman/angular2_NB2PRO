import { Component } from '@angular/core';
//import {Observable, Observer} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _title = 'To do';
  //private _test = {a:{}};
  //private _timer:Observable<any>;
  //private _startedAt:string;

  constructor(){
    //this._timer =  this.getFuture();
    //this._startedAt = new Date().toISOString();
  }

  /*getFuture():Observable<any>{
    return Observable.create((obs:Observer<any>)=>{

      let count = 0;
      let id = setInterval(()=>{
        if(count > 10){
          obs.complete();
          clearInterval(id);
        }else {
          obs.next(count);
          count++;
        }
      }, 1000)

      return ()=>clearInterval(id);
    });
  }*/
}
