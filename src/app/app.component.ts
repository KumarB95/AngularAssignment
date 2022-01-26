import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // UC1

  title = 'HelloWorld';

  imgUrl="../assets/WhatsApp Image 2022-01-26 at 8.25.00 PM.jpeg"

  url="https://www.bridgelabz.com/"

  ngOnInit(){
    this.title="Hello from bridgelabz";
  }

  onClick($event:any){
    console.log("Save button is clicked!" ,$event);
    window.open(this.url, "_blank");
  }
}
