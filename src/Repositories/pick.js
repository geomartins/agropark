
export const pick ={


    
    
    data(){
        return {
            API_KEY: '$2y$10$89Jrxtjw7S9AKqRp68zfk.WOnAwxt9fEObZe.lXXAA.mze21FAQ0W', 
            
            


        }
    },

    methods:{
        clearInputField(obj){
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    obj[key] = '';
                }
            }
        },
        convertToSlug(Text)
        {
            return Text
                .toLowerCase()
                .replace(/[^\w ]+/g,'')
                .replace(/ +/g,'-')
                ;
        }

    }

    

}