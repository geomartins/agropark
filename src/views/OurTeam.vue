<template>
   <app-master>

       <div slot='breadcrumb'>
         <app-breadcrumb>
             <div class="title-box ttm-textcolor-white">
                <div class="page-title-heading">
                    <h1 class="title">Our Team</h1>
                </div><!-- /.page-title-captions -->
                <div class="breadcrumb-wrapper">
                    <div class="container">
                        <div class="breadcrumb-wrapper-inner">
                            <span>
                                <router-link class="home" title='Go to AgroPark' to='/'><i class="themifyicon ti-home"></i>&nbsp;&nbsp;Home </router-link>
            
                            </span>
                            <span class="ttm-bread-sep">&nbsp; | &nbsp;</span>
                            <span>Our Team</span>
                        </div>
                    </div>
                </div>
            </div>
         </app-breadcrumb>
       </div>


        



      <div slot='main_content'>

        
       <section class="ttm-row pb-70 res-991-pb-20 clearfix">
            <div class="container">
                <!-- row -->
                <div class="row">
                    <div class="col-lg-10 col-md-10">
                        <!-- section-title -->
                        <div class="section-title with-desc clearfix">
                            <div class="title-header">
                                <h5>MEET OUR EXPERIENCED TEAM</h5>
                                <h2 class="title">Our Professional Team</h2>
                            </div>
                            <div class="title-desc">Our professional team works with decades of combined experience in the fields of business management, operations, finance, client service, and consultancy.</div>
                        </div><!-- section-title end -->
                    </div>
                    <div class="col-lg-2 col-md-2"></div>
                </div><!-- row end -->
                <!-- row -->
                <div class="row multi-columns-row ttm-boxes-row-wrapper">


                    <div class="ttm-box-col-wrapper col-lg-3 col-md-4 col-xs-12" v-for="(staff, index) in management" :key="index+'staff'">
                        <!-- featured-imagebox-team -->
                        <div class="featured-imagebox featured-imagebox-team ttm-team-box-view-overlay">
                            <div class="featured-thumbnail">
                                <img class="img-fluid" :src="staff.featured_thumbnail" alt="image"> 
                            </div> 
                            <div class="ttm-box-view-overlay">
                                <div class="featured-iconbox ttm-media-link">
                                    <router-link :to="{ name: 'TeamDetails', params: { name: convertToSlug(staff.fullname) } }" tag="a">
                                         <i class="ti ti-plus"></i>
                                    </router-link>
                                   
                                </div>
                            </div>
                            <div class="featured-content featured-content-team">
                                <div class="ttm-team-position">{{ staff.position }}</div>
                                <div class="featured-title">
                                    <h5>
                                         <router-link :to="{ name: 'TeamDetails', params: { name: convertToSlug(staff.fullname) } }" tag="a">
                                         {{ staff.fullname }}
                                        </router-link>
                                    </h5>
                                   
                                   
                                </div>
                            </div>
                        </div><!-- featured-imagebox-team end-->
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
import {pick} from "../Repositories/pick.js"
import { database } from "../Repositories/database"

export default {
  name: "OurTeam",
  mixins: [seo,pick,database],
  components: {
    "app-master" : Master,
    "app-breadcrumb" : Breadcrumb

  },
  created(){
      this.seoMetaData('Our Team', '');
  }

};
</script>
