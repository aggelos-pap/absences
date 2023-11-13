# Absences

This is a content management system. It consists of:

- a front end system where the user can views info about the user absences
- an admin application system where the administrator can create, add, delete or view info about users, categories or lessons.
- an api that performs the crud operations.

## Getting Started

If you wish to run the project at the root of the folder api you should create a .env file with a variable named MONGODB_URL that contains your mongodb username, password and connecting URI.
A variable with the name PORT_NUMBER = <Your Port Number>.
JWT variable with your jwt secret.

Afterwards run the following command:

```bash
cd api
npm i && npm run start
cd ../
cd admin
npm i && run start
cd ../
cd client
npm i && run start
```

Next open [http://localhost:3000](http://localhost:3000) for the frontend or [http://localhost:3001](http://localhost:3001) for the admin functions.

## Libraries used

For the frontend:

- React framework
- Sass for styling
- jspdf for rendering pdf
- axios for http requests

For the backend:

- Express.JS for the api creation
- For security a combination of jsonwebtoken, cors, bcryptjs
- Axios for http requests
- MongoDB for the database

For the admin interface:

- React framework
- Sass for styling
- Recharts for charts
- materialui for icons and table rendering
