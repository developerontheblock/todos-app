# todos App React Js


Why didn't I upload ***node_modules***. Click [here](https://i.redd.it/tfugj4n3l6ez.png) to find out.

## Start commands

```bash
npm install
npm start # starts project
npm run json-server # starts server
```

## Requirements

ReactJS application that has the following functionality:

1. Authentication:
- registration in which the user by default has no administrator rights
- a user can log in with a username and password
- users may or may not be administrators
2. User management
- administrators can add, edit, delete and view users in the system, as well as give administrator rights to existing users
- when deleting a user, all his tasks must also be deleted (Cascade Deletion)
3.Task management
- each user can create, delete, edit and view tasks
- the task consists of: title; description; assessment (time in hours);
- status of the task (completed, pending execution).
- the editing / deleting of the tasks is done as follows
- the administrator can delete / change all tasks, and the user - only those he has created
4. The application to be realized with the following details
- LocalStorage as a database
- React Routing for navigation between components

## License
[Docs](https://docs.google.com/document/d/1jpIJo9LBsPsH5L2QzlfYQ_yry_EU3Nrn6l05ZR4jV_E/edit)
