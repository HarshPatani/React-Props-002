import "./App.css";
import { Card } from "./components/Card";

function App() {
  const movies = [
    {
      title: "Bright",
      year: "2017, David Ayer",
      duration: "117 min",
      genre: "Action, Crime, Fantasy",
      description:
        "Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.",
      bg_image:
        "https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg",
      poster:
        "https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg",
    },
    {
      title: "Tomb Raider",
      year: "2018, Roar Uthaug",
      duration: "125 min",
      genre: "Action, Fantasy",
      description:
        "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
      bg_image:
        "https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png",
      poster: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
    },
    {
      title: "Black Panther",
      year: "2018, Ryan Coogler",
      duration: "134 min",
      genre: "Action, Adventure, Sci-Fi",
      description:
        "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
      bg_image:
        "https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg",
      poster: "https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
    },
  ];
  return (
    <main>
      <div className="card-container">
        {movies.map((e, idx) => {
          return <Card key={idx} props={e} />;
        })}
      </div>
    </main>
  );
}

export default App;
