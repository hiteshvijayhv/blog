import Axios from 'axios'

//const API_ENDPOINT = 'https://api.jsonbin.io/b/60c41dacb274176a77e5b148/16'
const API_ENDPOINT = 'https://gist.githubusercontent.com/hiteshvijayhv/45d93a12ff87c9a2fed019c35351f440/raw/f0575555d9446e51533d1b0d3884dc367dfd035d/testingjsonnn.json'
export const getResponse = async() => {
    
    var response;

   await Axios.get(API_ENDPOINT)
   .then(res => {
       response =res
   })
 return response
  }