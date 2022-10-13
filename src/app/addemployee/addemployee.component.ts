import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }
  
  employeeCode=""
  employeeName=""
  designation=""
  gender=""
  companyName=""
  dob=""
  salary=""
  bloodgroup=""
  address=""
  contactNumber=""
  yearExperience=""
  email=""


  readValues=()=>{
   let data={
    "employeeCode":this.employeeCode,
  "employeeName":this.employeeName,
  "designation":this.designation,
  "gender":this.gender,
  "companyName":this.companyName,
  "dob":this.dob,
  "salary":this.salary,
  "bloodgroup":this.bloodgroup,
  "address":this.address,
  "contactNumber":this.contactNumber,
  "yearExperience":this.yearExperience,
  "email":this.email

   }

   console.log(data)
  }


  ngOnInit(): void {
  }

}
