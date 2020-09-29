import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit, OnDestroy {
  doctorDetails;
  doctorId = this.route.snapshot.paramMap.get('doctorId');
  doctorDetailsSubscr: Subscription;

  constructor(
    private service: DoctorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.doctorDetailsSubscr = this.service.getDoctorDetails(this.doctorId).subscribe(
      doctorDetails => {
        this.doctorDetails = doctorDetails;
        console.log(doctorDetails);
      });
  }

  ngOnDestroy() {
    this.doctorDetailsSubscr.unsubscribe();
  }
}
