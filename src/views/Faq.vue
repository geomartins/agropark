<template>
   <app-master>

       <div slot='breadcrumb'>
         <app-breadcrumb>
             <div class="title-box ttm-textcolor-white">
                `<div class="page-title-heading">
                    <h1 class="title">Faq</h1>
                </div><!-- /.page-title-captions -->
                <div class="breadcrumb-wrapper">
                    <div class="container">
                        <div class="breadcrumb-wrapper-inner">
                            <span>
                                <router-link class="home" title='Go to AgroPark' to='/'><i class="themifyicon ti-home"></i>&nbsp;&nbsp;Home </router-link>
            
                            </span>
                            <span class="ttm-bread-sep">&nbsp; | &nbsp;</span>
                            <span>Faq</span>
                        </div>
                    </div>
                </div>
            </div>
         </app-breadcrumb>
       </div>
        



      <div slot='main_content'>

        
        <section class="ttm-row break-991-colum ttm-bgcolor-white clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="mb-35">
                            <h2 class="ttm-textcolor-skincolor ">Frequently Asked Questions</h2>
                            <p>Below you’ll find answers to some of the most frequently asked questions at Tectxon. We are constantly adding most asked question to this page so if you have a question and don’t see your answer, don’t hesitate to email us at <a href="#">info@example.com</a></p>
                        </div>
                        <!-- wrap-acadion -->
                        <div class="wrap-acadion">
                            <div class="accordion">
                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey">
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" >
                                            <span class="ttm-title-text">What are the clinic hours?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content" >
                                        <p>Patients may schedule appointment by visiting the clinic between 9:00 AM and 6:00 PM Monday – Friday or by calling (123) 456-7899. The Emergency cases is available up to 8 PM.</p>
                                    </div>
                                </div><!-- toggle end -->



                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">What if I have to cancel my appointment?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Sometimes the unexpected happens and you need to cancel your appointment make sure you call us or email us 1 day ago before cancellation.</p>
                                    </div>
                                </div><!-- toggle end -->


                             
                                



                            </div>                   
                        </div><!-- wrap-acadion end-->
                    </div>
                </div><!-- row end -->
            </div>
        </section>

        
      </div>

   </app-master>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue"
import Breadcrumb from "@/components/Breadcrumb.vue"
import { seo } from "../Repositories/seo"

export default {
  name: "Faq",
  mixins: [seo],
  components: {
    "app-master" : Master,
    "app-breadcrumb" : Breadcrumb

  },
  methods:{
      accordion(event){
          let parentElement = event.target.parentElement.parentElement;
          if(!Array.from(parentElement.classList).includes("ttm-style-classic")){
              parentElement = parentElement.parentElement;
          }

          let parentElementClassList = Array.from(parentElement.classList);
          let childElement = parentElement.childNodes[1];
          let childElementClassList = Array.from(childElement.classList);


          
          if(parentElementClassList.includes('active')){
              parentElement.classList.remove("active")
          }else{
               parentElement.classList.add("active")
          }


          if(childElementClassList.includes('show')){
             childElement.classList.remove("show")
          }else{
              childElement.classList.add("show")
          }




        //   console.log(parentElementClassList)
      }
  },
  created(){
      this.seoMetaData('Frequently Asked Questions', '');
  }

};
</script>


<style scoped>
  .show{
      display: block;
  }
</style>