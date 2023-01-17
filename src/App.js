import "./App.css";
import useFetch from "./Hooks/useFetch";
import useLocalStorageState from "./Hooks/useLocalStorageState";
import Card from "./Component/Card";
import { useState } from "react";
import Loader from "./Component/Loader";
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";

// import { MdDarkMode } from "react-icons";

function App() {
  const { data, isload } = useFetch("https://thronesapi.com/api/v2/Characters");
  const [theme, setTheme] = useLocalStorageState("theme", "light");
  const [qeury, setQeury] = useState("");

  if (isload) return <Loader theme={theme}/>;
  return (
    <div className="App" data-theme={theme}>
      <div className="header">
        <h1>Game Of Thrones</h1>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setQeury(e.target.value);
            }}
          />
          <button
            className="btn-them"
            onClick={() =>
              setTheme(() => (theme === "dark" ? "light" : "dark"))
            }
          >
            {theme === "dark" ? (
              <BsFillBrightnessHighFill />
            ) : (
              <BsFillMoonStarsFill />
            )}
          </button>
        </div>
      </div>
      <div className="contianer">
        <div className="char">
          {data
            ?.filter((item) => item.fullName.toLowerCase().includes(qeury))
            .map((char) => (
              <Card key={char.id} char={char} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
