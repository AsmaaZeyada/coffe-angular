import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  newsLetterForm: FormGroup;
  submitted = false;
  notVailed = false;
  sendData = false;

  constructor() { }

  ngOnInit() {
    this.newsLetterForm = new FormGroup({
      'useremail': new FormControl('Email', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    this.submitted = true;
    this.notVailed = false;
    setTimeout(() => {
      this.submitted = false;

      if (!this.newsLetterForm.get('useremail').valid) {
        this.notVailed = true;
        this.sendData = false;
      }

      if (this.newsLetterForm.get('useremail').valid) {
        this.sendData = true;
        this.notVailed = false;
        this.newsLetterForm.reset();
      }
    }, 800);

    this.sendData = false;
  }

}
