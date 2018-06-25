import Vue from "vue";

new Vue({
  el: "#app",
  data: {
    isActive: false
  },
  methods: {
    change() {
      this.isActive = !this.isActive;
    }
  }
});
