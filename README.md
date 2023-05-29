
# MERN Stack E-Commerce Website

### MongoDB - Express - React - Redux - NodeJS

MERN stack is intended to provide a starting point for building full-stack JavaScript applications, including dynamic web apps. The stack is made of MongoDB, Express, React, Redux, and NodeJS.


## Demo

- Client [demo](https://tantannn.github.io/e-commerce/)
- Admin [demo](https://e-commerce-admin-bunny.netlify.app/)
- Back-end [demo](https://e-commerce-qsq9.onrender.com/)
- Dummy accounts:
 - Admin Account: `asd@asd.asd` password: `asd`
 - Consultant Account: `yui@asd.asd` password: `asd`

## Project Breakdown

### 1. API Server

- Directory `api`
- Todo:
  - [x] Authentication system 
    - [x] Sign up - [bcrypt](https://www.npmjs.com/package/bcrypt)
    - [x] Local login - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - [passport-jwt](https://www.npmjs.com/package/passport-jwt)
  - [x] User management - CRUD operations

### 2. React Client

- Directory `client`
- Created by using [create-react-app](https://www.npmjs.com/package/create-react-app)
- Todo:
  - [x] Redux store - [react-redux](https://www.npmjs.com/package/react-redux)
  - [x] Router - [react-router-dom](https://www.npmjs.com/package/react-router-dom) 
  - [ ] Authentication pages
    - [x] Sign up page
    - [x] Sign in page 
    - [ ] Reset password page
    - [ ] Profile page
  - [x] Send Email - [nodemail](https://www.npmjs.com/package/nodemailer)
  - [x] Chat Box - [socket.io] 


### 3. Admin

- Directory `admin`
- Todo:
  - [x] Verify Admin
  - [x] Product management pages
    - [x] Product list page
    - [x] Product edit page
  - [x] User management pages
    - [x] User list page
    - [x] User edit page
    - [x] User history
  - [x] Material design - [Material-UI](https://material-ui.com)
  - [ ] Chat Box - [socket.io](https://socket.io/) (WIP)

## Getting started

### 1. Clone or download the `BookingWebsite` repository

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)
- [Node](https://nodejs.org/en/download/) 
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm start       // run it locally
```

## Server-side usage(PORT: 5000)

```terminal
// in the root level
$ cd api
$ yarn # or npm i    // npm install packages
$ npm start       // run it locally
```

### Admin usage(PORT: 3001)

```terminal
// in the root level
$ cd client   // go to server folder
$ npm i       // npm install packages
$ npm start // run it locally
```

