
![alt text](https://github.com/davigravi/RoomHawk/blob/main/frontend/public/images/favicon.png "Favicon")

# **VoyageBnb**

[RoomHawk](https://room-hawk.herokuapp.com/), a full-stack application inspired by Airbnb, is an online platform for users to host and rent out spots for travel.

Visit its [wiki](https://github.com/davigravi/RoomHawk/wiki) for more information.

## **Live Link**

[RoomHawk](https://room-hawk.herokuapp.com/)

## **Installation**

#### **Prerequisites**

* Node.js

* NPM

* PostgresSQL

**Get Started**

* Clone the repository: `https://github.com/davigravi/RoomHawk.git`

* Run `npm install` to install dependencies

* Create a Postgres database called `auth_db`

* Create a `.env` file in the root directory, following `.env.example` as a reference.

* Initialize the database:

    * `npx dotenv sequelize db:migrate`

    * `npx dotenv sequelize db:seed:all`

    * Run `npm start` to launch the server.

## **Features**



* Account Regristration and Sign-in

![alt text](https://github.com/davigravi/RoomHawk/blob/main/frontend/public/images/readme1.png "View Listings")

* Spots
    * Users can post listings via a form.
    * Users can view other people's listings.
    * Users can delete their listings.
    * Users can edit their listings.

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


* [Feature List](https://github.com/davigravi/RoomHawk/wiki/Feature-List)
* [Database Schema](https://github.com/davigravi/RoomHawk/wiki/Database-Schema)
