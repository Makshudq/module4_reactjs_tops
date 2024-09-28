import { useState } from "react";

import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Mainpublic from "./component/Mainpublic";
import Mainprivate from "./component/Mainprivate";

function App() {
  const [count, setCount] = useState(false);

  function changeMain() {
    count ? setCount(false) : setCount(true);
  }

  return (
    <>
      <Header changeMain={changeMain} count={count} />
      {count ? <Mainprivate /> : <Mainpublic />}

      <Footer />
    </>
  );
}

export default App;
