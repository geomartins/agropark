<template>
   <app-master>

       <div slot='breadcrumb'>
         <app-breadcrumb>
             <div class="title-box ttm-textcolor-white">
                <div class="page-title-heading">
                    <h1 class="title">Graduate Trainee</h1>
                </div><!-- /.page-title-captions -->
                <div class="breadcrumb-wrapper">
                    <div class="container">
                        <div class="breadcrumb-wrapper-inner">
                            <span>
                                <router-link class="home" title='Go to AgroPark' to='/'><i class="themifyicon ti-home"></i>&nbsp;&nbsp;Home </router-link>
            
                            </span>
                            <span class="ttm-bread-sep">&nbsp; | &nbsp;</span>
                            <span>Graduate Trainee</span>
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
                            <h2 class="ttm-textcolor-skincolor ">Application Form</h2>
                            <p>Agro-Park Graduate Trainee Program (GTP) 2020 is a 6-month intensive program. Also, note that the location of the Agropark Graduate Trainee would be taking place at  <a href='#'>Abeokuta North, Ogun State Nigeria. </a> </p>
                        </div>

                        <div class="comment-respond">
                           
                            <form action="#" method="post" id="commentform" class="comment-form">

                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="comment-form-author">
                                            <div class="form-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <label for="inputGroupSelect01" class="input-group-text" style="color: rgb(146, 117, 125); font-size: 0.9rem;">Title</label>
                                                    </div>
                                                    
                                                    <select class="form-control" v-model="formData.title">
                                                        <option selected disabled>Select Title</option>
                                                        <option v-for="(title, index) in titles" :key="index+'title'" :value="title"> {{ title }}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                   
                                    </div>

                                    <div class="col-lg-6">
                                        <p class="comment-form-author">
                                            <input  placeholder="Surname"  type="text" v-model="formData.surname">
                                        </p>
                                    </div>


                                    <div class="col-lg-6">
                                        <p class="comment-form-author">
                                            <input  placeholder="Other Names"  type="text" v-model="formData.other_names">
                                        </p>
                                    </div>


                                    <div class="col-lg-6">
                                        <div class="comment-form-author">
                                            <div class="form-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <label for="inputGroupSelect01" class="input-group-text" style="color: rgb(146, 117, 125); font-size: 0.9rem;">Gender</label>
                                                    </div>
                                                    
                                                    <select class="form-control" v-model="formData.gender">
                                                        <option selected disabled>Select Gender</option>
                                                        <option v-for="(gender, index) in genders" :key="index+'gender'" :value="gender"> {{ gender }}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                    <div class="col-lg-6">
                                        <p class="comment-form-author">
                                            <input  placeholder="Age"  type="number" v-model="formData.age">
                                        </p>
                                    </div>

                                    <div class="col-lg-6">
                                        <p class="comment-form-author">
                                            <input  placeholder="Course Of Study"  type="text" v-model="formData.course_of_study">
                                        </p>
                                    </div>

                                    <div class="col-lg-6">
                                         <div class="comment-form-author">
                                            <div class="form-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <label for="inputGroupSelect01" class="input-group-text" style="color: rgb(146, 117, 125); font-size: 0.9rem;">Highest Qualification</label>
                                                    </div>
                                                    
                                                    <select class="form-control" v-model="formData.qualification">
                                                        <option selected disabled>Select Qualification</option>
                                                        <option v-for="(qualification, index) in qualifications" :key="index+'qualification'" :value="qualification"> {{ qualification }}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        

                                    </div>

                                    <div class="col-lg-6">
                                         <p class="comment-form-email">
                                            <input placeholder="Email" v-model="formData.email" type="email" >
                                        </p>
                                    
                                    </div>

                                    <div class="col-lg-6">
                                         <p class="comment-form-email">
                                            <input placeholder="Telephone" v-model="formData.telephone" type="tel" >
                                        </p>
                                    </div>

                                    <div class="col-lg-6">
                                        <p class="comment-form-email">
                                            <input placeholder="State" v-model="formData.state" type="text" >
                                        </p>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="comment-form-author">
                                            <div class="form-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <label for="inputGroupSelect01" class="input-group-text" style="color: rgb(146, 117, 125); font-size: 0.9rem;">Area Of Interest</label>
                                                    </div>
                                                    
                                                    <select class="form-control" v-model="formData.area_of_interest">
                                                        <option selected disabled>Select Area of Interest</option>
                                                        <option v-for="(interest, index) in area_of_interests" :key="index+'interest'" :value="interest"> {{ interest }}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>



                                </div>
                               
                                

                                

                                

                                 

                               
                               

                               
                                

                                <p class="comment-notes">By submitting this form, you admit to the full understanding that Agro Park internship programme is not a full employment and you are ready to abide by the rules and regulations during the duration of your internship at Agro Park. </p>
                                

                                <p class="form-submit">
                                    <input type="button" @click.prevent="submit('SUBMIT_GRADUATE_TRAINEE_FORM')" class="submit ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor" value="Submit Form">
                                </p>
                            </form>
                        </div>

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
import { pick } from "../Repositories/pick"
import { vuesax } from "../Repositories/vuesax"

export default {
  name: "GraduateTrainee",
  mixins: [seo, pick, vuesax],
  components: {
    "app-master" : Master,
    "app-breadcrumb" : Breadcrumb
  },
  data(){
      return {
          formData:{
              title: '',
              surname: '',
              other_names: '',
              gender: '',
              age: '',
              course_of_study: '',
              qualification: '',
              email: '',
              telephone: '',
              state: '',
              area_of_interest: '',
              
          },
          titles: ['Mr','Miss','Mrs'],
          genders: ['Male','Female'],
          qualifications: ['Undergraduate','OND','HND','BSC','MSC','PHD'],
          area_of_interests: ['Crop Production','Agro Processing','Agricultural Technology','Farm Administration','Livestock Production','Animal Nutrition and Feed Production']
      }
  },
  methods: {

      api_params(value) {
        if(value == "SUBMIT_GRADUATE_TRAINEE_FORM"){
            return { ...this.formData, key: this.API_KEY }
        }
    },

    async api_calls(value){

        let response;
        let x = this;




        if(value == "SUBMIT_GRADUATE_TRAINEE_FORM"){

            /** Start loader gif */
          this.showLoading();

          response = await this.$store.dispatch("graduate_trainee_confirm", this.api_params(value));

            /** If response contain status */
            if( response && 'status' in response){
              
                /** If response status is 200 */
                if(response.status == 200){

                    x.showNotif({type: 'success', message: response.data.message });

                    /** Clears all input field */
                    x.clearInputField(x.formData);
                }


                /** If response status is 400 or 404 */
                if(response.status == 400 || response.status == 404){
                  x.showNotif({type: 'warning', message: response.data.message });

                }

                /** If response contains error */
                if(response.data.errors){
                  x.showNotif({type: 'warning', message: response.data.errors });
                  
                }
                
              } 

              /** End loader gif */
              this.hideLoading();
        }

    },

    async submit(value){
        let x = this;
      
        if(value == "SUBMIT_GRADUATE_TRAINEE_FORM"){
           this.api_calls(value);
            
        }

    }


  },
  created(){
      this.seoMetaData('Graduate Trainee', '');
  }

};
</script>
