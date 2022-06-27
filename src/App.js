
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppTab from './components/AppTab';
import IntroHero from './components/IntroHero';
import PluangSection from './components/PluangSection';
import PintuSection from './components/PintuSection';

function App() {
  const [selectedTab, setSelectedTab] = useState("pintu");
  const onChangeTab = (tab) => {
    setSelectedTab(tab);
    document.getElementById("app-tab").scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="App">
      <IntroHero />

      <AppTab id="app-tab" selectedTab={selectedTab} onChange={onChangeTab} />

      {selectedTab === "pluang" &&
        <PluangSection onChangeTab={onChangeTab} />
      }

      {selectedTab === "pintu" &&
        <PintuSection onChangeTab={onChangeTab} />
      }
    </div>
  );
}

export default App;
