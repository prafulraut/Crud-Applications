This Angular application manages user data, allowing users to perform CRUD operations (Create, Read, Update, Delete) on user information. 
It includes routing, user models, services, components, form validation, and basic navigation.

Installation
npm install -g @angular/cli@16.0.0

Clone this repository to your local machine:
https://github.com/prafulraut/Crud-Applications.git

Navigate into the project directory:
cd crud-Application

Install dependencies:
npm install

After completing the installation steps, you can run the application locally.
Use the Angular CLI to serve the application:
ng serve

Usage
User List
Scenario 1: Viewing User List

When the application loads, the user list is displayed.
Each user item displays the user's name, email, and role.
Buttons for editing and deleting users are available for each user item.
Scenario 2: Editing User Details

Click on the "Edit" button next to a user to edit their details.
The form allows editing of user information, and on successful submission, the changes are reflected in the user list.
Scenario 3: Deleting User

Click on the "Delete" button next to a user to delete them.

Add/Edit User
Scenario 4: Adding a New User

Click on the "Add User" button in the navigation bar.
Fill out the form with the required information (name, email, role).
Ensure all fields are filled out correctly and in the correct format.
Click the "Submit" button.
Upon successful submission, the new user is added to the user list.
Scenario 5: Editing User Details

Click on the "Edit" button next to a user.
Modify the user's details in the form.
Ensure all fields are filled out correctly and in the correct format.
Click the "Submit" button.
Upon successful submission, the changes are reflected in the user list.
Navigation
The navigation bar at the top of the page allows you to switch between the user list and the add/edit user form.
Technologies Used
Angular
Bootstrap (for styling)
