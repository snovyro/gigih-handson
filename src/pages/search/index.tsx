import React, { useState } from "react";
import FormComp from "../../components/formComponent/FormComp";
import Gif from "../../components/gifComponent/GifComp";
import { getApi } from "../../auth/getAPI";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const getResult = () => {
    getApi(search).then((gifs) => setData(gifs.data));
  };

  const getInput = (e) => {
    setSearch(e.target.value);
  };

  // const result = data.map((gif) => (
  //   <Gif id={gif.id} title={gif.title} images={gif.images.fixed_width.url} />
  // ));

  const handleSubmit = (e) => {
    e.preventDefault();
    getResult();
  };

  return (
    <>
      <>
        <FormComp onSubmit={handleSubmit} onChange={getInput} />
        <Gif data={data} />
      </>
    </>
  );
};

export default SearchBar;
