<template>
    <div class="backdrop">
        <div class="row h-100 align-items-center justify-content-center" @click.self="closeHighlight" style="cursor: pointer; margin: 0">
            <div class="col-xs-12 col-md-3" style="cursor: auto">
                <div class="card text-white bg-dark">
                    <div class="card-body">
                    <h2 class="card-title mb-4" style="color: #95ff00">{{title}}</h2>
                    <p class="card-text">{{content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'content'],
    methods: {
        closeHighlight() {
            //* Emits can be caught by @emitname=""
            this.$emit('close')
        }
    }
}
</script>

<style>
.backdrop {
    margin: 0;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(20, 20, 20, 0.658);
    width: 100%;
    height: 100%;
}
</style>