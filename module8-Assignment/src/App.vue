<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <app-server-details :serverStatus="serverStatus" :serverId="serverId"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';
    import { eventBus } from './main';

    export default {
        data: function() {
            return {
                serverId: 0,
                serverStatus: ''
            };
        },
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        },
        created() {
            eventBus.$on('setServerDetails', (data) => {
                this.serverId = data.id;
                this.serverStatus = data.status;
            });
            eventBus.$on('resetStatus', (data) => {
                this.serverStatus =  'Normal';
            });
        }
    }
</script>

<style>

</style>
