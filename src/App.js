import "./App.css";
import Header from "./components/Header/Header";
import "./css/Button.css";
import Main from "./components/Main";
import ListOfButton from "./components/ListOfButtons";
import IntroSection from "./components/IntroSection";
import TabSection from "./components/TabSection";
import Feedback from "./components/FeedBack/Feedback";
import { useState } from "react";
import EffectSection from "./components/EffectSection/EffectSection";

function App() {
  const [tab, setTab] = useState("feedback");

  return (
    <>
      <Header />
      <TabSection act={tab} onChange={(current) => setTab(current)} />

      {tab === "main" && (
        <>
          <Main />
          <IntroSection />
          <ListOfButton />
        </>
      )}

      {tab === "feedback" && <Feedback />}
      {tab === "effect" && <EffectSection/>}
    </>
  );
}

export default App;
