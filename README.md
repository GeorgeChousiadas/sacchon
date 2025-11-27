## About the project

Sacchon is a diabetes management web application consisting of a Java/Spring REST API (backend) and an Angular/TypeScript single-page application (frontend). It allows patients to record their diabetes-related medical data and receive ongoing guidance from doctors.

### Main roles and functionality

- **Patients**
  - Sign up / manage their account
  - Record blood glucose measurements and daily carbohydrate intake
  - View averages over selected periods (e.g. average daily glucose, carbs)
  - See current and past consultations from their doctor
  - Correct or delete wrongly submitted data

- **Doctors**
  - Sign up / manage their account
  - Browse a patient’s medical history and consultation history
  - Identify patients without a consultation in the last month
  - Create and update monthly consultations (medication and dosage advice)

- **Chief Doctor / Admin**
  - Monitor overall activity of patients and doctors
  - View aggregated reports and usage statistics

The backend exposes a RESTful web API that provides all core business operations, while the frontend consumes these endpoints to deliver separate interfaces for patients, doctors, and the chief doctor.
