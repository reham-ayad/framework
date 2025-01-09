import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  username:string='';
  UserName:string='UserName';
  userage:string='';
  UserAge:string='UserAge';
  useremail:string='';
  UserEmail:string='UserEmail';
  userpassword:string='';
  UserPassword:string='UserPassword';



}
