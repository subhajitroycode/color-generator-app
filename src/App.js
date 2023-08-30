import { useEffect, useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import { ToastContainer } from "react-toastify";
import alert from "./notify";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#e1947a").all(10));

  useEffect(() => {
    if (success) {
      alert(true);
    }

    if (error) {
      alert(false);
    }

    setSuccess(false);
    setError(false);
  }, [success, error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(colorValue).all(10);
      setList(colors);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div className="App">
      <main>
        <section className="container">
          <h3>color generator app</h3>
          <form className="color-form" onSubmit={handleSubmit}>
            <input
              type="color"
              value={colorValue}
              onChange={(e) => setColorValue(e.target.value)}
            />
            <input
              type="text"
              placeholder="#e1947a"
              value={colorValue}
              onChange={(e) => setColorValue(e.target.value)}
            />
            <button className="btn" type="submit">
              generate color
            </button>
          </form>
        </section>
        <section className="colors">
          {list.map((color, index) => (
            <SingleColor
              key={index}
              index={index}
              {...color}
              hex={color.hex}
              setSuccess={setSuccess}
            />
          ))}
        </section>
        <ToastContainer />
      </main>
    </div>
  );
}

export default App;
