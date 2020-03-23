import axios from 'axios'

const state = {}
const getters = {   }
const mutations = {  }
const actions = {

    async graduate_trainee_confirm({commit},value){
        console.log('INNNNNNNNNNNNNN')
            try {
                var response = await axios
                .post(
                    "https://www.agropark.com.ng/api/v1/section/agropark_graduate_trainee",value
                );    
                return await response;
            }catch(error){
                return await error.response;
            } 
      
    },





}

export default {
    state,
    getters,
    mutations,
    actions,
}






