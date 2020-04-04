<template>
   <!--page start-->
    <div class="page">

    

        <app-header></app-header>
        <slot name='breadcrumb'></slot>
       
        <slot name='slider'></slot>



        
    <!--site-main start-->
    <div class="site-main">
        <slot name='main_content'></slot>
    </div><!--site-main end-->


     <!--site-main-sigle start-->
    <div class="site-main single">
        <slot name='main_content_single'></slot>
    </div><!--site-main end-->

    <app-footer></app-footer>
    <app-back-to-top></app-back-to-top>

</div><!-- page end -->

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import BackToTop from "@/components/BackToTop"

export default {
  name: "home",
  components: {
    "HelloWorld" : HelloWorld,
    "app-header" : Header,
    "app-footer" : Footer,
    "app-back-to-top": BackToTop,
  }
};
</script>
