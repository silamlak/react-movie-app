import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movie_cast, movie_detail, similar_videos } from "../api/requests";
import Trailer from "../components/Trailer";
import * as Loader from "react-loader-spinner";
import SimilarMovie from "../components/SimilarMovie";
import DetailHero from "../components/DetailHero";

const MovieDetail = () => {
  const [data, setData] = useState([]);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const currentURL = window.location.href;
  const url = new URL(currentURL);
  const pathname = url.pathname;
  const pathSegments = pathname.split("/");
  const movieSegment = pathSegments[1];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await movie_detail(movieSegment, id);
        setData(response);
        const response_casts = await movie_cast(movieSegment, id);
        setCast(response_casts.cast);
        const similar_video = await similar_videos(movieSegment, id);
        setSimilar(similar_video.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [movieSegment, id]);

  const loaderStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return loading ? (
    <div style={loaderStyle}>
      <Loader.FidgetSpinner type="Puff" color="#00BFFF" height={100} width={100} timeout={3000} />
    </div>
  ) : (
    <>
      <DetailHero data={data} cast={cast}/>
      <div className="wd mt-24">
        <Trailer data={data} />
      </div>
      <div className="wd">
        <SimilarMovie movieSegment={movieSegment} similar={similar} />
      </div>
    </>
  );
};

export default MovieDetail;
