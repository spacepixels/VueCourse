<template>
    <ul class="list-group">
        <li class="list-group-item answer-container"><h2 class="center-answer-text">Thats Correct!</h2></li>
        <li class="list-group-item answer-container"><div class="center"><button class="btn btn-primary" @click="">Next Question</button></div></li>
    </ul>
</template>

<script>

</script>

<style>
    .center {
        margin: auto;
        width: 20%;
    }
    .center-answer-text {
        text-align: center;
        color: green;
    }
    .answer-container{
        background-color: #e0f4dc;
    }
</style>