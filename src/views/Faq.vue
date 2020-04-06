<template>
   <app-master>

       <div slot='breadcrumb'>
         <app-breadcrumb>
             <div class="title-box ttm-textcolor-white">
                <div class="page-title-heading">
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
                            <p>Below you’ll find answers to some of the most frequently asked questions at Agropark. We are constantly adding most asked question to this page so if you have a question and don’t see your answer, don’t hesitate to email us at <a href="#">info@agropark.ng</a></p>
                        </div>
                        <!-- wrap-acadion -->
                        <div class="wrap-acadion">
                            <div class="accordion">
                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey">
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" >
                                            <span class="ttm-title-text">Is Agro-Park registered with the Corporate Affairs Commission?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content" >
                                        <p>Agro-Park is a registered company, our RC number is 1383430</p>
                                    </div>
                                </div><!-- toggle end -->



                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">What documentation do you have for the land?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>We have a deed of sales and conveyance with a registered survey. We are currently processing a Global C of O with the Ministry of Lands Abeokuta.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">After purchase of land, does it become my property?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Yes, it is yours after purchase.</p>
                                    </div>
                                </div><!-- toggle end -->

                                 <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">What’s the title I would get after the purchase of farmlands?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>You get a land concession document for the purchase of land, and a Service Level Agreement for our Farm Management Service</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Where is the farm estate located?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>The farm estate is located at Ijale – Orile, along Ayetoro Road, Abeokuta North Local Government</p>
                                    </div>
                                </div><!-- toggle end -->

                                 <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">How far is the location of the farm site from Lagos?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>It is about 2hrs 30mins drive from Lagos.</p>
                                    </div>
                                </div><!-- toggle end -->

                                 <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">After purchase of land, do I still make other payments?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>No hidden charges after buying. The only the payment left is the cost of planting on the farmland.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Can payment be done in installments?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Yes, there is room for flexible payment. You can pay in 3, 6 and 12 months instalment plan.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Can I get discount on the farmlands?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Yes, discount is possible but subject to review by the management</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">What do you charge for farm management system and at what time will the payment be made?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>We charge 30% of the profit at the end of the crop tenure.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">What if I have no knowledge & skills concerning agriculture; can I still be involved?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Yes, our model is specifically for absentee farmers.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Regarding the facility management fee, will an acre farmland owner pay same rate as a hectare farmland owner? </span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Yes, the rates are calculated based on land size.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Can I invest in Agro-Park without buying farm land? </span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Yes, you can lease farmland and also our animal production doesn’t involve farmland. You can also lease out bird pens, ponds, and pigsty.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Can I pay for the farmland after harvest? </span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>No, farmland is purchased before cultivation can commence</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">I am interested in feeding my family with some part of the harvested products, in a situation where my farm is being managed by you and with the agreement with an anchor, how do we work that out?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>The farm produce we get from each farm land is aggregated and your returns is base on it. You cannot feed your family from the produce on your farm land but you can buy from our model farm at a cheap rate.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Who pays for facility management when you are managing my farm?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>All the cost has been factored into crop production input cost.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Do I have the liberty to cultivate any crop of my choice?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>We plant based on the market demands, so the market determines what we plant.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">The title on the land, would it be given to me by the government or Agro-Park? </span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>The title document will be given by Agro-Park which is extracted from the title document from the government.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Can I commence cultivation after payment?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Cultivation can only commence after full payment of the land has been made.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Can you help us manage our farms?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Yes. The minimum farm land size we take-up is 100 hectares. We also consider other factors such as; Location, Soil type, availability of water etc.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Can I lease or sell my land when I want to?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Yes, land transfer is allowed.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">For how long do I own the land?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>On land purchase 90 years, on lease depends on the model you subscribed to. You could lease for 10-20 years.</p>
                                    </div>
                                </div><!-- toggle end -->

                                 <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">What if I decide to manage my farmland myself after a period of time?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>This is not allowed to exist following the present model we practice which is for absentee farmers.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Can I build a farmhouse or a mini processing factory on my land?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>No. Construction is not allowed on lots within the farm estate. But service plot would be available for purchase within the Agro – industrial Park when it is time. There, you can build farm houses and processing factories.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">How do I get labourers to work on the farmland?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Our farming service provides that we have farm workers who are ready to work on our farmlands.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Can I practice crop production and livestock production on a piece of land?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>No, we have different section for Livestock production and crop production.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">What if I decide to change the crop cultivated on my farmland?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>This is only possible at the beginning of a new planting cycle and it would be based on the crops that are available for subscription.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Who are those behind Agro-Park and how long have you been doing this?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Agro-Park is a limited company which comprises of the Executive Directors, Advisory board. We have been in business for about 5 years but we opened to this model April 2017.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Who pays for the labourer’s accommodation?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>This has been factored into crop production input cost.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Are the lands under acquisition?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>No, they are not. Before you acquire we ensure balance check to know the history of the land.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Do you have testimony from subscribers?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Yes, you can view them on our website, www.agropark.ng</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Were the lands purchased from the government or community?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>We acquired them from different family within the community and we documented them with the government.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Is Agro-Park in partnership with the government?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>No, Agro-Park is solely private-owned company.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Do you conduct visits to the farm sites?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Yes, our farm estate is opened from Mondays to Saturdays.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">Are there facilities (such as security, water) in place?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Yes, all these facilities are in place already.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">What plan do you have in place for accident (fire and flood)?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>Our farm estate is insured by NAIC (Nigerian Agricultural Insurance Corporation) which covers the input cost, therefore your investment is secured.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">What is the minimum size of land you can sell?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>A plot of land, 50 and above for lease.</p>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle ttm-style-classic ttm-toggle-title-bgcolor-grey" >
                                    <div class="toggle-title" @click="accordion($event)">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            <span class="ttm-title-text">What is the main benefit of affiliating and investing in Agro-Park?</span>
                                        </a>
                                    </div>
                                    <div class="toggle-content">
                                        <p>We guarantee returns on your investment. Income and capital gain. You make profit on the land, land appreciation, creates employment opportunities for 2/3 farmers </p>
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