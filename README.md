# React User Directory

This project is a React application that fetches and displays a list of users from the [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) API. It includes features for searching, filtering, viewing user details, dark/light mode toggle, and pagination.

## Table of Contents

*   [Features](#features)
    *   [Core Features](#core-features)
    *   [Bonus Features](#bonus-features)
*   [Project Setup](#project-setup)
    *   [Prerequisites](#prerequisites)
    *   [Step-by-Step Instructions](#step-by-step-instructions)
*   [Technologies Used](#technologies-used)
*   [Deployment on Netlify](#deployment-on-netlify)

## Features

This application implements the following features:

### Core Features

*   **Fetches user data:** Retrieves user data from the [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) API when the application loads.
*   **Displays user list:** Presents a list of users, showing their name, email, and city.
*   **Search functionality:** Allows filtering of the list by name using a search bar.
*   **Sorting:** Enables sorting of the user list in ascending (A-Z) and descending (Z-A) order by name.
*   **User detail view:** Clicking on a user navigates to a separate page displaying the user's full details (name, email, phone, company name, website).
*   **"Go Back" button:** On the user detail page, a "Go Back" button allows users to return to the main list.
*   **Responsive design:** Ensures the layout adapts for optimal viewing on both mobile and desktop devices.

### Bonus Features

*   **Dark/light mode toggle:** Implements a toggle to switch between dark and light themes using the React Context API and Material UI's theming capabilities.
*   **Pagination:** Supports pagination of the user list to handle larger datasets efficiently.

## Project Setup

### Prerequisites

*   **Node.js:** Ensure that Node.js is installed on your system. You can download it from [https://nodejs.org/](https://nodejs.org/). Version 16 or higher is recommended.
*   **npm:** This project uses `npm` (Node Package Manager) as the package manager, which comes bundled with Node.js.

### Step-by-Step Instructions

1. **Create Project Directory:**

    Create a new directory for your project and navigate into it using the terminal:

    ```bash
    mkdir user-directory
    cd user-directory
    ```

2. **Initialize React Project:**

    Initialize a new React project using Create React App:

    ```bash
    npx create-react-app .
    ```

    (The `.` indicates that you want to create the project in the current directory.)

3. **Install Dependencies:**

    Install the necessary dependencies using `npm`:

    *   **React Router:** For navigation.

        ```bash
        npm install react-router-dom
        ```

    *   **Redux:** For state management.

        ```bash
        npm install redux react-redux
        ```

    *   **Redux Thunk:** For handling asynchronous actions in Redux.

        ```bash
        npm install redux-thunk
        ```

    *   **Material UI:** For styling and UI components.

        ```bash
        npm install @mui/material @emotion/react @emotion/styled
        ```

4. **Project Structure:**

    Organize your project with the following recommended folder structure (inside the `src` folder):

    ```
    src/
    ├── components/
    │   ├── Home.js
    │   ├── UserDetail.js
    │   └── common/
    │       ├── SearchBar.js
    │       ├── SortButton.js
    │       ├── ThemeToggle.js (Bonus)
    │       └── Pagination.js (Bonus)
    ├── context/
    │   └── ThemeContext.js (Bonus)
    ├── redux/
    │   ├── actions/
    │   │   └── userActions.js
    │   ├── reducers/
    │   │   ├── userReducer.js
    │   │   └── index.js
    │   └── store.js
    ├── App.js
    ├── index.js
    └── index.css
    ```

5. **Implement Redux (State Management):**

    *   **`src/redux/actions/userActions.js`:**
        *   Define action types (e.g., `FETCH_USERS_REQUEST`, `FETCH_USERS_SUCCESS`, `FETCH_USERS_FAILURE`).
        *   Create action creators for fetching users, handling success, and handling errors.
        *   Implement the asynchronous action creator `fetchUsers` to fetch data from the API using `fetch`.

    *   **`src/redux/reducers/userReducer.js`:**
        *   Create a `userReducer` to handle the actions and update the state accordingly (e.g., store the fetched users, loading state, error state).

    *   **`src/redux/reducers/index.js`:**
        *   Combine reducers (if you have multiple reducers) using `combineReducers` from Redux.

    *   **`src/redux/store.js`:**
        *   Create the Redux store using `createStore` from Redux.
        *   Apply the `thunk` middleware using `applyMiddleware`.

    *   **`src/index.js`:**
        *   Wrap your `App` component with the `Provider` from `react-redux` and pass the store as a prop.

6. **Create Components:**

    *   **`src/components/Home.js`:**
        *   Connect the component to the Redux store using `useDispatch` and `useSelector`.
        *   Dispatch the `fetchUsers` action in a `useEffect` hook.
        *   Display the list of users, handling loading and error states.
        *   Implement search functionality using a `TextField` (from Material UI) and filtering logic.
        *   Implement sorting functionality using a button or other control and sorting logic.
        *   Add pagination using the `Pagination` component (from Material UI).
        *   Use `Link` from `react-router-dom` to make each user item navigate to the `UserDetail` page.

    *   **`src/components/UserDetail.js`:**
        *   Connect the component to the Redux store (if needed).
        *   Get the `userId` from the route parameters using `useParams` from `react-router-dom`.
        *   Fetch or filter the user data based on the `userId`.
        *   Display the user's details.
        *   Add a "Go Back" button that uses `navigate` from `react-router-dom` to go back to the home page.

    *   **`src/components/common/ThemeToggle.js` (Bonus):**
        *   Create a toggle component (e.g., using a `Switch` from Material UI) to switch between dark and light modes.
        *   Use the `ThemeContext` to update the theme state.

    *   **`src/components/common/Pagination.js` (Bonus):**
        *   Create a pagination component using the `Pagination` component from Material UI.
        *   Handle page changes and update the current page state in the `Home` component.

7. **Implement Routing:**

    *   **`src/App.js`:**
        *   Import `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`.
        *   Wrap your application with `BrowserRouter`.
        *   Define routes using `Routes` and `Route`:
            *   `/`: Render the `Home` component.
            *   `/user/:userId`: Render the `UserDetail` component.
        *   Wrap the entire app with `MuiThemeProvider` and `ThemeProvider` for using dark mode.
        *   Use `AppBar`, `Toolbar`, `Typography`, and `Switch` for dark mode implementation.
        *   Import `createTheme` from `@mui/material/styles`.
        *   Create dark and light themes using `createTheme`.

8. **Styling:**

    *   Use Material UI components for styling and layout.
    *   You can add custom CSS in `src/index.css` or use styled-components if you prefer.

9. **Implement Dark/Light Mode (Bonus):**

    *   **`src/context/ThemeContext.js`:**
        *   Create a `ThemeContext` using `createContext` from React.
        *   Create a `ThemeProvider` component to manage the dark/light mode state using `useState`.
        *   Provide the theme state and a `toggleTheme` function through the context.

    *   **`src/App.js`:**
        *   Wrap your application with the `ThemeProvider` from the context you created.
        *   Consume the theme state from the context and pass it to the `ThemeProvider` from Material UI.

10. **Run the Application:**

    *   Start the development server:

    ```bash
    npm start
    ```

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
    *   Fetched user data from the [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) API using the `fetch` API.
    *   Used `useEffect` to trigger the fetch when the `Home` component mounts.
    *   Handled loading and error states to provide feedback to the user.
    *   Dispatched Redux actions to update the store with fetched data or errors.
*   **User List Display:**
    *   Displayed a list of users with their name, email, and city.
    *   Used Material UI components (`List`, `ListItem`, `ListItemText`) for presentation.
    *   Iterated over the fetched user data and rendered a `ListItem` for each user.
*   **Search Functionality:**
    *   Provided a search bar using a `TextField` component from Material UI.
    *   Filtered the user list based on the search input in real-time using the `filter` method.
    *   Updated the displayed list whenever the search input changes.
*   **Sorting:**
    *   Allowed sorting the user list by name in ascending (A-Z) or descending (Z-A) order.
    *   Used a button or toggle to change the sorting order.
    *   Sorted the user data using the `sort` method based on the selected order.
*   **User Detail View:**
    *   Navigated to a separate page (`/user/:userId`) when a user is clicked.
    *   Used `Link` from `react-router-dom` to create clickable user items.
    *   Used `useParams` to extract the `userId` from the URL in the `UserDetail` component.
    *   Fetched or filtered the user data based on the `userId` to display detailed information.
    *   Provided a "Go Back" button that uses `navigate` from `react-router-dom` to return to the home page.
*   **Responsive Design:**
    *   Used Material UI's `Grid` component to create a responsive layout that adapts to different screen sizes.

### Bonus Features

*   **Dark/Light Mode Toggle:**
    *   Implemented a toggle to switch between dark and light themes using a `Switch` component from Material UI.
    *   Used the React Context API (`createContext`, `useContext`) to manage the theme state globally.
    *   Created a `ThemeContext` and a `ThemeProvider` component to provide the current theme and a function to toggle it.
    *   Used Material UI's `createTheme` to define the dark and light themes.
    *   Used `ThemeProvider` from `@mui/material/styles` to apply the selected theme to the application.
    *   Consumed the theme context in components that need to adapt to the theme (e.g., `ThemeToggle`, `Home`, `UserDetail`).
*   **Pagination:**
    *   Implemented pagination to handle larger datasets efficiently.
    *   Displayed a limited number of users per page (e.g., 5).
    *   Used the `Pagination` component from Material UI to provide navigation between pages.
    *   Calculated the start and end indices for slicing the user data based on the current page.
    *   Updated the current page state when the user interacts with the pagination controls.

## Deployment on Netlify

**Prerequisites:**

*   A GitHub account.
*   A Netlify account.

**Steps:**

1. **Push Code to GitHub:**
    *   Make sure your code is committed and pushed to a GitHub repository.

2. **Log in to Netlify:**
    *   Go to [https://www.netlify.com/](https://www.netlify.com/) and log in or sign up.

3. **New Site from Git:**
    *   Click the "New site from Git" button.

4. **Connect to GitHub:**
    *   Choose GitHub as your Git provider and authorize Netlify to access your repositories.

5. **Select Repository:**
    *   Select your project's repository from the list.

6. **Configure Build Settings:**
    *   **Branch to deploy:** `main` (or your main branch)
    *   **Build command:** `npm run build`
    *   **Publish directory:** `build`

7. **Deploy Site:**
    *   Click the "Deploy site" button.

8. **Get the Deployed Link:**
    *   Netlify will automatically build and deploy your site.
    *   Once the deployment is complete, you'll be given a unique URL for your live application (e.g., `https://<random-name>.netlify.app`). You can customize this URL in your Netlify site settings.
    *   **Published URL:** [https://userdirectoryassignment.netlify.app/](https://userdirectoryassignment.netlify.app/)

**Note:**

*   After the initial deployment, Netlify will automatically rebuild and redeploy your site whenever you push changes to your GitHub repository's `main` branch.
