package gr.team5.sacchon.security;

import org.restlet.Application;
import org.restlet.data.ChallengeScheme;
import org.restlet.security.ChallengeAuthenticator;

public class Shield {
    public static final String ROLE_SUPER_DOC = "super_doc";
    public static final String DOCTOR = "doctor";
    public static final String PATIENT = "patient";

    private Application application;

    /**
     * Set app the application
     * @param application
     */
    public Shield (Application application){
        this.application = application;
    }

    /**
     *
     * @return an api guard according to CustomVerifier
     */
    public ChallengeAuthenticator createApiGuard (){
        ChallengeAuthenticator apiGuard = new ChallengeAuthenticator(
                application.getContext(),
                ChallengeScheme.HTTP_BASIC,
                "realm");


        return apiGuard;
    }

}
