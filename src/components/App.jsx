const { useState, useEffect } = React;
import searchYoutube from '../lib/searchYoutube.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';


var App = () => {
  const [allVideos, setAllVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  var getYouTubeVideos = (query) => {
    searchYoutube(query, (videos) =>{
      setAllVideos(videos);
      setCurrentVideo(videos[0]);
    });
  }

  const handleVideoListOnClick = (video) => {
    setCurrentVideo(video);
  }

  useEffect(() => {
    getYouTubeVideos('hello');
  }, []);


  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search handleSearchInputChange={getYouTubeVideos}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList
            handleVideoListOnClick={handleVideoListOnClick}
            videos={allVideos}
          />
        </div>
      </div>
    </div>
  );
};





// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
