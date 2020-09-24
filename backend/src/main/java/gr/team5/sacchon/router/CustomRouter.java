package gr.team5.sacchon.router;

import gr.team5.sacchon.resource.*;
import org.restlet.Application;
import org.restlet.routing.Router;

public class CustomRouter {

    private Application app;

    public CustomRouter(Application app) {
        this.app = app;
    }

    public Router publicResources() {
        Router router = new Router();
        router.attach("/ping", PingServerResource.class);
        return router;
    }

    public Router createApiRouter() {

        Router router = new Router(app.getContext());

        router.attach("/patient", PatientListResourceImpl.class);
        router.attach("/patient_null", PatientListResourceImpl.class);
        router.attach("/patient/login", PatientDataResourceImpl.class);
        router.attach("/patient/{id}", PatientResourceImpl.class);

        router.attach("/patient/{id}/data", PatientDataListResourceImpl.class);
        router.attach("/patient/{patient_id}/data/{id}", PatientDataResourceImpl.class);

        router.attach("/patient/{id}/consultation", ConsultationListResourceImpl.class);
        router.attach("/patient/{patient_id}/consultation/{id}", ConsultationResourceImpl.class);
        router.attach("/patient/{id}/data/average", PatientDataResourceImpl.class);

        router.attach("/doctor", DoctorListResourceImpl.class);
        router.attach("/doctor/login", DoctorResourceImpl.class);
        router.attach("/doctor/{id}", DoctorResourceImpl.class);

        router.attach("/doctor/{doctor_id}/patient", DoctorListResourceImpl.class);
        router.attach("/doctor/{doctor_id}/patient/{id}", PatientListResourceImpl.class);
        router.attach("/doctor/{doctor_id}/patient/{patient_id}/consultation", ConsultationListResourceImpl.class);
        router.attach("/doctor/{doctor_id}/patient/{patient_id}/consultation/{id}", ConsultationResourceImpl.class);

        return router;
    }
}
