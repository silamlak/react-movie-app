import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { fetchVideos, fetch_youtube_videos } from "../api/requests";
import * as Loader from 'react-loader-spinner';


const Trailer = ({data}) => {

  const [loading, setLoading] = useState(true);
  const [trailerss, setTrailers] = useState([])
  const [isReady, setReady] = useState(false);
  const [videos, setVideos] = useState([])

    useEffect(() => {

        const vid = async() => {
            try {
              const query = `${data?.title ? data.title : data.name}`;
                const yt_video = await fetch_youtube_videos(`${query} trailer`);
                setTrailers(yt_video);
                console.log(yt_video)
                const videoId = yt_video[0]?.id.videoId
                const fetchVid = await fetchVideos(videoId)
                setVideos(fetchVid)
                setLoading(false)
            } catch (error) {
                
            }
        }
        vid()
    }, [data.id])

    const onReady = () => {
      setReady(true);
    };

    const loaderStyle = {
      position: 'inherit',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }

    return (

      loading ?

    <div style={loaderStyle}>
      <Loader.Rings type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
    </div>

  :<>
  <p className="text-white font-sans font-bold py-8">{data?.title ? data.title : data.name} Trailer Video</p>
        <div 
      className="relative w-[100%] z-0  max-md:h-[350px] h-[600px]"
        >
             <YouTube
        videoId={videos?.items[0]?.id}
        containerClassName="video-container"
        className="absolute inset-0"
        opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 0, // 0 for off, 1 for on
          },
        }}
        onReady={onReady}
      />
      {!isReady && <div className="text-white tex-4xl">Loading...</div>}
        </div>
        </>
  )
}

export default Trailer