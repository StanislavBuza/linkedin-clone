import React, {useEffect, useState} from "react";
import "./Feed.css"
import {Create, Image, Subscriptions, EventNote, CalendarViewDay} from "@material-ui/icons";
import InputOption from "./InputOption";
import Post from "./Post";
import {db} from "./firebase";
import firebase from "firebase";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import FlipMove from "react-flip-move";

export default function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapShot) =>
            setPosts(snapShot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);

    const sendPost = (event) => {
        event.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoURL || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput("");
    };

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <Create/>
                    <form>
                        <input type="text" value={input} onChange={(event) => setInput(event.target.value)}/>
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption title="Photo" Icon={Image} color="#70B5F9"/>
                    <InputOption title="Video" Icon={Subscriptions} color="#E7A33E"/>
                    <InputOption title="Event" Icon={EventNote} color="#C0CBCD"/>
                    <InputOption title="Write Article" Icon={CalendarViewDay} color="#7FC15E"/>
                </div>
            </div>
            <FlipMove>
                {posts.map(({id, data :{name, description, message, photoUrl}}) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
        </div>
    )

}