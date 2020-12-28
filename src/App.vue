<template>
  <router-view/>
</template>

<script>
import firebase from "firebase/app";
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig'
const db = firebase.firestore();

//TODO End rant content with greater than ~100 words with a '...' in home page.
//TODO Host on firebase.

export default {
  
}
</script>

<style lang="scss">
@import './scss/customBootstrap.scss';

html, body {
  height: 100vh;
  margin: 0;
  background: #242424;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #242424;
}
</style>
