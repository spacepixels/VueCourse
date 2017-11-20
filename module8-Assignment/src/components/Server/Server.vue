<template>
    <div class="clickable-container" @click="setServerDetails">Server #{{ id }} {{ status }}</div>
</template>

<script>
    import { eventBus } from '../../main.js';
    export default {
       props: {
           id: Number,
           status: String
       },
       methods: {
           setServerDetails() {
               eventBus.setServerDetails({id: this.id, status: this.status});
           }
       }
    }
</script>


<style>
    .clickable-container {
        cursor: pointer;
    }
</style>
