
export const database ={

    data(){
        return {
            management: [

                { 
                    id: '1',
                    title: '' , 
                    fullname: 'Olusola Olunowo', 
                    position: 'Managing Director', 
                    featured_thumbnail: '/img/1.png',
                    featured_image: '', //dimension 480px x 515px
                    info: {
                        phone: '',
                        email: '',
                        address: '',
                        facebook: '',
                        twitter: '',
                        instagram: '',
                        overview: ' <p>Lorem Ipsum is simply dummy text of the <strong>printing and typesetting industry.</strong> Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>',
                        overview_image: '',
                    }
            
                },

                { 
                    id: '2',
                    title: 'Mr' , 
                    fullname: 'Seun Oloyede', 
                    position: 'Chief Financial Officer', 
                    featured_thumbnail: '/img/2.png',
                    featured_image: '', //dimension 480px x 515px
                    info: {
                        phone: '',
                        email: '',
                        address: '',
                        facebook: '',
                        twitter: '',
                        instagram: '',
                        overview: ' <p>Lorem Ipsum is simply dummy text of the <strong>printing and typesetting industry.</strong> Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>',
                        overview_image: '',
                    }
            
                },


            ], 

            
            


        }
    },


    methods:{

       
        fetchProfileUsingName(fullname){

            //filter array of object based
            let x = this;
            var result = x.management.filter(function(data, index) {
                return data.fullname.toLowerCase() == fullname;
            });

           return result;

        },
        

    }

    

}