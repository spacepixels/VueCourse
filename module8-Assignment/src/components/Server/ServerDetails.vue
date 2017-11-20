<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently updated</p>
        <p>ServerId: {{ serverId }}</p>
        <p>Server Status: {{ serverStatus }}</p>
        <button @click="resetStatus">Reset Status</button>
    </div>
</template>

<script>
    import { eventBus } from '../../main.js';
    export default {
        props: {
            serverId: Number,
            serverStatus: String
        },
        methods: {
            resetStatus() {
                eventBus.resetStatus({id: this.serverId, status: this.serverStatus});
            }
        },
        created() {
            eventBus.$on('setServerDetailsId', (data) => {
                this.status = data;
            });
        }
    }
</script>

<style>

</style>
