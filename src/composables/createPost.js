import firebase from "firebase/app";
import 'firebase/firestore';

const createPost = (title, content) => {
    const db = firebase.firestore();

    db.collection("Posts")
    .add({title: title, content: content})
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
       //// console.error("Error writing document: ", error);
       console.log("DEMO website: rants are not being added to the database");
    })
}

export default createPost;