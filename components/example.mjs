export default {
    name: 'example',
    template: `
    <div>
     <button v-on:click="addCount()">add count</button>
    </div>
    
    `,
    created() {
    },
    methods: {
        addCount(){
            this.$store.commit('addCount')
        }
    }
};