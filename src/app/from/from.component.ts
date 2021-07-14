import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css'],
})
export class FromComponent implements OnInit {
  title = 'Template driven forms';

  @ViewChild('contactForm') contactForm!: NgForm;

  contact: Contact = new Contact();

  ngOnInit() {
    this.contact = {
      firstname: '',
      lastname: '',
      gender: 'male',
      isToc: true,
      email: '',
    };
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}

export class Contact {
  firstname: string = '';
  lastname: string = '';
  gender: string = '';
  isToc: boolean = false;
  email: string = '';
}
