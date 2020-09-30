package gr.team5.sacchon.representation;

import gr.team5.sacchon.model.Patient;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PatientRepresentation {

    private String username;
    private String password;
    private long patientId;

    //patient who has not have a doctor to advice him ->false, otherwise true
    private boolean hasNotification;

    /**
     * The URL of this resource which is:
     * http://localhost:9000/patient/{id}
     */
    private String uri;

    /**
     * Constructor
     * @param patient will be represent the resource
     */
    public PatientRepresentation(Patient patient) {
        if (patient != null) {
            username = patient.getUsername();
//            password = patient.getPassword();
            patientId = patient.getId();
            hasNotification = patient.isHasNotification();
            uri = "http://localhost:9000/patient/" + patient.getId();
        }

        if (patient.getDoctor() == null) {
            uri = "http://localhost:9000/patient_null/" + patient.getId();
        }
    }

    /**
     *
     * @return an instance of a patient
     */
    public Patient createPatient() {
        Patient patient = new Patient();
        patient.setUsername(username);
        patient.setPassword(password);

        //initially a new patient on the system do not have a doctor, hasNotification=false
        patient.setHasNotification(false);

        return patient;
    }
}
