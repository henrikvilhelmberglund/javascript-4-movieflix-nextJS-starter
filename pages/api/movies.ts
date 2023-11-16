import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const _baseUrl = "https://api.themoviedb.org/3";
  const _token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmQ4YWQ4ZjJkMTliNzI0YTIxY2EyNTEwYjQ1MGRhOSIsInN1YiI6IjY0MzU5ZjJmZTYzNTcxMDBmMjdhMjNhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ylJsoObCWHjzOmig4BQJHlSBwvzhfbHFIgog8HLLcY";

  if (req.method === "GET") {
    let url = `${_baseUrl}/discover/movie?page=1&language=sv-SE&sort_by=popularity.desc`;
    let options = {
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `bearer ${_token}`,
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    res.status(200).json({ status: "success", statusCode: 200, data });
  }
  if (req.method === "DELETE") {
    res.status(304).end();
    // .json({
    //   status: "success",
    //   statusCode: 200,
    //   data: "information is removed!",
    // });
  }
  if (req.method === "POST") {
    res.status(200).json({
      status: "success",
      statusCode: 200,
      data: "information is added!",
    });
  }
}

async function ListMovies() {
  return data;
}
