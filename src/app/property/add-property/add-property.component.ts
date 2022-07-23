import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/'])
  }

  // onSubmit(Form : NgForm){
    //console.log(Form);
  //}

  onSubmit(){
    console.log('Congrats, form Submited');
    //console.log(Form);
    console.log(this.addPropertyForm);
  }

}
