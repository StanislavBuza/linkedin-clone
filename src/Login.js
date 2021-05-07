import React, {useState} from "react";
import "./Login.css"
import {auth} from "./firebase";
import {useDispatch} from "react-redux";
import {login} from "./features/userSlice";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if(!name) return alert("Please enter a full name");

        auth.createUserWithEmailAndPassword(email,password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic
                        }))
                    })
            })
            .catch( (error) => {
                alert(error)
            })
    };

    const loginToApp = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then( (userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL
                }))
        })
            .catch( error => alert(error))
    };

    return (
        <div className="login">
            <img src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg" alt=""/>
            <form>
                <input value={name}
                       onChange={(e) => setName(e.target.value)}
                       type="text"
                       placeholder="Full Name (required if registering)" />
                <input value={profilePic}
                       onChange={(e) => setProfilePic(e.target.value)}
                       type="text"
                       placeholder="Profile URL (optional)"/>
                <input value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       type="email"
                       placeholder="Email"/>
                <input value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       type="password"
                       placeholder="Password"/>
                <button type="submit" onClick={loginToApp}> Sign in</button>
            </form>
            <p>Not a Member?{" "}
              <span className="login_register" onClick={register}>
                  Register Now
              </span>
            </p>
        </div>
    )
}