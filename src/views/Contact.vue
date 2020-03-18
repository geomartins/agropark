<template>
   <app-master>

       <div slot='breadcrumb'>
         <app-breadcrumb>
             <div class="title-box ttm-textcolor-white">
                `<div class="page-title-heading">
                    <h1 class="title">Contact Us</h1>
                </div><!-- /.page-title-captions -->
                <div class="breadcrumb-wrapper">
                    <div class="container">
                        <div class="breadcrumb-wrapper-inner">
                            <span>
                                <router-link class="home" title='Go to AgroPark' to='/'><i class="themifyicon ti-home"></i>&nbsp;&nbsp;Home </router-link>
            
                            </span>
                            <span class="ttm-bread-sep">&nbsp; | &nbsp;</span>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </div>
            </div>
         </app-breadcrumb>
       </div>


        



      <div slot='main_content'>

        <section class="ttm-row clearfix">
            <div class="container">
                <div class="row ttm-boxes-row-wrapper">
                    <div class="col-md-4 ttm-box-col-wrapper">
                        <!-- ttm_single_image-wrapper -->
                        <div class="ttm_single_image-wrapper mb-25">
                            <img class="img-fluid" src="images/single-img-six.jpg" alt="">
                        </div><!-- ttm_single_image-wrapper end -->
                        <h4>New York Office</h4>
                        <div class="sep_holder_box width-100">
                            <span class="sep_holder"><span class="sep_line"></span></span>
                            <span class="sep_holder"><span class="sep_line"></span></span>
                        </div>
                        <ul class="ttm_contact_widget_wrapper">
                            <li><i class="ttm-textcolor-skincolor ti ti-location-pin"></i>85455 Stonehill Lane Victoria, Apt 826,<br>United State</li>
                            <li><i class="ttm-textcolor-skincolor ti ti-comment"></i><a href="mailto:info@domainname.com">info@domainname.com</a></li>
                            <li><i class="ttm-textcolor-skincolor ti ti-mobile"></i>(+01) 123 456 7890</li>
                        </ul>
                        <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline mb-10" href="#">LEARN MORE</a>
                    </div>
                    <div class="col-md-4 ttm-box-col-wrapper">
                        <!-- ttm_single_image-wrapper -->
                        <div class="ttm_single_image-wrapper mb-25">
                            <img class="img-fluid" src="images/single-img-seven.jpg" alt="">
                        </div><!-- ttm_single_image-wrapper end -->
                        <h4>Hampshire Office</h4>
                        <div class="sep_holder_box width-100">
                            <span class="sep_holder"><span class="sep_line"></span></span>
                            <span class="sep_holder"><span class="sep_line"></span></span>
                        </div>
                        <ul class="ttm_contact_widget_wrapper">
                            <li><i class="ttm-textcolor-skincolor ti ti-location-pin"></i>85455 Stonehill Lane Victoria, Apt 826,<br>United State</li>
                            <li><i class="ttm-textcolor-skincolor ti ti-comment"></i><a href="mailto:info@domainname.com">info@domainname.com</a></li>
                            <li><i class="ttm-textcolor-skincolor ti ti-mobile"></i>(+01) 123 456 7890</li>
                        </ul>
                        <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline mb-10" href="#">LEARN MORE</a>
                    </div>
                    <div class="col-md-4 ttm-box-col-wrapper">
                        <!-- ttm_single_image-wrapper -->
                        <div class="ttm_single_image-wrapper mb-25">
                            <img class="img-fluid" src="images/single-img-eight.jpg" alt="">
                        </div><!-- ttm_single_image-wrapper end -->
                        <h4>Pennsylvania Office</h4>
                        <div class="sep_holder_box width-100">
                            <span class="sep_holder"><span class="sep_line"></span></span>
                            <span class="sep_holder"><span class="sep_line"></span></span>
                        </div>
                        <ul class="ttm_contact_widget_wrapper">
                            <li><i class="ttm-textcolor-skincolor ti ti-location-pin"></i>85455 Stonehill Lane Victoria, Apt 826,<br>United State</li>
                            <li><i class="ttm-textcolor-skincolor ti ti-comment"></i><a href="mailto:info@domainname.com">info@domainname.com</a></li>
                            <li><i class="ttm-textcolor-skincolor ti ti-mobile"></i>(+01) 123 456 7890</li>
                        </ul>
                        <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline mb-10" href="#">LEARN MORE</a>
                    </div>
                </div><!-- row end -->
                <div class="row pt-60 res-991-pt-0">
                    <div class="col-lg-8">
                        <div class="pr-40 res-991-pr-0 res-991-pb-30">
                            <!-- section-title -->
                            <div class="section-title with-desc clearfix">
                                <div class="title-header">
                                    <h2 class="title">How Can We Help?</h2>
                                </div>
                            </div>
                            <!-- section-title end -->
                            <form id="ttm-contactform" class="ttm-contactform wrap-form style2 res-991-mt_15 clearfix" method="post" action="#">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Full Name *</label>
                                        <span class="text-input"><input name="your-name" type="text" value="" placeholder="" required="required"></span>
                                    </div>
                                    <div class="col-md-6">
                                        <label>Your email *</label>
                                        <span class="text-input"><input name="email" type="email" value="" placeholder="" required="required"></span>
                                    </div>
                                    <div class="col-md-6">
                                        <label>Your Phone *</label>
                                        <span class="text-input"><input name="phone" type="text" value="" placeholder="" required="required"></span>
                                    </div>
                                    <div class="col-md-6">
                                        <label>I'm interested in *</label>
                                        <span class="text-input"><input name="venue" type="text" value="" placeholder="" required="required"></span>
                                    </div>
                                    <div class="col-md-12">
                                        <label>Your Message *</label>
                                        <span class="text-input"><textarea name="message" cols="40" rows="6" placeholder="" required="required"></textarea></span>
                                    </div>
                                </div>
                                <input type="submit" value="SEND-MESSAGE" class="submit ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor">
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <!-- section-title -->
                        <div class="section-title clearfix">
                            <div class="title-header">
                                <h2 class="title">Follow Us</h2>
                            </div>
                        </div>
                        <!-- section-title end -->
                        <div class="pt-25 pb-40 res-991-pb-10 res-991-mt-50">
                            <div class="social-icons circle social-hover">
                                <div class="ttm-socialbox-links-wrapper row">
                                    <div class="ttm-socialbox-i-wrapper col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <a class="tooltip-top ttm-socialbox-icon-link-twitter" target="_blank" href="#" data-tooltip="Twitter">
                                            <i class="fa fa-twitter" aria-hidden="true"></i>
                                            <span class="ttm-link">twitter</span>
                                        </a>
                                    </div>
                                    <div class="ttm-socialbox-i-wrapper col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <a class="tooltip-top ttm-socialbox-icon-link-gplus" target="_blank" href="#" data-tooltip="Google+">
                                            <i class="fa fa-google-plus" aria-hidden="true"></i>
                                            <span class="ttm-link">gplus</span>
                                        </a>
                                    </div>
                                    <div class="ttm-socialbox-i-wrapper col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <a class="tooltip-top ttm-socialbox-icon-link-facebook" target="_blank" href="#" data-tooltip="Facebook">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                            <span class="ttm-link">facebook</span>
                                        </a>
                                    </div>
                                    <div class="ttm-socialbox-i-wrapper col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <a class="tooltip-top ttm-socialbox-icon-link-twitter" target="_blank" href="#" data-tooltip="Twitter">
                                            <i class="fa fa-twitter" aria-hidden="true"></i>
                                            <span class="ttm-link">twitter</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- section-title -->
                        <div class="section-title clearfix">
                            <div class="title-header">
                                <h2 class="title">Opening Hours</h2>
                            </div>
                        </div>
                        <!-- section-title end -->
                        <div class="ttm-timelistbox-wrapper pt-10 res-991-mt-50">
                            <div class="ttm-timelistbox-block-wrapper">
                                <ul class="ttm-timelistbox-block">
                                    <li>Monday - Friday<span class="service-time">09:00 - 17:00</span></li>
                                    <li>Saturday<span class="service-time">09:00 - 17:00</span></li>
                                    <li>Sunday<span class="service-time">Closed</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- intro-section end -->

        
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
  created(){
      this.seoMetaData('Contact Us', '');
  }
};
</script>
