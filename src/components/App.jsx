import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';

const { useState } = React;

var App = () => {
  // create state for allVideos
  const [allVideos, setAllVideos] = useState(exampleVideoData);
    // this gets to passed to VideoList
  // create state for currentVideo in player
  const [currentVideo, setCurrentVideo] = useState(exampleVideoData[0])
    // this gets passed to VideoPlayer

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={currentVideo}/>
          <div><h5><em>videoPlayer</em> view goes here</h5></div>
        </div>
        <div className="col-md-5">
          <VideoList videos={allVideos}/>
          <div><h5><em>videoList</em> view goes here</h5></div>
        </div>
      </div>
    </div>
  );
};





// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
