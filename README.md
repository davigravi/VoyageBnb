
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

* Run `npm install` to install dependencies

* Create a Postgres database called `auth_db`

* Create a `.env` file in the root directory, following `.env.example` as a reference.

* Initialize the database:

    * `npx dotenv sequelize db:migrate`

    * `npx dotenv sequelize db:seed:all`

    * Run `npm start` to launch the server.

## **Features**



* Account Regristration and Sign-in

* Listings
    * Logged in users can view listings uploaded by others.
    * Logged in users can post listings via a form.
    * Logged in users can edit their listing information.
    * Logged in users can delete their listings.
    
![alt text](https://github.com/davigravi/RoomHawk/blob/main/frontend/public/images/readme1.png "View Listings")


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
