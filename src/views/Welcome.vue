<template>
   <app-master>

      <div slot='slider'>
        <app-slider></app-slider>
      </div>

   </app-master>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue"
import Slider from "@/components/Slider.vue"
import {seo} from "../Repositories/seo.js"

export default {
  name: "Welcome",
  mixins: [seo],
  components: {
    "app-master" : Master,
    "app-slider" : Slider,
  },
  
  created(){
      this.seoMetaData('Home', '');
  }

};
</script>
