import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  opVal:any = 0;
  mathNum:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getValues(ip:any){
    this.mathNum.push(ip);
    this.opVal = this.mathNum.join('');
  }

   doEval(){
    let result = eval(this.opVal);
    this.opVal = result;
  }

  reset(){
    this.opVal=0;
    this.mathNum =[];
  }
}
