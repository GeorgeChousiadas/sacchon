
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor/doctor.component';

import { PatientDataDetailComponent } from './patient/patient-data-detail/patient-data-detail.component';
import { PatientNullComponent } from './patient/patient-null/patient-null.component';
import { PatientComponent } from './patient/patient/patient.component';
import { PatientDataComponent } from './patient/patient-data/patient-data.component';
import { PostPatientDataComponent } from './patient/post-patient-data/post-patient-data.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientLoginComponent } from './login-layout/patient-login/patient-login.component';
import { DoctorLoginComponent } from './login-layout/doctor-login/doctor-login.component';
import { ChiefDoctorLoginComponent } from './login-layout/chief-doctor-login/chief-doctor-login.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { PostConsultationComponent } from './doctor/post-consultation/post-consultation.component';
import { PutPatientDataComponent } from './patient/put-patient-data/put-patient-data.component';
import { DeletePatientDataComponent } from './patient/delete-patient-data/delete-patient-data.component';
import { AverageComponent } from './patient/average/average.component';
import { DeleteDoctorComponent } from './doctor/delete-doctor/delete-doctor.component';
import { PutConsultationComponent } from './doctor/put-consultation/put-consultation.component';
import { ConsultationsComponent } from './doctor/consultations/consultations.component';
import { InfoSubDataComponent } from './chief-doctor/info-sub-data/info-sub-data.component';
import { InfoSubConsultComponent } from './chief-doctor/info-sub-consult/info-sub-consult.component';

const routes: Routes = [
  {
    path: 'login',
    children: [
      {
        path: 'patient',
        component: PatientLoginComponent
      },
      {
        path: 'doctor',
        component: DoctorLoginComponent
      },
      {
        path: 'chief_doctor',
        component: ChiefDoctorLoginComponent
      }
    ]
  },
  {
    path: 'patient',
    children: [
      {
        path: '',
        component: PatientComponent,
      },
      {
        path: ':id',
        component: PatientDetailsComponent,
      },
      {
        path: ':id/data',
        component: PatientDataComponent,

      },
      {
        path: ':id/data/post',
        component: PostPatientDataComponent,
      },
      {
        path: ':patientId/data/average',
        component: AverageComponent,
      },
      {
        path: ':patientId/data/:dataId',
        component: PatientDataDetailComponent,
      },
      {
        path: ':patientId/data/:dataId/edit',
        component: PutPatientDataComponent,
      },
      {
        path: ':patientId/data/:dataId/delete',
        component: DeletePatientDataComponent,
      }
    ]
  },
  {
    path: 'patient_null',
    children: [
      {
        path: '',
        component: PatientNullComponent,
      }
    ]
  },
  {
    path: 'doctor',
    children: [
      {
        path: '',
        component: DoctorComponent,
      },
      {
        path: ':doctorId',
        component: DoctorDetailsComponent
      },
      {
        path: ':doctorId/deleteDoc',
        component: DeleteDoctorComponent
      },
      {
        path: ':doctorId/consultation',
        component: ConsultationsComponent,
      },
      {
        path: ':doctorId/patient/:patientId/consultation/post',
        component: PostConsultationComponent,
      },
      {
        path: ':doctorId/patient/:patientId/consultation/:consId/edit',
        component: PutConsultationComponent
      }
    ]
  },
  {
    path: 'chief',
    children: [
      {
        path: ':patientId/data/infoSub',
        component: InfoSubDataComponent,
      },
      {
        path: ':doctorId/consultation/infoSub',
        component: InfoSubConsultComponent,
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
