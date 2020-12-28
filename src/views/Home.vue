<template>
  <div class="container-fluid">
    <div class="row p-4">
      <h1 class="display-1" style="font-weight: 500">The Void</h1>
    </div>
    <div class="row m-5 justify-content-center">
      <div class="col-xs-12 col-md-8">
        <h5 style="font-weight: 300">
          DFor writers, a random sentence can help them get their creative juices flowing. Since the topic of the sentence is completely unknown, it forces 
        </h5>
      </div>
    </div>
    <div class="row justify-content-center align-items-center" style="margin: 125px 0">
      <div class="col">
        <router-link to="/createpost" style="text-decoration: none">
          <button type="button" class="btn btn-dark btn-lg">Vent</button>
        </router-link>
      </div>
    </div>

    <div class="row m-2">
      <div class="col-xs-12 col-md-4" v-for="post in posts" :key="post.id">
        <div class="card text-white bg-dark mt-5" style="cursor: pointer" @click="toggleHightlight(post.title, post.content)">
          <div class="card-body">
            <h2 class="card-title mb-4">{{post.title}}</h2>
            <p class="card-text">{{post.content}}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showHighlight">
      <Highlight :title="highlightTitle" :content="highlightContent" @close="toggleHightlight"/>
    </div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import Highlight from '../components/Highlight'

export default {
  name: 'Home',
  components: { Highlight },

  data() {
    return {
      showHighlight: false,
      highlightTitle: "",
      highlightContent: ""
    }
  },
  methods: {
    toggleHightlight(title, content) {
      this.highlightTitle = title
      this.highlightContent = content

      this.showHighlight = !this.showHighlight
    }
  },

  // On Start
  setup() {
    const { posts } = getPosts()
    //// console.log(posts.value)

    return { posts }
  }
}
</script>

<style>
</style>
