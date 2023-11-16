import Item from "@/components/item/item";
import { IMovie } from "@/models/IMovie";
import { useEffect, useState } from "react";

// Server (SSR)

export default function MoviesPage(props: any) {
  console.log("props:", props);
  const { results } = props;
  return (
    <main>
      <h1 className="page-title">Populära filmer</h1>
      <div className="grid">
        {results.map((movie: IMovie) => (
          // <Item {...movie} key={movie.id} />
          <Item
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
            original_language={movie.original_language}
            overview={movie.overview}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
            popularity={movie.popularity}
            key={movie.id}
          />
        ))}
      </div>
    </main>
  );
}

// Sker i backend på servern
export async function getStaticProps() {
  const _baseUrl = "https://api.themoviedb.org/3";
  const _token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmQ4YWQ4ZjJkMTliNzI0YTIxY2EyNTEwYjQ1MGRhOSIsInN1YiI6IjY0MzU5ZjJmZTYzNTcxMDBmMjdhMjNhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ylJsoObCWHjzOmig4BQJHlSBwvzhfbHFIgog8HLLcY";
  const url = `${_baseUrl}/discover/movie?page=1&language=sv-SE&sort_by=popularity.desc`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      authorization: `bearer ${_token}`,
    },
  };
  const response = await fetch(url, options);
  const json = await response.json();
  console.log("data from static props", json);
  return { props: json };
}

// Client (CSR)
// export default function MoviesPage() {
//   const [movies, setMovies] = useState<IMovie[]>([]);
//   useEffect(() => {
//     async function loadMovies() {
//       const response = await fetch("/api/movies");
//       const json = await response.json();
//       console.log(json);
//       setMovies(json.data.results);
//     }
//     loadMovies();
//   }, []);
//   return (
//     <main>
//       <h1 className="page-title">Populära filmer</h1>
//       <div className="grid">
//         {movies.map((movie) => (
//           // <Item {...movie} key={movie.id} />
//           <Item
//             id={movie.id}
//             poster_path={movie.poster_path}
//             title={movie.title}
//             release_date={movie.release_date}
//             original_language={movie.original_language}
//             overview={movie.overview}
//             vote_average={movie.vote_average}
//             vote_count={movie.vote_count}
//             popularity={movie.popularity}
//             key={movie.id}
//           />
//         ))}
//       </div>
//     </main>
//   );
// }
