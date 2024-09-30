# yoyo-be

**yoyo-be** is a NestJS application with a MongoDB database. It provides API endpoints to manage user-submitted posts, including retrieving, approving, and rejecting posts.

## Features

- **Retrieve Posts**: Get all user-submitted posts.
- **Approve/Reject Posts**: Endpoints for moderators to approve or reject posts.

## Project Structure

The app is structured into the following key features:
- **Feed Resource**: Handles API requests for posts and connects with MongoDB for storage and retrieval.
- **MongoDB Integration**: Stores posts and their approval status.
- **CRUD Operations**: Implemented for managing the feed (Create, Read, Update, Delete).

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Approach

### 1. Requirement Breakdown

The first step involved reading and understanding the project requirements. I then broke them down into smaller tasks to simplify the development process.

### 2. Project Initialization

I initialized the project using NestJS and set up the necessary environment and configuration files. Next, I installed all required packages, including:
- NestJS modules (for API management)
- Mongoose (for MongoDB integration)

### 3. Resource Generation

I generated a resource for the "Feed" feature using NestJS's CLI, which provided the scaffolding for the controller, service, and module. These handle the logic for retrieving, approving, and rejecting posts.

### 4. MongoDB Connection

I connected the app to a MongoDB instance using the Mongoose package, which allows for interaction with the database. This enabled full CRUD operations for the feed.

### 5. CRUD Implementation

Finally, I implemented the CRUD operations for managing the feed:
- **Create**: New posts can be submitted.
- **Read**: Posts can be retrieved.
- **Update**: Posts can be approved or rejected.
- **Delete**: Posts can be deleted if necessary.

## Built With

- [NestJS](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [npm](https://www.npmjs.com/)

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
```

This README explains the structure and functionality of your backend application, guiding developers on setup, usage, and your approach to building the project. Adjust the details as necessary for your specific setup.