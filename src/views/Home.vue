<template>
  <div class="container-fluid vh-100">
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
    <div class="row justify-content-center align-items-center h-25">
      <div class="col">
        <router-link to="/createpost" style="text-decoration: none">
          <button type="button" class="btn btn-dark btn-lg">Vent</button>
        </router-link>
      </div>
    </div>

    <div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
