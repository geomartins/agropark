<template>
  <!--client-section-->
        <div class="ttm-row client-section ttm-bgcolor-grey mt_70 res-991-mt-0 clearfix">
            <div class="container">
                <!-- row -->
                <div class="row text-center">
                    <div class="col-md-12">
                        <!-- ttm-client -->
                        <div class="ttm-client clients-slide owl-carousel owl-theme owl-loaded" data-item="5" data-nav="false" data-dots="false" data-auto="false">
                            <div class="client-box ttm-box-view-separator-logo">
                                <div class="ttm-client-logo-tooltip" data-tooltip="agricapital">
                                    <div class="client-thumbnail">
                                        <img src="/img/agri.png" alt="image">
                                    </div>
                                </div>
                            </div>
                            <div class="client-box ttm-box-view-separator-logo">
                                <div class="ttm-client-logo-tooltip" data-tooltip="nardus">
                                    <div class="client-thumbnail">
                                        <img src="/img/nardus.png" alt="image">
                                    </div>
                                </div>
                            </div>
                            <div class="client-box ttm-box-view-separator-logo">
                                <div class="ttm-client-logo-tooltip" data-tooltip="sanofoods">
                                    <div class="client-thumbnail">
                                        <img src="/img/sano.png" alt="image">
                                    </div>
                                </div>
                            </div>
                            <div class="client-box ttm-box-view-separator-logo">
                                <div class="ttm-client-logo-tooltip" data-tooltip="fp">
                                    <div class="client-thumbnail">
                                        <img src="/img/fipl.png" alt="image">
                                    </div>
                                </div>
                            </div>
                            <div class="client-box ttm-box-view-separator-logo">
                                <div class="ttm-client-logo-tooltip" >
                                    <div class="client-thumbnail">
                                        <img src="/img/berj.png" alt="image">
                                    </div>
                                </div>
                            </div>
                            <div class="client-box ttm-box-view-separator-logo">
                                <div class="ttm-client-logo-tooltip" >
                                    <div class="client-thumbnail">
                                        <img src="/img/dhop.png" alt="image">
                                    </div>
                                </div>
                            </div>
                            <div class="client-box ttm-box-view-separator-logo">
                                <div class="ttm-client-logo-tooltip" >
                                    <div class="client-thumbnail">
                                        <img src="/img/ac.png" alt="image">
                                    </div>
                                </div>
                            </div>
                            <div class="client-box ttm-box-view-separator-logo">
                                <div class="ttm-client-logo-tooltip" >
                                    <div class="client-thumbnail">
                                        <img src="/img/best.png" alt="image">
                                    </div>
                                </div>
                            </div>
                            <div class="client-box ttm-box-view-separator-logo">
                                <div class="ttm-client-logo-tooltip" >
                                    <div class="client-thumbnail">
                                        <img src="/img/dtch.png" alt="image">
                                    </div>
                                </div>
                            </div>
                            <div class="client-box ttm-box-view-separator-logo">
                                <div class="ttm-client-logo-tooltip" >
                                    <div class="client-thumbnail">
                                        <img src="/img/snm.png" alt="image">
                                    </div>
                                </div>
                            </div>
                        </div><!-- ttm-client end -->      
                    </div>
                </div><!-- row end -->
            </div>
        </div>
        <!--client-section end-->

</template>

<script>
export default {
  name: "Partner",
  props: {}
};
</script>


<style>
.owl-carousel.owl-loaded {
    display: flex;
    flex-direction: row;
    /* flex-basis: 200px; */
    flex-wrap: wrap;
    justify-content: flex-start;
}


.client-box {
    text-align: center;
    margin: 2px 10px;
}


.client-box.ttm-box-view-separator-logo .client-thumbnail::after {
    border-right: 1px solid transparent;
    
}


.client-box .ttm-client-logo-tooltip {
    padding-top: 10px;
    padding-bottom: 10px;
}

@media (min-width: 0px) and (max-width: 800px){
    .client-box{
        margin: 0.5rem;
        width: 45%;
    }

    .client-box .ttm-client-logo-tooltip {
        padding-top: 0px;
        padding-bottom: 0px;
    }


    .client-thumbnail img{
        width: 100%;
    }

    .client-box .ttm-client-logo-tooltip .client-thumbnail {
    padding: 0px;
        position: relative;
    }
}
</style>


