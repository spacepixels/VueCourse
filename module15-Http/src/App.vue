<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input class="form-control" type="text" v-model="user.email">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="node">
                </div>
                <br>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click="getData">Get Data</button>
                <hr>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">Username: {{u.username }} - {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                resource: {},
                node: 'data'
            }
        },

        methods: {
            submit(){
                // The Firebase database only accepts data.json request
                // The then() function is a promise which is essentially getting an http response back after the request
//                this.$http.post('data.json', this.user)
//                    .then(response => {
//                        console.log(response);
//                    }, error => {
//                        console.log(error);
//                    });

                //Using a resource you can short hand POST requests - check out the vue-resource doco
                //this.resource.save({}, this.user);
                this.resource.saveAlt({}, this.user);
            },
            getData() {
//                this.$http.get('data.json')
//                    .then(response => {
//                        //This returns a Promise which we dont want to work with, by adding another then() function
//                        //the data will be extracted and can then be used.
//                        return response.json();
//                    })
//                    .then(data => {
//                        const resultArray = [];
//                        for(let key in data){
//                            resultArray.push(data[key]);
//                        }
//                        this.users = resultArray;
//                    });

                //This object replaces the value of node below
                this.resource.getData({node: this.node})
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        const resultArray = [];
                        for(let key in data){
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                    });

                //You could add extra objects like:
                //this.resource.getData({node: this.node, param2, param3});
            }
        },

        created() {
            //The arguments to $resource need to be in a specific order
            //The below says append data.json to the root URL
            //this.resource = this.$resource('data.json')

            //This allows you to setup multiple resources without needing to recode everything
            const customActions = {
                saveAlt: {method: 'POST', url: 'alternative.json'},
                getData: {method: 'GET'}
            };
            //Make the below dynamic by adding curly braces
            //this.resource = this.$resource('data.json', {}, customActions);

            //Updated dynamic example
            this.resource = this.$resource('{node}.json', {}, customActions);

            //this.resource = this.$resource('{node}/{param2}/{param3}.json', {}, customActions);
        }
    }
</script>

<style>
</style>
