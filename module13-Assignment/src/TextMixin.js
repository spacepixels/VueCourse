export const TextMixin = {
    data() {
        return {
            initialText: 'Exercise 4'
        };
    },
    computed: {
        getStringMixinLength(){
            return this.initialText + ' (' + this.initialText.length + ')';
        }
    }
};