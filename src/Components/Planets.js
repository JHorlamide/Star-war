import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanet = async (key, page) => {
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  if (page === 0) {
    return page + 1;
  }
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["planet", page],
    fetchPlanet
  );

  console.log(resolvedData);

  const nextPageHandler = () => {
    setPage((old) => (!latestData || !latestData.next ? old : old + 1));
  };

  const previousPageHandler = () => {
    setPage((old) => {
      return Math.max(old - 1, 1);
    });
  };

  return (
    <div>
      <h2>Planets</h2>
      {status === "loading" && <div>Loading data...</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
          <div>
            <button onClick={previousPageHandler} disabled={page === 1}>
              Previous page
            </button>
            <span>{page}</span>
            <button onClick={nextPageHandler} disabled={!latestData || !latestData.next}>
              Next page
            </button>
            {resolvedData.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
