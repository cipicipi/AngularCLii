import {Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {formatDate} from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'countYourMoney';
  mymoney = [];
  @ViewChild('MyDate') MyDate: ElementRef;
  @ViewChild('MyProduct') MyProduct: ElementRef;
  @ViewChild('MyPrice') MyPrice: ElementRef;
  @ViewChild('MyAmount') MyAmount: ElementRef;
  ngAfterViewInit() {
    // console.log(this.MyDate.nativeElement);
  }
  //Resetez input fieldurile
  resetareCampuri(){
    this.MyDate.nativeElement.value = "";
    this.MyPrice.nativeElement.value = "";
    this.MyAmount.nativeElement.value = "";
    this.MyProduct.nativeElement.value = "";
  }
  //Creare array cu values din inputuri
  addMoney(date,product,price,amount){
    if(date!=="" && product!=="" && price!=="" && amount!== ""){
    var cipiDate = formatDate(new Date() , 'shortDate', 'en-US');
    console.log(cipiDate);
        this.mymoney.push({
        Date : date,
        Product : product,
        Price : price,
        Amount : amount
      });
      this.resetareCampuri();
      console.log(this.mymoney);

}else{
      alert("At least one field is empty");
    }
}}




