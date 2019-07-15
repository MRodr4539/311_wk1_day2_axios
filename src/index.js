const axios = require('axios');
const config = require('../config');
// console.log(config.api_key)

// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account


const discoverMovie = () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${config.API_KEY}`
    return axios(url).then(response => response)
  }


const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${config.api_key}`
  // code here
  return axios(url, {params: {id: 500}}).then(response=>response)
    return response.data.original_title
 }
//   .catch(function(error){
//     //handle error
//     return error
//  })
// //   .finally(function(){
//   });
}

const getMovieByIdFailure = () => {
  const fakeId = 1 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${config.api_key}`
  // code here
  return axios(url).then(response=>response){
  }
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}