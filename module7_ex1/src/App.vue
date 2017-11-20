<template>
    <div>
        <header-cmp></header-cmp>
        <div class="container">
            <div class="row">
                <server-list-cmp></server-list-cmp>
                <server-details></server-details>
            </div>
            <hr>
            <div class="row">
                <footer-cmp></footer-cmp>
            </div>
        </div>

    </div>
</template>

<script>
    import ServerList from './components/Server/ServerList.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';
    //You can use Camel case in javascript but its a good idea to use dash's in the DOM because the DOM can handle dashs but not Camel case.
    //As per the example below Vuejs will work this out for you
    export default {
        components: {
            serverListCmp: ServerList,
            //'server-details-cmp': ServerDetails
            //You can also use ES6 (Not Vuejs) to transform ServerDetails (below) behind the scenes like this ServerDetails: ServerDetails - But ServerDetails may not be a unique name
            ServerDetails
        }
    }
</script>

