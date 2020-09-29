import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from 'src/app/patient/patient.service';
import { Router } from '@angular/router';
import { PatientData } from 'src/app/shared/patient-data';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent implements OnInit {
  patientData: PatientData[];
  id =  this.route.snapshot.paramMap.get("id"); 

  constructor(
    private service: PatientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.service.getPatientsData(this.id).subscribe(
      patientData => {this.patientData = patientData;
      console.log(patientData);
    })
  }

}