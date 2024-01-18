import "./styles.css";
import githubImg from "./github.png";
import { useEffect, useState } from "react";

// {
//   avatar_url,
//   name,
//   bio,
//   location,
//   followers,
//   following,
//   html_url, //github link
// }

function GitHubCard({ username }) {
  // const profileObj = {
  //   avtarURL: "",
  //   name: "",
  //   bio: "",
  //   location: "",
  //   followers: null,
  //   following: null,
  //   githubURL: "",
  // };
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.github.com/users/" + username);
        const git = await res.json();
        setProfile(git);
      } catch (e) {
        alert("Error Fetching data");
      }
    };
    fetchData();
  }, []);
  return (
    <div id="g-card">
      <div id="g-banner"></div>
      <div id="g-content">
        <center>
          <img src={profile.avatar_url} />
        </center>
        <p id="g-name">{profile.name}</p>
        <p id="g-bio">"{profile.bio}"</p>
        <hr />
        <div>
          <div id="g-loc">
            <img src="https://static.vecteezy.com/system/resources/previews/022/187/606/non_2x/map-location-pin-icon-free-png.png" />
            <span id="g-location">Location: {profile.location}</span>
          </div>
          <p>Followers: {profile.followers}</p>
          <p>Following: {profile.following}</p>
        </div>
      </div>
      <a id="g-btn" href={profile.html_url}>
        <img src={githubImg} />
        <span>GitHub</span>
      </a>
    </div>
  );
}
function GetUsernameCard({ setUsername }) {
  const [input, setinput] = useState("");
  return (
    <div id="g-get">
      <div>
        <p>Enter GitHub Username</p>
      </div>
      <input
        type="text"
        onInput={(e) => setinput(e.target.value)}
        placeholder="Username"
      />
      <button
        onClick={() => {
          setUsername(input);
        }}
      >
        Get Card
      </button>
    </div>
  );
}
export default function GitHub() {
  const [username, setUsername] = useState("");

  return (
    <>
      {username ? (
        <GitHubCard username={username} />
      ) : (
        <GetUsernameCard setUsername={setUsername} />
      )}
    </>
  );
}
