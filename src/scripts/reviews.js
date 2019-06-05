import Vue from "vue";
import axios from "axios";

Vue.component("reviews-component", {
  template: "#reviews",
  data() {
    return {
      reviews: [],
      strafe: 0
    };
  },
  methods: {
    arrWithRequiredImages(array) {
      return array.map(item => {
        const requredPic = require(`../images/content/${item["author-pic"]}`);
        item["author-pic"] = requredPic;

        return item;
      });
    },
    slide(derection) {
      const slider = this.$refs["reviews-slider"];
      const elemWidth = slider.getBoundingClientRect().width;
      const oneItemWidth = slider.firstElementChild.getBoundingClientRect()
        .width;
      const itemInView = 2;

      const availableWidth =
        oneItemWidth * (slider.children.length - itemInView);

      switch (derection) {
        case "next":
          if (Math.abs(this.strafe) <= availableWidth) {
            this.strafe += elemWidth;
          }
          break;

        case "prev":
          if (Math.abs(this.strafe) > 0) {
            this.strafe -= elemWidth;
          }
          break;
      }

      slider.style.transform = `translateX(-${this.strafe}px)`;
    }
  },
  created() {
    axios.get("https://webdev-api.loftschool.com/reviews/122").then(response => {
      this.reviews = response.data;
    });
  }
});

const vue = new Vue();

vue.$mount("reviews-component");