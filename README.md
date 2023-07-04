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

### Elapsed time table

|    Date    |   Commit   | Elapsed Time | Start Time | End Time |
|:----------:|:----------:|:----------:|:----------:|:--------:|
| 2023-06-30 |  Initial commit  |    0 hours |  12:00   | 12:00  |
| 2023-06-30 |  Initialize CRA and add dependencies  |    30 min  |   12:00   |  12:30  |
| 2023-06-30 |  Add routing and Users page | 1 hour, 20 mins |   12:30   | 13:50  |
| 2023-06-30 |  Add responsive and email for Users page |    20 mins |   13:50   | 14:10  |
| 2023-06-30 |  Add Todos page |  1 hour, 25 mins |   15:40   | 16:55  |
| 2023-06-30 |  Add todos table, store, reducer, actions for todos | 2 hours, 30 mins |   18:30   | 21:00 |
| 2023-07-01 |  Rework getAllTodos with redux | 1 hour, 30 mins |   12:00   | 13:30 |
| 2023-07-01 |  Separate todos in modules | 1 hour, 30 mins |   13:30   | 15:00 |
| 2023-07-01 | Add addTodo | 1 hour, 50 mins |   20:30   | 22:20 |
| 2023-07-02 |  Add deleteTodo | 45 mins |   12:00   | 12:45 |
| 2023-07-02 |  Add editTodo | 1 hour, 10 mins |   12:45   | 13:55 |
| 2023-07-03 |  Add rework TodosTable, complete edit logic | 1 hour, 25 mins |   15:20   | 16:45 |
| 2023-07-03 |  Rebuild User.tsx and add counter | 45 mins |   16:45   | 17:30 |
| 2023-07-03 |  Add toastify | 20 mins |    17:30   | 17:50  |
| 2023-07-03 |  Change complete button on checkbox | 20 mins |   22:40   | 23:00 |
| 2023-07-03 |  Add some cypress tests | 2 hours, 15 mins |   23:00   | 01:15 |
| 2023-07-04 |  Complete tests and fix Link in NavigationBar. Edit readme. | 30 mins |   12:00   | 12:30 |
### **TOTAL : 18 hours, 25 minutes.**
