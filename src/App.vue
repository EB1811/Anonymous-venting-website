<template>
  <router-view/>
</template>

<script>
import firebase from "firebase/app";
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig'
const db = firebase.firestore();

import 'bootstrap/dist/css/bootstrap.css'

export default {
  
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: rgb(46,46,46);
  background: linear-gradient(120deg, rgba(46,46,46,1) 0%, rgba(7,9,23,1) 100%);
}
</style>
