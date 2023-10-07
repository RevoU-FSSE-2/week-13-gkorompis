# [WEEK 13 Basic CRUD MERN App](http://portal.mern.app.s3-website.ap-southeast-3.amazonaws.com/)

## Project Overview

This project serves a basic crud mern application that enables user to sign up account, sign in, adding, patching or deleting service request.

## Dependencies

The project relies on the following technologies and libraries:

### Client-side:

| Dependency      | Description                                 |
|-----------------|---------------------------------------------|
| React           | JavaScript library for building UIs.        |
| TypeScript      | A statically typed superset of JavaScript.   |

### Server-side:

- **API**: The API is developed using Express.js.
- **Database**: MongoDB is used as the database system.

## Deployment

The project is deployed as follows:

### Client-side:

- The client-side is deployed on [AWS S3 resource](http://portal.mern.app.s3-website.ap-southeast-3.amazonaws.com/).

### Server-side:

- The [server-side](https://github.com/RevoU-FSSE-2/week-11-gkorompis) is deployed using AWS services:
  - **API Gateway**: AWS API Gateway is used to manage and expose the API.
  - **AWS Lambda**: AWS Lambda functions are used to host the server-side code.

## Installation

To set up this project locally, follow these steps:

1. Clone this repository:

    ```bash
        git clone https://github.com/RevoU-FSSE-2/week-13-gkorompis.git
        cd week-13-gkorompis
    ```
2. Install required

    ```bash
        npm install
    ```
3. Starting Applicaiton

    ```bash
        npm start
    ```
