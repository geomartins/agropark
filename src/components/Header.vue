<template>
  <!--header start-->
        <header id="masthead" class="header ttm-header-style-classicinfo">
           
            <!-- ttm-topbar-wrapper -->
            <div class="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
                <div class="container">
                    <div class="ttm-topbar-content">
                        <ul class="top-contact text-left">
                            <li><i class="themifyicon ti-location-pin"></i> 18, Udi Street, Osborne Foreshore, Ikoyi Lagos </li>
                            <li><i class="themifyicon ti-timer"></i>Mon - Fri 8.00 - 17.00</li>
                        </ul>
                        <div class="topbar-right text-right">
                            <div class="ttm-social-links-wrapper list-inline">
                                <ul class="social-icons">
                                    <li><a href="https://web.facebook.com/agroparkng?_rdc=1&_rdr"><i class="fa fa-facebook"></i></a>
                                    </li>
                                    <li><a href="https://twitter.com/agroparkng"><i class="fa fa-twitter"></i></a>
                                    </li>
                                    
                                    <li><a href="https://www.instagram.com/agroparkng/"><i class="fa fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <a class="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor" href="#">GET A APPOINTMENT!</a>
                        </div>
                    </div>
                </div>
            </div><!-- ttm-topbar-wrapper end -->
            <!-- ttm-header-wrap -->
            <div class="ttm-header-wrap">
                <!-- ttm-stickable-header-w -->
                <div id="ttm-stickable-header-w" class="ttm-stickable-header-w ttm-bgcolor-white clearfix">
                    <div id="site-header-menu" class="site-header-menu">
                        <div class="site-header-menu-inner ttm-stickable-header">
                            <div class="container">
                                <!-- site-branding -->
                                <div class="site-branding">
                                    <a class="home-link" href="index.html" title="AgroPark" rel="home">
                                        <img id="logo-img" class="img-center" src="images/logo.png" alt="logo-img">
                                    </a>
                                </div><!-- site-branding end -->
                                <!--site-navigation -->
                                <div id="site-navigation" class="site-navigation">
                                    <!-- header-icons -->
                                    <div class="ttm-header-icons ">
                                        <span class="ttm-header-icon ttm-header-cart-link">
                                            <a href="#"><i class="fa fa-shopping-cart"></i>
                                                <span class="number-cart">0</span>
                                            </a>
                                        </span>
                                        <div class="ttm-header-icon ttm-header-search-link">
                                            <a href="#"><i class="ti ti-search"></i></a>
                                            <div class="ttm-search-overlay">
                                                <div class="ttm-search-outer">
                                                    <div class="ttm-form-title">Hi, How Can We Help You?</div>
                                                    <form method="get" class="ttm-site-searchform" action="#">
                                                        <div class="w-search-form-h">
                                                            <div class="w-search-form-row">
                                                                <div class="w-search-input">
                                                                    <input type="search" class="field searchform-s" name="s" placeholder="Type Word Then Enter...">
                                                                    <button type="submit">
                                                                        <i class="ti ti-search"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- header-icons end -->
                                    <div class="ttm-menu-toggle">
                                        <input type="checkbox" id="menu-toggle-form" :class="active" />
                                        <label for="menu-toggle-form" class="ttm-menu-toggle-block" @click="triggerMenu()">
                                            <span class="toggle-block toggle-blocks-1"></span>
                                            <span class="toggle-block toggle-blocks-2"></span>
                                            <span class="toggle-block toggle-blocks-3"></span>
                                        </label>
                                    </div>
                                    <nav id="menu" class="menu" :class="active">
                                        <ul class="dropdown">
                                            
                                            <router-link exact-active-class="active" tag="li" to='/' exact ><a>Home</a></router-link>
                                            <li class="has-submenu"><a href="#" @click.prevent="dropdown($event)" >About</a>
                                                <ul class="sub-menu">
                                                    <router-link  tag="li" to='/about'  exact-active-class="active" ><a>About Us</a></router-link>
                                                     <router-link  tag="li" to='/our-team' exact-active-class="active"><a>Our Team</a></router-link>
                                                     <router-link  tag="li" to='/partners' exact-active-class="active"><a>Partners</a></router-link>
                                                     <router-link  tag="li" to='/gallery' exact-active-class="active"><a>Gallery</a></router-link>
                                                     <router-link  tag="li" to='/bulletin' exact-active-class="active"><a>Bulletin</a></router-link>
                                                     <router-link  tag="li" to='/brochure' exact-active-class="active"><a>Brochure</a></router-link>
                                                     <router-link  tag="li" to='/faq' exact-active-class="active"><a>FAQ</a></router-link>
                                                     <router-link  tag="li" to='/graduate-trainee' exact-active-class="active" ><a>Graduate Trainee</a></router-link>
                                                     <li><a href="https://blog.agropark.ng" target="_blank">Blog</a></li>

                                                </ul>
                                            </li>

                                            

                                            <li class="has-submenu"><a href="#" @click.prevent="dropdown($event)">Farm Management</a>
                                                <ul class="sub-menu">
                                                    <router-link  tag="li" to='/poultry-subscription' exact-active-class="active" ><a>Poultry Subscription</a></router-link>
                                                     <router-link  tag="li" to='/fishery-subscription' exact-active-class="active" ><a>Fishery Subscription</a></router-link>
                                                     <router-link  tag="li" to='/farmland-subscription' exact-active-class="active" ><a>Farmland Subscription</a></router-link>
                                                     <router-link  tag="li" to='/cashcrop-subscription' exact-active-class="active" ><a>Cash Crop Subscription</a></router-link>
                            
                                                </ul>
                                            </li>
                                            <li class="has-submenu"><a  href="#" @click.prevent="dropdown($event)" >Academy</a>
                                                <ul class="sub-menu">
                                                    <router-link to='/agribusiness-academy' tag="li" exact-active-class="active"><a>Agribusiness Academy </a> </router-link>
                                                </ul>
                                            </li>

                                             
                                           
                                            <router-link to='/contact' tag="li" exact-active-class="active"><a> Contact Us </a> </router-link>
                                            <li><a href="https://app.agropark.ng" target="_blank">Portal</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div><!-- site-navigation end-->
                            </div>
                        </div>
                    </div>
                </div><!-- ttm-stickable-header-w end-->
            </div><!--ttm-header-wrap end -->
            <div class="ttm-content-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <!-- ttm-info-widget-->
                            <div class="ttm-info-widget">
                                <div class="header-widget">
                                    <div class="header-icon">
                                        <i class="fa fa-hospital-o"></i>
                                    </div>
                                    <div class="header-content">
                                        <h3>Number 1 Agri Hub</h3>
                                        <p>In Nigeria</p>
                                    </div>
                                </div>
                                <div class="header-widget">
                                    <div class="header-icon">
                                        <i class="fa fa-user"></i>
                                    </div>
                                    <div class="header-content">
                                        <h3>24/7 Client Support</h3>
                                        <p>Qualified Staff</p>
                                    </div>
                                </div>
                                <div class="header-widget">
                                    <div class="header-icon">
                                        <i class="fa fa-thumbs-o-up"></i>
                                    </div>
                                    <div class="header-content">
                                        <h3>Green Revolution</h3>
                                        <p>Extensive R&D</p>
                                    </div>
                                </div>
                            </div>
                            <!-- ttm-info-widget end -->
                            <div class="ttm-contact">
                                <span class="icon"><i class="fa fa-phone"></i></span>Call Us : +234 906 282 2257
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header><!--header end-->

</template>

<script>
export default {
  name: "Header",
  props: {},
  data(){
      return {
          active: ''
      }
  },
  methods:{
      triggerMenu(){
          if(this.active == ''){
               this.active = 'active'
          }else{
              this.active= '';
          }
         
          console.log(this.active);
      },

      dropdown(event){
          let clickedElement = event.target.nextElementSibling;
          let clickedElementClassList = Array.from(clickedElement.classList);
          if(clickedElementClassList.includes('active')){
              clickedElement.classList.remove('active');
          }else{
               clickedElement.classList.add('active');
          }


          let parentElement = event.target;
          let parentElementClassList = Array.from(parentElement.classList);
          if(parentElementClassList.includes('active')){
              parentElement.classList.remove('active');
          }else{
               parentElement.classList.add('active');
          }
          

      }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    /* li.has-submenu > a::after {
        content: 'Hi';
    }


    li.has-submenu > a.active::after {
        content: '\f106';
    } */
</style>





 