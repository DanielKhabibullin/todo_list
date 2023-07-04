# CRUD Web Interface Exercise

This is a sample project that demonstrates a typical web interface for performing CRUD (Create, Read, Update, Delete) operations using a REST API. It utilizes the placeholder REST API provided by [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/) as a mock API.

## Technologies Used

The project utilizes the following technologies, libraries, and features:

- **React.js**: A JavaScript library for building user interfaces.
- **React Router**: A library for handling routing in a React application.
- **React Bootstrap**: A library of reusable UI components for React.
- **Redux**: A state management library for managing the application state.
- **ky**: A library for making HTTP requests to the REST API. ()
- **TypeScript**: A statically typed superset of JavaScript, providing type checking and better code maintainability.
- **Cypress**: An end-to-end testing framework for testing web applications.
- **Responsive Design**: The web interface is designed to be responsive and work well on different screen sizes.

## Features

The web interface includes the following features:

- Listing all todo items.
- Adding a new todo item.
- Marking a todo item as complete/in
- Editing a todo item.
- Deleting a todo item.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Install the project dependencies by running `npm install`.
3. Start the development server by running `npm start`.
4. Open your browser and navigate to http://localhost:3000 to view the web interface.

Note: Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

## API Integration

The project utilizes the REST API provided by jsonplaceholder.typicode.com for CRUD operations on todo items. The API endpoints used in this project are as follows:

- GET `/users`: Get all users.
- GET `/todos`: Get all todo items.
- POST `/todos`: Add a new todo item.
- PUT `/todos/{id}`: Update a specific todo item.
- DELETE `/todos/{id}`: Delete a specific todo item.

## Testing

The project includes end-to-end tests for the main CRUD operations using Cypress. Cypress is an end-to-end testing framework for testing web applications. To run the tests, follow these steps:

1. Make sure the development server is running (npm start).
2. Open a new terminal window and navigate to the project root directory.
3. Run the command `npm run cypress:open` to open the Cypress test runner.
4. In the Cypress test runner, select the appropriate test file to run the tests.
5. Cypress will open a new browser window and execute the tests.
6. You can view the test results in the Cypress test runner window.

## Deployment

The project is deployed on Vercel and can be accessed at [vercel.app](https://todo-app-dakh.vercel.app/).

Feel free to explore the project, make changes, and add additional tests as needed. This exercise will help you understand how to build a web interface for CRUD operations using React.js and interact with a REST API. Don't hesitate to reach out if you have any questions or need further assistance.

License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). See the LICENSE file for more information.
