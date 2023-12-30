# down2Up

Welcome to the GUVI Backend repository! This project serves as the backend for the 'down@UP' application, aiming to provide support for speech and facial therapy designed for children with Down syndrome.

## Features
- RESTful API endpoints for user authentication and management
- MongoDB database integration to store user information securely
- Password encryption for enhanced security measures
- Integration with frontend React-Native application

## Getting Started
To get started with this backend project, follow these steps:

1. Clone this repository to your local machine
2. Make sure you have NodeJS and MongoDB installed on your machine
3. Navigate to the root directory of the project and run `npm install` to install the necessary dependencies
4. Start the MongoDB server by running `mongod` in a separate terminal window
5. In the root directory of the project, run `npm start` to start the backend server
6. The backend server should now be running on a specified port (e.g., http://localhost:5000)

**Note:** This backend repository complements the frontend application for 'down@UP.' Ensure both repositories are set up and configured to fully run the application.

Frontend Repository Link: [guvi_frontend](https://github.com/DeepeshnotCool/guvi_frontend)

## API Endpoints
- `/create`: Register a new user
- `/signin`: Authenticate a user and generate a JWT token
- `/api/auth/forgot-password`: Initiate the password reset process via email
  
## About the App
The 'down2Up' application backend is designed to handle user authentication, registration, and profile management. It employs a secure MongoDB database to store user data and implements RESTful API endpoints to communicate with the frontend React-Native application.

For more details on API endpoints and usage, refer to the API documentation or code comments within the backend repository.


