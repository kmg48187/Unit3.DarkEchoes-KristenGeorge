import {episodeList} from "./data"
import { useState } from "react"


export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setselectedEpisode] = useState();



  function EpisodeDetails(){
    if(!selectedEpisode){
      return(
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to view details.</p>
        </section>
      );
    };
      return(
        <section className="details">
          <h2>Episode {selectedEpisode.id}</h2>
          <h2>{selectedEpisode.title}</h2>
          <p>{selectedEpisode.description}</p>
        </section>
      );
  }

  function Episodes(){
    return(
      <section className="episodeList">
        <h2>Episodes</h2>
        <ul className="list">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setselectedEpisode(episode)}>
              {episode.title}
              </li>
          ))}
        </ul>
      </section>
    );
  }


  return(

  <>
    <header>
      <h1>Dark Echoes</h1>
    </header>
    <main>
      <Episodes />
      <EpisodeDetails />
    </main>
  </>
  );

}
