import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/observable";
import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // const myNumbers = Observable.interval(1000);
    // myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // )
    //
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package')
      }, 2000)
      setTimeout(() => {
        observer.next('second package')
      // }, 4000)
      // setTimeout(() => {
      //   observer.error('failed package')
      // }, 5000)
      setTimeout(() => {
        observer.complete()
      }, 5000)
    });

    myObservable.subscribe(
      (data: string) => { console.log('R: ' + data) },
      (error: string) => { console.log('R: ' + error) },
      () => {console.log('completed') }
    )

  }
}
