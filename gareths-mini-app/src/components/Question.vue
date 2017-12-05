<template>
    <div class="ques-container">
        <div class="ques-text-container">
            <h4 class="center-question-text">Whats {{firstNumber}} + {{secondNumber}}</h4>
        </div>
        <div class="button-container">
            <div class="left-col"><button class="btn btn-primary" @click="btn1(answers[0])">{{ answers[0] }}</button></div>
            <div class="right-col"><button class="btn btn-primary" @click="btn2(answers[1])">{{ answers[1] }}</button></div>
        </div>
        <div class="button-container">
            <div class="left-col"><button class="btn btn-primary" @click="btn3(answers[2])">{{ answers[2] }}</button></div>
            <div class="right-col"><button class="btn btn-primary" @click="btn4(answers[3])">{{ answers[3] }}</button></div>
        </div>
    </div>
</template>

<script>

    import {eventBus} from '../main';

    export default {
        data() {
            return {
                targetNumber: 0,
                answers: [],
                min: 0,
                max: 100,
                firstNumber: 0,
                secondNumber: 0,
                result: 0
            }
        },
        methods: {
            btn1(val) {
                this.displayResult(val);
            },
            btn2(val) {
                this.displayResult(val);
            },
            btn3(val) {
                this.displayResult(val);
            },
            btn4(val) {
                this.displayResult(val);
            },
            setNextQuestionValues() {
                this.firstNumber = this.generateRandomNumber();
                this.secondNumber = this.generateRandomNumber();
                this.result = this.firstNumber + this.secondNumber;
                console.log(this.result);

            },
            generateRandomNumber(){
                return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
            },
            fillButtonText() {
                this.max = 3;
                let pos = this.generateRandomNumber();
                this.max = 100;
                this.answers = [];
                for(let i = 0; i < 4; i++){
                   this.answers.push(this.generateRandomNumber());
                }
                this.answers[pos] = this.result;
            },
            displayResult(val){
                if(val == this.result){
                    eventBus.setComponent('correctAnswerComponent');
                }
                else {
                    alert("That answer is incorrect, try again!");
                }
            }
        },
        created() {
            if(this.firstNumber === 0){
                this.setNextQuestionValues();
                this.fillButtonText();
            }
            eventBus.$on('setQuestionValues', () => {
                this.setNextQuestionValues();
                this.fillButtonText();
            });
        }
    }


</script>

<style>

    .center-question-text {
        text-align: center;
        font-weight: bold;
        width: 100%
    }

    .ques-container{
        display: block;
        border: 1px solid lightgray;
    }

    .center-question-text{
        border-bottom: 1px solid lightgray;
        padding: 10px 0 15px 0;
    }

    .button-container {
        padding: 10px 25px 50px 25px;

    }

    .left-col{
        float: left;
    }

    .right-col{
        float: right;

    }

</style>