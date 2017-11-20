<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters and Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr/>
                <button @click="fruits.push('Berries')">Add New Item</button>
                <input v-model="filterText">
                    <ul>
                        <li v-for="fruit in filteredFruits">
                            {{ fruit }}
                        </li>
                    </ul>
                    <hr/>
                    <app-list></app-list>
                </input>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './components/List.vue';
    import { fruitMixin } from './mixins/fruitMixin';

    export default {
        data() {
            return {
                text: 'Hello There!',
                //fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
                //filterText: ''
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        // Computed properties can be fine tuned and are more efficient and performant than Filters as they automatically manage refreshing the dom unlike Filters
        //computed: {
        //    filteredFruits() {
        //        return this.fruits.filter((element) => {
        //            return element.match(this.filterText);
        //        });
        //    }
        //},
        components: {
            appList: List
        },
        mixins: [fruitMixin]
    }
</script>

<style>

</style>
