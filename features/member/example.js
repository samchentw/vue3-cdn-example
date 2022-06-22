
import example from '/components/example.mjs'
export default {
  template: `
    <div>
        <h1>example</h1>
        <p>{{showCount}}</p>
        <example></example>
    </div>
  `,
  components: { example },

  created() {
    // console.log(this.$store.state.config)
    console.log(this.$route)
  },
  computed: {
    showCount() {
      return this.$store.state.count;
    }
  },
};