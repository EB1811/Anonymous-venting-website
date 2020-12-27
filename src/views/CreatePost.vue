<template>
  <div class="container-fluid vh-100">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-xs-12 col-sm-10 col-md-7 col-lg-6 col-xl-5 col-xxl-4" style="text-align: left">
        <form class="p-5" style="background-color: rgba(0, 0, 0, 0.2)">
          <div class="mb-3">
            <label class="form-label">Rant Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label class="form-label">Rant Text</label>
            <textarea class="form-control" rows="5"></textarea>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label">Allow comments</label>
          </div>
          <div style="text-align: center">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>