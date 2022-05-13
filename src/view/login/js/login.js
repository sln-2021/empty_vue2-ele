export default {
  name: "login",
  data() {
    return {
      form: {
        name: "admin",
        password: "admin"
      }
    };
  },
  methods: {
    login() {
      console.log("submit!");
      this.$router.push({
        name: "game"
      });
    }
  }
};
