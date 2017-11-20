<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="index in servers">
                 <app-server :id="index.id" :status="index.status"></app-server>
            </li>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';
    import { eventBus } from '../../main';
    //import ServerDetails from './ServerDetails.vue';
    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'Normal'},
                    { id: 2, status: 'Critical'},
                    { id: 3, status: 'Unknown'},
                    { id: 4, status: 'Normal'}
                ]
            };
        },
        components: {
            appServer: Server
        },
        created() {
            eventBus.$on('resetStatus', (data) => {
                this.servers[data.id -1].status =  'Normal';
            });
        }
    }

</script>

<style>

</style>
