# Tech Blog

## Description
Tech Blog is a CMS-style blog site where developers can publish articles, blog posts, and engage with other developers' content by commenting on posts. The application follows the Model-View-Controller (MVC) paradigm and utilizes technologies such as Handlebars.js for templating, Sequelize as the ORM for MySQL database interaction, and express-session for authentication.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Contributing](#contributing)



## Installation
To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies by running 
    ```bash
    npm install
    ```
3. Create a `.env` file based on the provided `.env.example` file and configure your environment variables.
4. Set up your MySQL database and update the connection details in the `.env` file.
6. Start the application by running `npm start`.

## Usage
Once the application is running, you can access it through your web browser. Users can sign up, log in, create, edit, or delete blog posts, comment on posts, and interact with other users' content.

## Technologies Used
- **bcrypt** : A library to help hash passwords securely.
- **Handlebars.js**
- **dotenv**.
- **express.js**
- **express-handlebars**
- **express-session** 
- **moment**: for parsing, validating, manipulating, and formatting dates.
- **MySQL**
- **sequelize**

## File Structure
The project follows the MVC (Model-View-Controller) design pattern. Below is an overview of the file structure:

- `config/`: Contains configuration files such as database configuration.
- `models/`: Contains Sequelize models for interacting with the database.
- `public/`: Contains static assets such as stylesheets and client-side JavaScript files.
- `controllers/`: Contains controller logic for handling HTTP requests and responses.
  - `homeRoutes.js`: Handles routes related to the homepage.
  - `dashboardRoutes.js`: Handles routes related to the user dashboard.
  - `postRoutes.js`: Handles routes related to blog posts.
  - `commentRoutes.js`: Handles routes related to comments on blog posts.
  - `userRoutes.js`: Handles routes related to user authentication and management.
- `views/`: Contains Handlebars.js templates for rendering HTML pages.
- `utils/`: Contains utility functions used throughout the application.
- `server.js`: Entry point of the application.

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please fork the repository, create a new branch, make your changes, and submit a pull request.

## Walkthrough Video


## ScreenShots
![Dashboard](<assets/Screenshot 2024-02-15 140229.png>)

## Heroku Url
[Deployed Link](https://tech-bog-2324057bbada.herokuapp.com/) Enjoy!!!