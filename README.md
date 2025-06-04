
# React Task Manager

A simple task management application built with React, TypeScript, and Auth0 for authentication. Users can create, edit, and delete tasks with validation and authentication.

## Features

- User authentication via Auth0
- Create, edit, delete tasks
- Task validation with error handling
- Protected routes for authenticated users only
- Responsive and user-friendly UI with basic styling
- Global state management using React Context API

## Tech Stack

- React with TypeScript
- React Router DOM for routing
- Auth0 React SDK for authentication
- UUID for unique task IDs
- Context API for state management
- CSS inline styling

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- Auth0 account and application setup

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/task-manager-react.git
   cd task-manager-react
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure Auth0

- Create an Auth0 application in your Auth0 dashboard.
- Update `main.tsx` with your Auth0 domain and clientId:

```tsx
<Auth0Provider
  domain="YOUR_AUTH0_DOMAIN"
  clientId="YOUR_AUTH0_CLIENT_ID"
  authorizationParams={{ redirect_uri: window.location.origin }}
  useRefreshTokens={true}
  cacheLocation="localstorage"
>
  <App />
</Auth0Provider>
```

### Running the app

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view in the browser.

## Project Structure

- `/src`
  - `/components` - Reusable components like AuthButtons
  - `/context` - React Context API for tasks state
  - `/pages` - App pages like Dashboard, CreateTask, EditTask, NotFound
  - `App.tsx` - Main app with routes and auth handling
  - `main.tsx` - App entry point with Auth0 provider

## Future Improvements

- Add persistent storage (e.g., backend API or localStorage)
- Enhance UI with CSS frameworks or styled-components
- Add task filtering and sorting
- Implement user profile management

## License

MIT License © 2025 Your Name

---

Feel free to open issues or contribute!

---

**Author:** Your Name — [yourwebsite.com](https://yourwebsite.com) — [GitHub](https://github.com/yourusername)
