import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});


// use jquery to send a get request to the search point
// Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
// Accept an q string to search for
//get (url, data, callback on success, datatype)

var searchYouTube = (query, callback) => {
  // TODO
  $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', {
    youtube_api_key: YOUTUBE_API_KEY,
    q: query
  })
    .done((items) => {
      if (callback) {
        callback (items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default searchYouTube;