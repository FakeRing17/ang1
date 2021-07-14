import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputchange',
  templateUrl: './inputchange.component.html',
  styleUrls: ['./inputchange.component.css'],
})
export class InputchangeComponent implements OnInit {
  count: number = 100;
  name: string = 'Thủy';
  so1: number = 0;
  so2: number = 0;
  kq: number = 0;

  constructor() {}

  ngOnInit() {
    // var myVar = setInterval(() => {
    //   this.count--;
    //   if (this.count == 96) clearInterval(myVar);
    // }, 1000);
  }

  inputChange(e: any) {
    this.name = e.target.value;
  }

  solve() {
    this.kq = this.so1 + this.so2;
    console.log(this.kq);
  }
}
