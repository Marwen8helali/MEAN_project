import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message: any;
  constructor(private formBuilder: FormBuilder) { 
    this.message = this.formBuilder.group({
      Name: [''],
      Email: [''],
      phone: [''],
      message:['']
    });

  }

  ngOnInit(): void {
  }
  

  onSubmitForm() {
    
    console.log(this.message.value);
  
  }

}
