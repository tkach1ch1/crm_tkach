# CRM for passenger transportation

## Table of Contents

-   ### [About](#about)
-   ### [Technologies](#technologies)
-   ### [Setup](#setup)

### Deployed project could be found under: https://crm-tkach.netlify.app

### Project development time: _45h_

---

## About

**CRM for passenger transportation** is a system from where you can manage all signed up users and also create a trips.


### _Warning ⚠️_

  - The regular user will not get access to CRM by login or sign up and he will redirect to home page as if it were a normal application.
  
  - To get access to CRM you have to enter a certain login with password, in other words admin login.

    ### Login: `tkachbogdan0205@gmail.com`
    ### Password: `123456789`
 <br />

### The CRM system includes three main pages:

### _Dashboard_:

There are some diagrams on the dashboard page. Since there is no data, the diagrams are shown only for appearence.

### _Users management page_:

All registered users of application are listed on the users management page in the form of table. Also from here the role of every user could be changed.
<br />
<br />
By a default, after the user signed up, he gets a "Passenger" role. 
<br />
<br />
But also he could get either a "Driver" or "Dispatcher" role.

### _Trips management page_:

On the trips management page it is possible to create a new trip using a special form. All created trips will be listed in the form of table where the certian trip could be removed if necessary.


---

## Technologies

Main technologies used for this project:

-   ReactJS (Create-react-app) v18.2.0
-   Typescript v4.9.5
-   Bootstrap v4.6.2
-   Redux Toolkit v1.9.3
-   Firebase Auth and Firestore Database v9.19.1

---

## Setup

Inside the project, you can run some built-in commands:

-   To start the project locally in **development** mode:

### **_npm start_** or **_yarn start_**

When you run the project, a new browser tab will automatically open on your computer's default browser to view the app.

The development server will start up on _http://localhost:3000_.

The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

-   To start the project in **production** mode:

### **_npm build_** or **_yarn build_**

This command builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The app is ready to be used.
