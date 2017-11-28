<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <button class="btn btn-primary" @click="show = !show">Show Alert!</button>
                <br><br>
                <select v-model="alertAnimation" class="form-control">
                    <option value="Fade">Fade</option>
                    <option value="Slide">Slide</option>
                </select>
                <br><br>
                <transition :name="alertAnimation">
                    <!-- You can only transition one element at a time, otherwise use transition-group -->
                    <div class="alert alert-info" v-show="show">This is some info</div>
                </transition>

                <br><br>
                <transition name="slide" type="animation">
                    <!-- You can only transition one element at a time, otherwise use transition-group -->
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>

                <br><br>
                <transition name="fade" appear>
                    <!-- You can only transition one element at a time, otherwise use transition-group -->
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>

                <br><br>
                <transition
                        enter-active-class="animated bounce"
                        leave-active-class="animated shake"
                >
                    <!-- You can only transition one element at a time, otherwise use transition-group -->
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>

                <br><br>
                <transition name="fade" mode="out-in">
                    <!-- You can only transition one element at a time, otherwise use transition-group -->
                    <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some warning</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br><br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false">
                    <!-- css=false tells Vue to not look for css classes because we will use javascript for animations -->
                    <div style="width: 300px; height:100px; background-color: lightgreen" v-if="load"></div>
                </transition>
                <br>
                <button class="btn btn-primary" @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">Toggle Components</button>
                <hr>

                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>

                <!-- transition is not rendered to the DOM
                     transition-group does render a new html tag, which by default is a <span>,
                     you can overwrite this setting by <transition-group tag="TAG">
                 -->

                <hr>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br><br>
                <ul class="list-group">
                    <transition-group name="slide">

                        <!-- Vuejs needs to know which element to animate which can only be done by providing a unique key -->

                        <li class="list-group-item" v-for="(number, index) in numbers" @click="removeItem(index)" style="cursor: pointer" :key="number">{{ number }}</li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';

    export default {
        data() {
            return {
                show: false,
                load: true,
                alertAnimation: 'Fade',
                elementWidth: 100,
                selectedComponent: 'app-success-alert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            beforeEnter(element){
                console.log("beforeEnter");
                this.elementWidth = 100;
                element.style.width = this.elementWidth + 'px';
            },
            enter(element, done){
                console.log("Enter: This is where the animation happens");
                let round = 1;
                const interval = setInterval(() => {
                    element.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if(round > 20){
                        clearInterval(interval);
                        done();
                    }
                }, 20);
                //done(); //We must tell Vuejs when the animation has finished
            },
            afterEnter(element) {
                console.log("afterEnter");
            },
            enterCancelled(element){
                console.log("enterCancelled");
            },
            beforeLeave(element){
                console.log("beforeLeave");
                this.elementWidth = 300;
                element.style.width =  this.elementWidth + 'px';
            },
            leave(element, done){
                console.log("leave");
                let round = 1;
                const interval = setInterval(() => {
                    element.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if(round > 20){
                        clearInterval(interval);
                        done();
                    }
                }, 20);
            },
            afterLeave(element){
                console.log("afterLeave");
            },
            leaveCancelled(element) {
                console.log("leaveCancelled");
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1); //Zero means dont remove an element
            },
            removeItem(index) {
                this.numbers.splice(index, 1); // One means remove an element
            }
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        }
    }
</script>

<style>
    .fade-enter {
        /* This is the initial state which is shown for just one key frame */
        opacity: 0;
    }
    .fade-enter-active{
        /* This is where the animation occurs */
        transition: opacity 1s;
    }
    .fade-leave {

    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }
    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    .slide-leave {

    }
    .slide-leave-active{
        /* If you use animation and transition then Vue will use the longer time span of the two. To tell Vue which time to use add type as per above */
        animation: slide-out 1s ease-out forwards;
        transition: opacity 3s;
        opacity: 0;
        position: absolute;/* This allows other elements to move above while an element is still being animated. Withou this the animation will be abrupt when we remove an item. */
    }

    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }

</style>
