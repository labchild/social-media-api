# Social Network API
![license](https://img.shields.io/github/license/labchild/social-media-api) ![top language](https://img.shields.io/github/languages/top/labchild/social-media-api) ![express version](https://img.shields.io/github/package-json/dependency-version/labchild/social-media-api/express)

An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

### Table of Contents
* [Description](#description)
    * [Built With](#built-with)
* [Installation](#installation)
* [Usage](#usage)
    * [Uer Routes](#user-routes)
    * [Friend Routes](#friend-routes)
    * [Thought Routes](#thought-routes)
    * [Reaction Routes](#reaction-routes)
* [License](#license)
* [Tests](#tests)
* [Questions & Contact](#questions-&-contact)
* [Acknowledgements ❣](#acknowledgements-❣)

## Description
Social Media API is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. It uses an Express and a NoSQL database (MongoDB). Data is transmitted as JSON. It supplies GET routes for users and thoughts (text-based posts) and POST, PUT, and DELETE routes for users, users' friends lists, thoughts, and reactions (replies to thoughts). Usernames and email addresses must be unique.

### Built With
This project uses the following resources:
* [Mongoose](https://www.npmjs.com/package/sequelize)
* [Express](https://expressjs.com/)

## Installation
You must have [MongoDB](https://www.mongodb.com/) and [Node.js](https://nodejs.org/en/) to run this application. Your MongoDB server must be running in order for the application to work.

Once you download or clone this repository to your machine, navigate to the root folder of the project from your CLI. To install, run the command ```npm i```.

## Usage
Watch [this video]() for a complete walkthrough of this application, or continue with the steps below.

To start the application, navigate to the root folder of the project from your CLI and run the command ```npm start``` (or ```node server```). If the connection was made, you will see the following output in your CLI.

![serverpreview]()

Once the application is running, open your API test platform of choice. The following examples show the routes tested with [Insomnia](https://insomnia.rest/).

### User Routes
These routes handle requests to /api/users and manipulate users in the database. Post routes take this format, both fields are required and unique:
```
{
    "username":"<your_username>",
    "email":"<your_email>"
}
```

### Friend Routes
These routes hadle requests to /api/users/:id/friends and manipulate a user's friend list in the database.

### Thought Routes
These routes handle requests to /api/thoughts and manipulate thoughts (user posts) in the database. Post routes take this format:
```
{
	"thoughtText":"<your_thought>",
	"username":"<your_username>",
	"userId":"<your_userId>"
}
```

### Reaction Routes
These routes handle requests to /api/thoughts/:id/reactions and manipulate user reactions to thoughts (comments/replies) in the database.

## License ![license](https://img.shields.io/github/license/labchild/social-media-api)
This is an open source project and falls under the MIT license.

## Tests
This project includes tests on custom helper functions using [Jest](https://www.npmjs.com/package/jest) testing framework.

<img src="/public/images/test-preview.png" alt="test suite preview" width="80%">

## Questions & Contact
Written and deployed by Lelah Bates Childs.

You can find me on GitHub [@labchild](https://github.com/labchild) or [email me](mailto:labchilds@gmail.com). If you have any questions about this project, please reach out.

If you encounter any bugs or other problems, [submit an issue](https://github.com/labchild/social-media-api/issues).

### Want to Help?
Do you see something I missed or a more succint and effective way this code can be written? Great! Please reach out and let me know how I can improve. Thanks in advance for your tips, tricks, and pointers!

## Acknowledgemnts
Thank you to my bootcamp instructional team and cohort, for helping me along this journey to become a developer!