import Axios from 'axios'

const API_ENDPOINT = 'https://gist.githubusercontent.com/hiteshvijayhv/2b26e64f2c1f28315441b2a6500ddfb8/raw/e0c7b7ce0262e2a2c0e505154fad0d21060d3aa4/blogs.json'
export const getResponse = async() => {
    
    var response;

   await Axios.get(API_ENDPOINT)
   .then(res => {
       response =res
   })
 return response
  }