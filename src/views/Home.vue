<template>
  <div class="container-fluid">
    <div class="row p-4">
      <h1 class="display-1" style="font-weight: 500; color: #95ff00; margin-top: 100px">The Void</h1>
    </div>
    <div class="row m-2 justify-content-center">
      <div class="col-xs-12 col-md-8">
        <h5 style="font-weight: 300">
          Ever feel like screaming into the void?
        </h5>
      </div>
    </div>
    <div class="row justify-content-center align-items-center" style="margin: 150px 0">
      <div class="col">
        <router-link to="/createpost" style="text-decoration: none">
          <button type="button" class="btn btn-dark btn-lg" style="color: #000">Vent</button>
        </router-link>
      </div>
    </div>

    <div class="row" style="margin-top: 15%; border-top: 3px solid #95ff00">
      <div class="col-xs-12 col-sm-6 col-md-4 col-xxl-3 mt-4" v-for="post in posts" :key="post.id">
        <div class="card text-white bg-dark h-100" style="cursor: pointer;" @click="toggleHightlight(post.title, post.content)">
          <div class="card-body">
            <h2 class="card-title mb-4" style="color: #95ff00">{{post.title}}</h2>
            <p class="card-text p-3" style="border-top: 2px solid #95ff00">{{post.content}}</p>
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
