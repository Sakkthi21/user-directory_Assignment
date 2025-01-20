# React User Directory

This project is a React application that fetches and displays a list of users from the [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) API. It includes features for searching, filtering, viewing user details, dark/light mode toggle, and pagination.

## Table of Contents

*   [Features](#features)
*   [Project Setup](#project-setup)
    *   [Prerequisites](#prerequisites)
    *   [Creating the Project](#creating-the-project)
    *   [Installing Dependencies](#installing-dependencies)
    *   [Running the Application](#running-the-application)
*   [Troubleshooting](#troubleshooting)
    *   [504 Gateway Timeout Error](#504-gateway-timeout-error)
    *   [502 Bad Gateway Error](#502-bad-gateway-error)
    *   [ESLint Errors/Warnings](#eslint-errorswarnings)
    *   [Babel Issues](#babel-issues)
*   [Technologies Used](#technologies-used)
*   [Features Implemented](#features-implemented)
    *   [Core Features](#core-features)
    *   [Bonus Features](#bonus-features)
*   [Deployment](#deployment)
*   [Submission Guidelines](#submission-guidelines)

## Features

This application implements the following features:

### Core Features

*   **Fetches user data:** Retrieves user data from the [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) API on application load.
*   **Displays user list:** Presents a list of users, showing their name, email, and city.
*   **Search functionality:** Allows users to filter the list by name using a search bar.
*   **Sorting:** Enables sorting of the user list in ascending (A-Z) and descending (Z-A) order by name.
*   **User detail view:** Clicking on a user navigates to a separate page displaying the user's full details (name, email, phone, company name, website).
*   **"Go Back" button:** On the user detail page, a "Go Back" button allows users to return to the main list.
*   **Responsive design:** Adapts the layout for optimal viewing on both mobile and desktop devices.

### Bonus Features

*   **Dark/light mode toggle:** Implements a toggle to switch between dark and light themes using the React Context API and Material UI's theming capabilities.
*   **Pagination:** Supports pagination of the user list to handle larger datasets efficiently.

## Project Setup

### Prerequisites

*   **Node.js:** Ensure that you have Node.js installed on your system. You can download it from [https://nodejs.org/](https://nodejs.org/). Version 16 or higher is recommended.
*   **npm:** This project uses `npm` as the package manager, which comes bundled with Node.js.

### Creating the Project

1. **Create a new React project using Create React App:**

    ```bash
    npx create-react-app user-directory
    ```

2. **Navigate to the project directory:**

    ```bash
    cd user-directory
    ```

### Installing Dependencies

1. **Install the necessary dependencies using `npm`:**

    *   **React Router:** For navigation between pages.

        ```bash
        npm install react-router-dom
        ```

    *   **Redux:** For state management.

        ```bash
        npm install redux react-redux
        ```

    *   **Material UI:** For styling and components.

        ```bash
        npm install @mui/material @emotion/react @emotion/styled
        ```

### Running the Application

1. Start the development server:

    ```bash
    npm start
    ```

    This command will start the React development server and open the application in your default web browser (usually at  `http://localhost:3000`).

## Troubleshooting

This section outlines common issues encountered during development and their solutions:

### 504 Gateway Timeout Error

*   **Issue:** The application fails to load and displays a "504 Gateway Timeout" error.
*   **Solution:** This is often a temporary issue with the CCBP environment.
    *   Wait for some time (e.g., 15-30 minutes) and try again.
    *   Contact CCBP support if the problem persists.

### 502 Bad Gateway Error

*   **Issue:** The application fails to load and displays a "502 Bad Gateway" error.
*   **Solution:** Similar to the 504 error, this is usually a temporary issue with the CCBP environment.
    *   Wait and retry.
    *   Contact CCBP support if the problem persists.

### ESLint Errors/Warnings

*   **Issue:** Compilation errors or warnings from ESLint (e.g., `react/jsx-no-undef`, `no-unused-vars`).
*   **Solution:**
    *   **`react/jsx-no-undef`:** Ensure that you have imported the necessary components or variables correctly. For example, if using `Switch` from Material UI, make sure you have `import { Switch } from '@mui/material';`.
    *   **`no-unused-vars`:** Remove any unused variables or imports from your code.

### Babel Issues

*   **Issue:** Errors related to Babel, such as "Identifier '...' has already been declared."
*   **Solution:**
    *   Ensure that you are not importing the same module or variable multiple times in the same file.
    *   Review your import statements and remove any duplicates.

## Technologies Used

*   **React.js:** JavaScript library for building user interfaces.
*   **React Router:** Declarative routing for React applications.
*   **Material UI:** React component library for implementing Material Design.
*   **Redux:** State management library for predictable state updates.
*   **Redux Thunk:** Middleware for handling asynchronous actions in Redux.
*   **npm:** Package manager for JavaScript.
*   **Create React App:** Used for scaffolding the initial project structure (no longer actively maintained).

## Features Implemented

### Core Features

*   **Data Fetching:**
    *   Fetches user data from the  `https://jsonplaceholder.typicode.com/users`  API using the  `fetch`  API.
    *   Implements error handling to catch network errors and display appropriate messages to the user.
    *   Uses Redux Thunk to manage asynchronous data fetching in Redux actions.
*   **User List Display:**
    *   Displays a list of users with their name, email, and city.
    *   Uses Material UI components (`List`,  `ListItem`,  `ListItemText`) for presentation.
*   **Search Functionality:**
    *   Provides a search bar to filter the user list by name.
    *   Filters the list in real-time as the user types.
    *   Uses a  `TextField`  component from Material UI for the search input.
*   **Sorting:**
    *   Allows sorting the user list by name in ascending (A-Z) or descending (Z-A) order.
    *   Implements sorting logic using JavaScript's  `sort`  method.
*   **User Detail View:**
    *   Navigates to a separate page when a user is clicked, displaying the user's full details.
    *   Uses React Router for navigation.
    *   Fetches and displays additional user details (phone, company name, website) on the detail page.
    *   Provides a "Go Back" button to return to the main list.
*   **Responsive Design:**
    *   Uses Material UI's responsive grid system (`Grid`) to ensure the application adapts to different screen sizes.

### Bonus Features

*   **Dark/Light Mode Toggle:**
    *   Implements a toggle to switch between dark and light themes.
    *   Uses React Context API to manage the theme state globally.
    *   Uses Material UI's  `createTheme`  and  `ThemeProvider`  to apply the selected theme to components.
    *   Uses a  `Switch`  component from Material UI for the toggle.
*   **Pagination:**
    *   Implements pagination to handle larger datasets efficiently.
    *   Displays a limited number of users per page (e.g., 5).
    *   Provides controls to navigate between pages.
    *   Uses a  `Pagination`  component from Material UI for pagination controls.

## Deployment

This project can be deployed to platforms like Netlify or Vercel. Here are the general steps:

**Prerequisites:**

*   A GitHub account.
*   A Netlify or Vercel account.

**Steps:**

1. **Initialize a Git Repository:**

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
2. **Create a GitHub Repository:**
    *   Create a new repository on GitHub (public or private).
    *   **Do not** initialize it with a `README.md` (you already have one).

3. **Push to GitHub:**

    ```bash
    git remote add origin <your-github-repo-url>
    git branch -M main
    git push -u origin main
    ```

    Replace  `<your-github-repo-url>`  with the URL of your GitHub repository.

### Deployment to Netlify

1. **Log in to Netlify:**  Go to [https://www.netlify.com/](https://www.netlify.com/) and log in or sign up.
2. **New Site from Git:**  Click the "New site from Git" button.
3. **Connect to GitHub:**  Choose GitHub as your Git provider and authorize Netlify to access your repositories.
4. **Select Repository:**  Select your project's repository from the list.
5. **Configure Build Settings:**
    *   **Branch to deploy:**  `main`  (or your main branch)
    *   **Build command:**  `npm run build`
    *   **Publish directory:**  `build`
6. **Deploy Site:**  Click the "Deploy site" button.

### Deployment to Vercel

1. **Log in to Vercel:**  Go to [https://vercel.com/](https://vercel.com/) and log in or sign up.
2. **Import Project:**  Click the "Import Project" button.
3. **Connect to GitHub:**  Choose GitHub as your Git provider and authorize Vercel to access your repositories.
4. **Select Repository:**  Select your project's repository from the list.
5. **Configure Project:**
    *   Vercel should automatically detect that it's a React project.
    *   **Build Command:**  `npm run build`
    *   **Output directory:**  `build`
6. **Deploy:**  Click the "Deploy" button.

**Note:**

*   Replace placeholder values (repository URLs, branch names) with your actual information.
*   After deployment, you will get a live URL for your application.

## Submission Guidelines

*   **Upload to GitHub:** Ensure your project is pushed to a GitHub repository.
*   **README.md File:** Include a `README.md` file in your GitHub repository that describes:
    *   Project setup
    *   Steps to run the project locally
    *   Features implemented
*   **Format:**
    *   Provide the GitHub repository link.
    *   Ensure the project is clearly documented and easy to navigate.