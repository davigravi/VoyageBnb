import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { signup} from "../../store/session";
import './DemoUser.css';


function DemoUser(){

    const dispatch = useDispatch();

    const randomName = Math.random().toString(36).substring(2,8);
    const randomEmail = Math.random().toString(36).substring(2,8) + "@" + Math.random().toString(36).substring(2,8)+ ".com";

    // const [credential, setCredential] = useState(randomName);
    // const [password, setPassword] = useState("123456");
    // const [username, setUserName]= useState(randomName);
    // const [firstName, setFirstName] = useState("Hello");
    // const [lastName, setLastName] = useState("World");
    // const [email, setEmail] = useState(randomEmail);

    const credential = randomName;
    const password = "123456"
    const username = randomName;
    const firstName = "Hello"
    const lastName = "World";
    const email = randomEmail;

    const handleSubmit = async (e)=> {
        e.preventDefault();


        // setCredential(randomName);
        // setPassword('123456')
        // setUserName(randomName);
        // setFirstName("Hello");
        // setLastName("World");
        // setEmail(randomEmail)

        const user = {
            username,
            email,
            password,
            firstName,
            lastName,
        }


        // const loginUser = {
        //     credential,
        //     password,
        //     firstName,
        //     lastName,
        // }

        return dispatch(sessionActions.signup(user)).catch(
            async (res) => {
              const data = await res.json();
            }
          );

    }


    return (
        <button onClick={handleSubmit} className="demo-user" type="submit">Demo User</button>
    )
};


export default DemoUser;
