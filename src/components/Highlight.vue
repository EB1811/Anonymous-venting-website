<template>
    <div class="backdrop" >
        <div class="row h-100 align-items-center justify-content-center" @click.self="closeHighlight" style="cursor: pointer">
            <div class="col-3" style="cursor: auto">
                <div class="card text-white bg-dark">
                    <div class="card-body">
                    <h2 class="card-title mb-4">{{title}}</h2>
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
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
</style>