export const getApi = async (search) => {
      const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=52B44sFV6Vjz2AEcQBglMy1eoFyfcGrW&limit=12`;
      const res = await fetch(url, { method: "GET" });
      const data = await res.json();
      return data;
  };

  export const getApiTrend = async () => {
      const url = `https://api.giphy.com/v1/gifs/trending?api_key=52B44sFV6Vjz2AEcQBglMy1eoFyfcGrW&limit=12`;
      const res = await fetch(url, { method: "GET" });
      const data = await res.json();
      return data;
};