/* @flow */
/* global require: true */

import * as Rx from 'rxjs';

let jsButton: any = document.querySelector('#jsButton')
let rxjsButton: any = document.querySelector('#rxjsButton')

jsButton.addEventListener('click', e => { console.log("You clicked JS button") })

Rx.fromEvent(rxjsButton, 'click')
  .subscribe(e => console.log("You clicked RxJs button"))