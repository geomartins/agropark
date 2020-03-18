<template>
   <app-master>

      <div slot='main_content'>

           <!--error-404 start-->
        <section class="error-404">
            <div class="ttm-big-icon">
                <i class="fa fa-thumbs-o-down"></i>
            </div>
            <header class="page-header"><h1 class="page-title">404 ERROR</h1></header>
            <div class="page-content"> <p>This page may have been moved or deleted. Be sure to check your spelling.</p></div>
            <router-link to='/' class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor" >Back To Home</router-link>
           
        </section><!--error-404 end-->
      </div>

   </app-master>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue"
import { seo } from "../Repositories/seo"

export default {
  name: "Error",
  mixins: [seo],
  components: {
    "app-master" : Master,

  },
  created(){
      this.seoMetaData('Page Not Found', '');
  }
};
</script>
