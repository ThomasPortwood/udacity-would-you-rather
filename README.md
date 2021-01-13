# Would You Rather Project

React 'Would You Rather' project submission for Thomas Portwood

To start:

* install all project dependencies with `yarn install`
* start the development server with `yarn start`

## Component Hierarchy
```bash
App # dispatches action to obtain users, defines react-router routes
  - Nav # provides navigation via react-router
  - Login # allows simulated login by dispatching action to set authenticated/authorized user
  - Home # allows browsing the questions by filtering, allows navivating to question pages
  - QuestionPage # shows details of an individual question
  - Profile # shows minimal user profile
  - AddQuestion # allows adding a question by the authenticated user
  - Leaderboard # shows all users ranked by asked+answered questions
  - Logout # allows the currently authenticated/authorized user to log out
```