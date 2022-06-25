
import { useState } from 'react';
import './App.css';
import AppTab from './components/AppTab';
import IntroHero from './components/IntroHero';
import PluangSection from './components/PluangSection';
import PintuSection from './components/PintuSection';

function App() {
  const [selectedTab, setSelectedTab] = useState("pluang");
  const onChangeTab = (tab) => {
    setSelectedTab(tab);
  }

  return (
    <div className="App">
      <IntroHero />

      <AppTab selectedTab={selectedTab} onChange={onChangeTab} />

      {selectedTab === "pluang" &&
        <PluangSection />
      }

      {selectedTab === "pintu" &&
        <PintuSection />
      }
    </div>
  );
}

export default App;
