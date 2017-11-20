<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn">Reset Name2</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
        //props allows you to set properties from outside this instance
        //From the outside component you need to parse it using the colon or v-bind directive
        //props: ['name'], One way to parse the outside value
        //A better way is to validate the properties as per below:
        props: {
            name: String,
            //Or to allow multiple types use:
            //name: [String, Array]
            resetFn: Function, //This is a way to use a call back as opposed to using an event,
            userAge: Number
        },
        //Or on step further
//        props: {
//            name: {
//                type: String,
//                required: true
                  //You can also provide a default value like so.
                  //default: YourValue
        //If you set an Object as default it would look like
        //type: object,
        //default: function() { And now provide your object i.e. name: 'Gareth'}
//            }
//        },
        methods: {
            switchName() {
                return this.name.split("").reverse().join("");
            },
            resetName() {
                this.name = 'Gareth'; //This only resets the value in the child component
                //Use a special event to notify the parent component to change its value
                this.$emit('nameWasReset', this.name); //define the Name of the event and provide the data.
                //then tell the parent component to listen for the event using the v-on or @nameWasReset directive
            },
            //Create a life cycle hook to listen for the event when setting up the components
            created() {
                console.log('fired');
                eventBus.$on('ageWasEdited', (age) => {
                    console.log(age);
                    this.userAge = age;
                });
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
