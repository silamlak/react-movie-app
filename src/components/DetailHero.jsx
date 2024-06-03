import React from 'react'

const DetailHero = ({data, cast}) => {

    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      };

  return (
    <div
        style={divStyle}
        className="top-0 h-screen max-sm:flex-col flex justify-center items-end gap-2 sm:gap-4 px-5"
      >
        <div className=" flex flex-row-reverse justify-center items-start gap-4 xl:gap-12">
          <div className="z-10">
            <h1 className="text-white text-5xl max-mll:text-3xl font-bold pb-5 max-sm:pb-3">
              {data.original_title}
            </h1>
            <div className="flex gap-4 mt-3 sm:mt-5 justify-start flex-wrap">
              {data?.genres?.map((r, i) => (
                <button
                  key={i}
                  className="max-mll:text-sm whitespace-nowrap px-1 py-1 bg-transparent border-2 rounded-xl text-white font-bold"
                >
                  {r.name}
                </button>
              ))}
            </div>
            <p className="max-w-xl text-white font-semibold text-[18px]">
              {data.overview}
            </p>
            <div className="flex flex-col gap-4 mt-7">
              <p className="text-white font-sans font-semibold">Casts</p>
              <div className="flex gap-4 flex-wrap">
                {cast?.slice(0, 6).map((item, i) => (
                  <div key={i}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                      className="w-[80px] h-[140px]"
                    />
                    <p className="text-white font-sans font-semibold">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mll:block hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              className="max-w-[250px] h-[300px] sm:h-[400px] rounded-xl"
            />
          </div>
        </div>
      </div>
  )
}

export default DetailHero