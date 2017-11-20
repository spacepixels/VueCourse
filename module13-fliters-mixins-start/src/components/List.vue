<template>
    <div>
        <h1>Filters and Mixins</h1>
        <input v-model="filterText">
            <ul>
                <li v-for="fruit in filteredFruits">
                    {{ fruit }}
                </li>
            </ul>
        </input>
    </div>
</template>

<script>
    import { fruitMixin } from '../mixins/fruitMixin';

    export default {
        mixins: [fruitMixin], //Add an array with all the mixins you want.
        created() {
            //Notice how the component retains control and has the final say.
            console.log('Inside List created Hook.');
        }
    }
</script>

<style>

</style>
