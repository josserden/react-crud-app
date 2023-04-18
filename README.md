# React CRUD Application

A simple React application that allows users to view and manage a list of users.

## Table of Contents

- [React CRUD Application](#react-crud-application)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)

## Description

This application has three main pages:

1. A welcome page with a description of the application and a link to the users
   page.
2. A users page that displays a list of users in a table with the following
   fields: id, name, username. Users can be searched by name or username.
   Clicking on a user will take the user to the user details page.
3. A user details page that displays all of the data for the selected user.
   Users can navigate to the next or previous user.

The user data is retrieved from https://jsonplaceholder.typicode.com/users and
stored in a Redux store using Redux Toolkit. Users can be added, edited, and
deleted using a modal form with validation for empty fields. The form for adding
a new user starts with a default structure. Edited records are displayed in a
different font. The application uses routing and can be hosted on GitHub.

## Installation

To install the application, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the application.

## Usage

To use the application, follow these steps:

1. Open the application in your browser.
2. Navigate to the users page by clicking on the link in the welcome page.
3. Use the search bar to search for users by name or username.
4. Click on a user to view their details.
5. Use the navigation buttons to navigate to the next or previous user.
6. Click the add, edit, or delete buttons to add, edit, or delete users.

## Technologies Used

This application uses the following technologies:

- React
- Redux Toolkit
- React Router
- Material UI

## Contributing

Contributions to this application are welcome. To contribute, follow these
steps:

1. Fork the repository to your own GitHub account.
2. Create a branch with your changes: `git checkout -b my-feature-branch`.
3. Commit your changes: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Create a new Pull Request and describe your changes.

## License

This application is licensed under the [MIT License](LICENSE).
