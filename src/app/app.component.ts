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

  userName:string="";
  nameError:string="";


  ngOnInit(){
    this.title="Hello from bridgelabz";
  }

  onClick($event:any){
    console.log("Save button is clicked!" ,$event);
    window.open(this.url, "_blank");
  }

  onInput($event:any){
    console.log("Change event occured !", $event.data);
    const nameRegex= RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError="Name is incorrect!"
  }
}
