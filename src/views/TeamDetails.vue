<template>
   <app-master>

       <div slot='breadcrumb'>
         <app-breadcrumb>
             <div class="title-box ttm-textcolor-white">
                <div class="page-title-heading">
                    <h1 class="title">{{ name.replace(/-/g,' ') }}</h1>
                </div><!-- /.page-title-captions -->
                <div class="breadcrumb-wrapper">
                    <div class="container">
                        <div class="breadcrumb-wrapper-inner">
                            <span>
                                <router-link class="home" title='Go to AgroPark' to='/'><i class="themifyicon ti-home"></i>&nbsp;&nbsp;Home </router-link>
            
                            </span>
                            <span class="ttm-bread-sep">&nbsp; | &nbsp;</span>
                            <span>{{ name.replace(/-/g,' ') }}</span>
                        </div>
                    </div>
                </div>
            </div>
         </app-breadcrumb>
       </div>


        



      <div slot='main_content_single'>

        
        <section class="ttm-row overview-section clearfix">
            <div class="ttm-team-member-single-content-wrapper ttm-team-member-view-default">
                <div class="container">
                    <div class="row" v-for="(detail,index) in details" :key="index+'detail'">
                        <div class="col-lg-12">
                            <div class="ttm-team-member-single-content">
                                <div class="ttm-social-links-wrapper">
                                    <ul class="social-icons">
                                        <li class="social-facebook">
                                            <a class="tooltip-top" target="_blank" :href="detail.info.facebook" data-tooltip="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li class="social-twitter">
                                            <a class="tooltip-top" target="_blank" :href="detail.info.twitter" data-tooltip="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li class="social-gplus">
                                            <a class="tooltip-top" target="_blank" :href="detail.info.instagram" data-tooltip="Instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                                <div class="row">
                                    <div class="col-lg-5 col-md-12">
                                        <!-- ttm-featured-wrapper -->
                                        <div class="ttm-featured-wrapper"> 
                                            <div class="featured-thumbnail">
                                                <img class="img-fluid" :src="detail.featured_image" alt="image">
                                            </div> 
                                        </div><!-- ttm-featured-wrapper end--> 
                                    </div>
                                    <div class="ttm-team-member-single-content-area col-md-12 col-lg-7">
                                        <div class="ttm-team-member-content shadow-box">
                                            <div class="ttm-team-member-single-list">
                                                <h2 class="ttm-team-member-single-title">{{ detail.title+' '+detail.fullname }}</h2>
                                                <h5 class="ttm-team-member-single-position">{{ detail.position }}</h5>
                                                <div class="ttm-team-member-appointment-btn-wrapper">
                                                    <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor mb-20" href="#">MAKE AN APPOINTMENT</a>
                                                </div>
                                                <div class="ttm-team-data">
                                                    <div class="ttm-team-details-wrapper">
                                                        <ul class="ttm-team-details-list clearfix">
                                                            <li>
                                                                <div class="ttm-team-list-title">
                                                                    <i class="fa fa-phone"></i> Phone :
                                                                </div>
                                                                <div class="ttm-team-list-value"><a href="tel:(123)456-7890"> {{ detail.info.phone }} </a></div>
                                                            </li>
                                                            <li>
                                                                <div class="ttm-team-list-title">
                                                                    <i class="ti ti-email"></i> Email :
                                                                </div>
                                                                <div class="ttm-team-list-value">
                                                                    <a href="mailto:info@example.com" tabindex="0"> {{ detail.info.email }}</a>
                                                                </div>
                                                            </li>
                                                             <li>
                                                                <div class="ttm-team-list-title">
                                                                    <i class="ti ti-location-pin"></i> Address Info :
                                                                </div>
                                                                <div class="ttm-team-list-value"> {{ detail.info.address }}</div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ttm-team-member-single-content">
                                <div class="ttm-team-member-content">
                                    <h2>Overview</h2>
                                    <div class="pt-5 row">
                                        <div class="col-sm-8">
                                            <div class="pr-20">
                                                <p v-html="detail.info.overview"> </p>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <!-- ttm_single_image-wrapper -->
                                            <div class="ttm_single_image-wrapper">
                                                <img class="img-fluid" :src="detail.info.overview_image" alt="">
                                            </div><!-- ttm_single_image-wrapper end -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
  name: "TeamDetails",
  mixins: [seo,pick,database],
  components: {
    "app-master" : Master,
    "app-breadcrumb" : Breadcrumb

  },
  data(){
      return {
          name: this.$route.params.name,
          details: ''
      }

  },
  created(){
      
     let x  = this; 
      x.details = x.fetchProfileUsingName(x.name.replace(/-/g,' '));
      this.seoMetaData(x.name.replace(/-/g,' '), '');
  }

};
</script>
