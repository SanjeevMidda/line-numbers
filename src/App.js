import { useState } from "react";
import "./index.css";

function App() {
  const [lineStatus, setLineStatus] = useState({
    lineOne: true,
    lineTwo: true,
    lineThree: true,
    lineFour: true,
    lineFive: true,
  });

  console.log(lineStatus);

  return (
    <div className="App">
      <div
        className="container"
        onClick={() =>
          setLineStatus({ ...lineStatus, lineOne: !lineStatus.lineOne })
        }
        style={{ rotate: lineStatus.lineOne ? "0deg" : "180deg" }}
      >
        <h1>1</h1>
        <div
          className="line"
          style={{
            backgroundColor: lineStatus.lineOne ? "greenyellow" : "blue",
          }}
        ></div>
      </div>
      <div
        className="container"
        onClick={() =>
          setLineStatus({ ...lineStatus, lineTwo: !lineStatus.lineTwo })
        }
        style={{ rotate: lineStatus.lineTwo ? "0deg" : "180deg" }}
      >
        <div
          className="line"
          style={{
            backgroundColor: lineStatus.lineTwo ? "greenyellow" : "blue",
          }}
        ></div>

        <h1>2</h1>
      </div>
      <div
        className="container"
        onClick={() =>
          setLineStatus({ ...lineStatus, lineThree: !lineStatus.lineThree })
        }
        style={{ rotate: lineStatus.lineThree ? "0deg" : "180deg" }}
      >
        <h1>3</h1>
        <div
          className="line"
          style={{
            backgroundColor: lineStatus.lineThree ? "greenyellow" : "blue",
          }}
        ></div>
      </div>
      <div
        className="container"
        onClick={() =>
          setLineStatus({ ...lineStatus, lineFour: !lineStatus.lineFour })
        }
        style={{ rotate: lineStatus.lineFour ? "0deg" : "180deg" }}
      >
        <div
          className="line"
          style={{
            backgroundColor: lineStatus.lineFour ? "greenyellow" : "blue",
          }}
        ></div>

        <h1>4</h1>
      </div>
      <div
        className="container"
        onClick={() =>
          setLineStatus({ ...lineStatus, lineFive: !lineStatus.lineFive })
        }
        style={{ rotate: lineStatus.lineFive ? "0deg" : "180deg" }}
      >
        <h1>5</h1>
        <div
          className="line"
          style={{
            backgroundColor: lineStatus.lineFive ? "greenyellow" : "blue",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
