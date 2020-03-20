<template>
   <app-master>

       <div slot='breadcrumb'>
         <app-breadcrumb>
             <div class="title-box ttm-textcolor-white">
                `<div class="page-title-heading">
                    <h1 class="title">Partners</h1>
                     <h3 class="subtitle">Our Partners</h3>
                </div><!-- /.page-title-captions -->
                <div class="breadcrumb-wrapper">
                    <div class="container">
                        <div class="breadcrumb-wrapper-inner">
                            <span>
                                <router-link class="home" title='Go to AgroPark' to='/'><i class="themifyicon ti-home"></i>&nbsp;&nbsp;Home </router-link>
            
                            </span>
                            <span class="ttm-bread-sep">&nbsp; | &nbsp;</span>
                            <span>Partners</span>
                        </div>
                    </div>
                </div>
            </div>
         </app-breadcrumb>
       </div>
        



      <div slot='main_content'>

        
         <app-partner></app-partner>
        
      </div>

   </app-master>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue"
import Breadcrumb from "@/components/Breadcrumb.vue"
import { seo } from "../Repositories/seo"
import Partner from "@/components/Partner.vue"

export default {
  name: "Partners",
  mixins: [seo],
  components: {
    "app-master" : Master,
    "app-breadcrumb" : Breadcrumb,
    "app-partner" : Partner,
  },
  created(){
      this.seoMetaData('Our Partners', '');
  }

};
</script>
