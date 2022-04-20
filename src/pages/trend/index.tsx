import React, { useEffect, useState } from "react";
import Gif from "../../components/gifComponent/GifComp";
import { getApiTrend } from "../../auth/getAPI";

const Trending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApiTrend().then((gifs) => {
      setData(gifs.data);
    });
  }, []);

  return (
    <>
      <Gif data={data} />
    </>
  );
};

export default Trending;
