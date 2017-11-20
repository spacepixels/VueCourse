export const fruitMixin = {
    //Every page that uses this Mixin is given its own copy, so the data is isolated between instances
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
            filterText: ''
        }
    },
// Computed properties can be fine tuned and are more efficient and performant than Filters as they automatically manage refreshing the dom unlike Filters
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    },
    created() {
        console.log('Created');
    }
};
