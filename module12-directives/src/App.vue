<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built in Directives</h1>
                <!-- directives start with a v- to note that this has special meaning -->
                <P v-text="'Some text'"></p>
                <P v-html="'<strong>Some text - could get cross site scripting without sanitation</strong>'"></p>
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <!-- directives start with a v- to note that this has special meaning -->
                <p v-highlight:background.delayed="'red'">Color this</p>
                <!-- Note: you can change modifiers like this: delay.another.modifier etc -->
                <p v-local-directive:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color this too</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-directive': {
                bind(el, binding, vnode) {
                    var delay = 0;
                    if(binding.modifiers['delayed']){
                        delay = 3000;
                    }
                    if(binding.modifiers['blink'])
                    {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                if(binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor;
                                }
                                else {
                                    el.style.color = currentColor;
                                }
                               }, binding.value.delay);
                            }, delay);
                    }
                    else {
                        setTimeout(() => {
                            if(binding.arg == 'background') {
                                el.style.backgroundColor = binding.value;
                            }
                            else {
                                el.style.color = binding.value;
                            }
                           },delay);
                    }
                }
            }
        }
    }
</script>

<style>

</style>
