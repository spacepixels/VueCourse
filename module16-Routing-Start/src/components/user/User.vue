<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <!--<p>Loaded Id: {{ id }}</p>-->
        <button class="btn btn-primary" @click="navigateToHome">Go To Home</button>
        <hr>
        <router-view></router-view>
    </div>

</template>

<script>

    export default {
//        data() {
//            return {
//                id: this.$route.params.id
//            }
//        },
//
//        watch: {
//            //The id in the path may change but because this is a Vue component the component doesnt know the id in the path
//            //might have changed. Therefore we set up a watcher to watch the path for a different Id
//            //Why might you not want to use a computed property?? Because you can add more code to do stuff.
//            '$route'(to, from){
//                this.id = to.params.id;
//            }
//        },

        methods: {
            navigateToHome() {
               this.$router.push({ name: 'home' });
            }
        }
    }

</script>