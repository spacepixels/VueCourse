<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <h1 v-myClickEvent:click="performAction">Directives Exercise</h1>
                <!--<button v-customOn="clicked" class="btn btn-primary">Click Me</button>-->
                <button v-customOn:click="clicked" class="btn btn-primary">Click Me</button>
                <hr/>
                <div style="width: 100px; height: 100px; background-color: deepskyblue;"
                    v-customOn:entered="mouseEntered"
                    v-customOn:left="mouseLeft"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'myClickEvent': {
                bind(el, binding){
                    el.addEventListener(binding.arg, binding.value);
                }
            },
            customOn: {
                bind(el, binding){
//                    el.onclick = function (){
//                        binding.value();
//                    }
                    const type = binding.arg;
                    const Fn = binding.value;
                    el.addEventListener(type, Fn);
                }
            }
        },
        methods: {
            performAction() {
                alert('Heading was clicked!');
            },
            clicked() {
                alert('I was clicked!');
            },
            mouseEntered() {
                console.log('Mouse Entered!');
            },
            mouseLeft() {
                console.log('Mouse Left!');
            }
        }
    }
</script>

<style>
    h1 {
        cursor: pointer;
    }
</style>
