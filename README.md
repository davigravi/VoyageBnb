
![alt text](frontend/public/images/favicon.jpg "Favicon")

# **VoyageBnb**

[VoyageBnb](https://voyage-bnb.herokuapp.com/), a full-stack application inspired by Airbnb, is an online platform for users to host and rent out spots for travel.

Visit its [wiki](https://github.com/davigravi/VoyageBnb/wiki) for more information.

## **Live Link**

[VoyageBnb](https://voyage-bnb.herokuapp.com/)

## **Installation**

#### **Prerequisites**

* Node.js

* NPM

* PostgresSQL

**Get Started**

* Clone the repository: `https://github.com/davigravi/VoyageBnb.git`

* `cd VoyageBnb` and run `npm install` to install dependencies

* Create a .env file based on the example with proper settings for your development environment

* Setup a PostgresSQL database, user, and password and check to see they match your .env file.


* Initialize the database:

    * `npx dotenv sequelize db:migrate`

    * `npx dotenv sequelize db:seed:all`

    * Open two separate terminals and run `npm start` in the frontend folder and backend folder to launch the server.

## **Features**



* Account Regristration and Sign-in

* Listings
    * Logged in users can view listings uploaded by others.
    * Logged in users can post listings via a form.
    * Logged in users can edit their listing information.
    * Logged in users can delete their listings.


* Bookings
    * Logged in users can view their personal bookings.
    * Logged in users can create a booking via a form.
    * Logged in users can delete their bookings.


## **Technologies**

* <img src="frontend/public/images/jslogo.png" width="40" height="40"> JavaScript
* <img src="frontend/public/images/cs logo.png" width="40" height="40"> CSS
* <img src="frontend/public/images/reacticon.png" width="40" height="40"> React
* <img src="frontend/public/images/reduxicon.png" width="40" height="40"> Redux
* <img src="frontend/public/images/express.png" width="40" height="40"> Express
* <img src="frontend/public/images/node-js-icon.jpg" width="40" height="40"> Node.js
* <img src="frontend/public/images/postgres icon.png" width="40" height="40"> PostgreSQL
* <img src="frontend/public/images/sequelize.png" width="40" height="40"> Sequelize

## **Documentation**


* [Feature List](https://github.com/davigravi/VoyageBnb/wiki/Database-Schema)
* [Database Schema](https://github.com/davigravi/VoyageBnb/wiki/Feature-List)
