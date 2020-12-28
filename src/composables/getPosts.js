import firebase from "firebase/app";
import 'firebase/firestore';

import { ref } from 'vue';

const getPosts = () => {
    const db = firebase.firestore();
    const posts = ref([])

    db.collection("Posts")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if(posts.value.length < 100) {
                posts.value.push({
                    id: doc.id,
                    title: doc.data().title,
                    content: doc.data().content,
                });
            }
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    
    return { posts }
}

export default getPosts;