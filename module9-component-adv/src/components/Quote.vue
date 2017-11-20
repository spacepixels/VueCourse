<template>
    <div>
        <div>
            <slot name="title"></slot>
            <span style="color: #ccc"><slot name="subTitle">The Subtitle</slot></span>
        </div>
        <hr/>
        <div>
            <!-- default -->
            <slot></slot>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: auto;
        text-align: center;
    }
    h2 {
        color: red;
    }
    .title {
        font-style: italic;
    }
</style>
