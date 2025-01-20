React User Directory

I created this project as a React application that fetches and displays a list of users from the https://jsonplaceholder.typicode.com/users API. It includes features for searching, filtering, viewing user details, dark/light mode toggle, and pagination.


Table of Contents

[Features]

[Project Setup]

[Prerequisites]

[Step-by-Step Instructions]

[Technologies Used]

[Features Implemented]

[Core Features]

[Bonus Features]

[Deployment on Netlify]



Features

This application implements the following features:

Core Features

Fetches user data: I retrieve user data from the https://jsonplaceholder.typicode.com/users API when the application loads.

Displays user list: I present a list of users, showing their name, email, and city.

Search functionality: I allow filtering of the list by name using a search bar.

Sorting: I enable sorting of the user list in ascending (A-Z) and descending (Z-A) order by name.

User detail view: Clicking on a user navigates to a separate page where I display the user's full details (name, email, phone, company name, website).

"Go Back" button: On the user detail page, I provide a "Go Back" button to return to the main list.

Responsive design: I ensure the layout adapts for optimal viewing on both mobile and desktop devices.

Bonus Features

Dark/light mode toggle: I implement a toggle to switch between dark and light themes using the React Context API and Material UI's theming capabilities.

Pagination: I support pagination of the user list to handle larger datasets efficiently.

Project Setup

Prerequisites

Node.js: I ensure Node.js is installed on the system. It can be downloaded from https://nodejs.org/. Version 16 or higher is recommended.

npm: I use npm (Node Package Manager) as the package manager, which comes bundled with Node.js.

Step-by-Step Instructions

Create Project Directory:

I created a new directory for the project and navigated into it using the terminal:

mkdir user-directory
cd user-directory

Initialize React Project:

I initialized a new React project using Create React App:

npx create-react-app .

(The . indicates that the project should be created in the current directory.)

Install Dependencies:

I installed the necessary dependencies using npm:

React Router: For navigation.

npm install react-router-dom

Redux: For state management.

npm install redux react-redux

Redux Thunk: For handling asynchronous actions in Redux.

npm install redux-thunk

Material UI: For styling and UI components.

npm install @mui/material @emotion/react @emotion/styled

Project Structure:

I organized the project with the following recommended folder structure (inside the src folder):

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

Implement Redux (State Management):

src/redux/actions/userActions.js:

I defined action types (e.g., FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE).

I created action creators for fetching users, handling success, and handling errors.

I implemented the asynchronous action creator fetchUsers to fetch data from the API using fetch.

src/redux/reducers/userReducer.js:

I created a userReducer to handle the actions and update the state accordingly (e.g., store the fetched users, loading state, error state).

src/redux/reducers/index.js:

I combined reducers (if there are multiple reducers) using combineReducers from Redux.

src/redux/store.js:

I created the Redux store using createStore from Redux.

I applied the thunk middleware using applyMiddleware.

src/index.js:

I wrapped the App component with the Provider from react-redux and passed the store as a prop.

Create Components:

src/components/Home.js:

I connected the component to the Redux store using useDispatch and useSelector.

I dispatched the fetchUsers action in a useEffect hook.

I displayed the list of users, handling loading and error states.

I implemented search functionality using a TextField (from Material UI) and filtering logic.

I implemented sorting functionality using a button or other control and sorting logic.

I added pagination using the Pagination component (from Material UI).

I used Link from react-router-dom to make each user item navigate to the UserDetail page.

src/components/UserDetail.js:

I connected the component to the Redux store (if needed).

I got the userId from the route parameters using useParams from react-router-dom.

I fetched or filtered the user data based on the userId.

I displayed the user's details.

I added a "Go Back" button that uses navigate from react-router-dom to go back to the home page.

src/components/common/ThemeToggle.js (Bonus):

I created a toggle component (e.g., using a Switch from Material UI) to switch between dark and light modes.

I used the ThemeContext to update the theme state.

src/components/common/Pagination.js (Bonus):

I created a pagination component using the Pagination component from Material UI.

I handled page changes and updated the current page state in the Home component.

Implement Routing:

src/App.js:

I imported BrowserRouter, Routes, and Route from react-router-dom.

I wrapped the application with BrowserRouter.

I defined routes using Routes and Route:

/: Render the Home component.

/user/:userId: Render the UserDetail component.

I wrapped the entire app with MuiThemeProvider and ThemeProvider for using dark mode.

I used AppBar, Toolbar, Typography, and Switch for dark mode implementation.

I imported createTheme from @mui/material/styles.

I created dark and light themes using createTheme.

Styling:

I used Material UI components for styling and layout.

I added custom CSS in src/index.css or used styled-components if preferred.

Implement Dark/Light Mode (Bonus):

src/context/ThemeContext.js:

I created a ThemeContext using createContext from React.

I created a ThemeProvider component to manage the dark/light mode state using useState.

I provided the theme state and a toggleTheme function through the context.

src/App.js:

I wrapped the application with the ThemeProvider from the context created.

I consumed the theme state from the context and passed it to the ThemeProvider from Material UI.

Run the Application:

I started the development server:

npm start

Technologies Used

React.js: JavaScript library for building user interfaces.

React Router: Declarative routing for React applications.

Material UI: React component library for implementing Material Design.

Redux: State management library for predictable state updates.

Redux Thunk: Middleware for handling asynchronous actions in Redux.

npm: Package manager for JavaScript.

Create React App: Used for scaffolding the initial project structure (no longer actively maintained).

Features Implemented

Core Features

Data Fetching:

I fetched user data from the https://jsonplaceholder.typicode.com/users API using the fetch API.

I used useEffect to trigger the fetch when the Home component mounts.

I handled loading and error states to provide feedback to the user.

I dispatched Redux actions to update the store with fetched data or errors.

User List Display:

I displayed a list of users with their name, email, and city.

I used Material UI components (List, ListItem, ListItemText) for presentation.

I iterated over the fetched user data and rendered a ListItem for each user.

Search Functionality:

I provided a search bar using a TextField component from Material UI.

I filtered the user list based on the search input in real-time using the filter method.

I updated the displayed list whenever the search input changes.

Sorting:

I allowed sorting the user list by name in ascending (A-Z) or descending (Z-A) order.

I used a button or toggle to change the sorting order.

I sorted the user data using the sort method based on the selected order.

User Detail View:

I navigated to a separate page (/user/:userId) when a user is clicked.

I used Link from react-router-dom to create clickable user items.

I used useParams to extract the userId from the URL in the UserDetail component.

I fetched or filtered the user data based on the userId to display detailed information.

I provided a "Go Back" button that uses navigate from react-router-dom to return to the home page.

Responsive Design:

I used Material UI's Grid component to create a responsive layout that adapts to different screen sizes.

Bonus Features

Dark/Light Mode Toggle:

I implemented a toggle to switch between dark and light themes using a Switch component from Material UI.

I used the React Context API (createContext, useContext) to manage the theme state globally.

I created a ThemeContext and a ThemeProvider component to provide the current theme and a function to toggle it.

I used Material UI's createTheme to define the dark and light themes.

I used ThemeProvider from @mui/material/styles to apply the selected theme to the application.

I consumed the theme context in components that need to adapt to the theme (e.g., ThemeToggle, Home, UserDetail).

Pagination:

I implemented pagination to handle larger datasets efficiently.

I displayed a limited number of users per page (e.g., 5).

I used the Pagination component from Material UI to provide navigation between pages.

I calculated the start and end indices for slicing the user data based on the current page.

I updated the current page state when the user interacts with the pagination controls.

Deployment on Netlify

Prerequisites:

A GitHub account.

A Netlify account.

Steps:

Push Code to GitHub:

I made sure the code is committed and pushed to a GitHub repository.

Log in to Netlify:

I went to  https://www.netlify.com/  and logged in or signed up.

New Site from Git:

I clicked the "New site from Git" button.

Connect to GitHub:

I chose GitHub as the Git provider and authorized Netlify to access the repositories.

Select Repository:

I selected the project's repository from the list.

Configure Build Settings:

Branch to deploy:  main  (or the main branch)

Build command:  npm run build

Publish directory:  build

Deploy Site:

I clicked the "Deploy site" button.

Get the Deployed Link:

Netlify automatically built and deployed the site.

Once the deployment was complete, I received a unique URL for the live application: https://stellar-seahorse-b5ccc0.netlify.app/.

Note:

After the initial deployment, Netlify automatically rebuilds and redeploys the site whenever changes are pushed to the GitHub repository's main branch.

