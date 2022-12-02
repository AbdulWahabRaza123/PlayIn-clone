import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
const play = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return mount ? (
    <>
      <Navbar title="Play & Earn" />
      <h1>Hello PLay</h1>
    </>
  ) : (
    ""
  );
};

export default play;
