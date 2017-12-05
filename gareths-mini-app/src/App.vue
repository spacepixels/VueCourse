<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 class="text-center">The Super Quiz</h1>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <transition name="flip" mode="out-in">
                <component :is="isCorrectAnswer"></component>
            </transition>

            </div>
        </div>
    </div>
</template>

<script>
    import Question from './components/Question.vue';
    import Answer from './components/Answer.vue';
    import { eventBus } from './main';

    export default {

        data() {
            return {
                isCorrectAnswer: 'app-question'
            }
        },

        methods: {

        },

        created() {
            eventBus.$on('setComponent', (data) => {
                console.log(data);
                if(data == 'correctAnswerComponent'){
                    console.log('A');
                    this.isCorrectAnswer = 'app-answer';
                }
                else {
                    console.log('B');
                    this.isCorrectAnswer = 'app-question';
                }
            });
        },

        components: {
            appQuestion: Question,
            appAnswer: Answer
        }
    }


</script>

<style>
    .flip-enter{

    }
    .flip-enter-active{
        animation: flip-in 0.55s ease-out forwards;
    }
    .flip-leave{

    }
    .flip-leave-active{
        animation: flip-out 0.55s ease-out forwards;
    }

    @keyframes flip-out{
        from{
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }

    @keyframes flip-in{
        from{
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }
</style>