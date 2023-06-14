/* eslint react/prop-types: 0 */

import { useState } from "react";
import CheapGamesGroup from "../HomePageInnerComponents/CheapGamesGroup";
import RecentGames from "../HomePageInnerComponents/RecentGames";
import TopRatedGamesGroup from "../HomePageInnerComponents/TopRatedGamesGroup";

export default function Homepage({
  gamesByMetacritic,
  gamesByPrice,
  gamesByReleaseDate,
  unixTimeStamp,
}) {
  const [testAir, setTestAir] = useState([]);

  const handleTestAir = () => {
    async function getAirTable() {
      const response = await fetch(
        `https://api.airtable.com/v0/applqK2pr4BxQlJ07/PlayHQ`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer key1Adz0lNfrpm3Y2`,
            "Content-Type": "application/json",
          },
        }
      );
      const jsonData = await response.json();
      setTestAir(jsonData.records);
      console.log(jsonData.records);
      // console.log(jsonData)
    }
    getAirTable();
  };

  return (
    <>
      <>
        <button onClick={handleTestAir}>Test</button>
        {testAir.map((item, index) => (
          <div key={index}>{JSON.stringify(item)}</div>
        ))}
      </>

      <div className="homepage">
        <CheapGamesGroup gamesByPrice={gamesByPrice} />
        <TopRatedGamesGroup gamesByMetacritic={gamesByMetacritic} />
        <RecentGames
          gamesByReleaseDate={gamesByReleaseDate}
          unixTimeStamp={unixTimeStamp}
        />
      </div>
    </>
  );
}

// const [testAir, setTestAir] = useState();
// useEffect(() => {
//   async function getAirTable() {
//     const response = await fetch(
//       `https://api.airtable.com/v0/applqK2pr4BxQlJ07/PlayHQ`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer key1Adz0lNfrpm3Y2`,
//         },
//       }
//     );
//     const jsonData = await response.json();
//     setTestAir(jsonData);
//   }
//   getAirTable();
// }, []);
// console.log(testAir?.records);
// const toTest = testAir?.records;
// const toTest = testAir.records

{
  /* <h2>
        <label>Choose an online game store:</label>
        <select name="stores" id="store-select">
          {sortedGameStore.map((store) => (
            <option key={store.storeID} value={store.storeName}>
              {store.storeName}
            </option>
          ))}
        </select>
      </h2> */
}
{
  /* {JSON.stringify(testAir)} */
}
{
  /* {toTest?.map((air) => (
        <ol key={air.id}>{air.fields?.title}</ol>
      ))} */
}
{
  /* {sortedGames.map((game) => (
          <ol key={game.gameID}>
            {game.title}
            <br />
            {unixTimeStamp(game.lastChange)}
            <br />
            <Link to={`/games/${game.gameID}`}>
              <img width="300" src={game.thumb} />
            </Link>{" "}
          </ol>
        ))} */
}
