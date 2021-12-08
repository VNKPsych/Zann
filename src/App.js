import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Circle from './Circle';
import History from './History';
import AssaultonKorosSpaceworks from './history/AssaultonKorosSpaceworks';
import TheMercenaryGuildandSabotage from './history/TheMercenaryGuildandSabotage';
import TheOctagonLeagueTakeover from './history/TheOctagonLeagueTakeover';
import KuatSystemsEngineeringSabotages from './history/KuatSystemsEngineeringSabotage';
import AssassinationOfAndyLongshot from './history/AssassinationOfAndyLongshot';
import TerroristsInCoruscant from './history/TerroristsInCoruscant';
import BlackSailsPrison from './history/BlackSailsPrison';
import ZannConsortiumRetaliation from './history/ZannConsortiumRetaliation';
import CrossingtheSun from './history/CrossingtheSun';
import TaxingtheRebels from './history/TaxingtheRebels';
import BactaThieves from './history/BactaThieves';
import TriumvirateCoalitionsFallenKing from './history/TriumvirateCoalitionsFallenKing';
import ProfessionalExporters from './history/ProfessionalExporters';
import TheLastoftheJixSiblings from './history/TheLastoftheJixSiblings';
import GetJawa from './history/GetJawa';
import StandOff from './history/StandOff';
import Consequences from './history/Consequences';
import Interference from './history/Interference';
import AssetsAreWeakness from './history/AssetsAreWeakness';
import OneRogueDown from './history/OneRogueDown';
import DullingtheEdge from './history/DullingtheEdge';
import CrimsonoverGlomTho from './history/CrimsonoverGlomTho';
import ChissConflict from './history/ChissConflict';
import BackWithAVengeance from './history/BackWithAVengeance';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/circle">
              <Circle />
            </Route>
            <Route exact path="/history">
              <History />
            </Route>
            <Route exact path="/history/AssaultonKorosSpaceworks">
              <AssaultonKorosSpaceworks />
            </Route>
            <Route exact path="/history/TheMercenaryGuildandSabotage">
              <TheMercenaryGuildandSabotage />
            </Route>
            <Route exact path="/history/TheOctagonLeagueTakeover">
              <TheOctagonLeagueTakeover />
            </Route>
            <Route exact path="/history/KuatSystemsEngineeringSabotage">
              <KuatSystemsEngineeringSabotages />
            </Route>
            <Route exact path="/history/AssassinationOfAndyLongshot">
              <AssassinationOfAndyLongshot />
            </Route>
            <Route exact path="/history/TerroristsInCoruscant">
              <TerroristsInCoruscant />
            </Route>
            <Route exact path="/history/BlackSailsPrison">
              <BlackSailsPrison />
            </Route>
            <Route exact path="/history/ZannConsortiumRetaliation">
              <ZannConsortiumRetaliation />
            </Route>
            <Route exact path="/history/CrossingtheSun">
              <CrossingtheSun />
            </Route>
            <Route exact path="/history/TaxingtheRebels">
              <TaxingtheRebels />
            </Route>
            <Route exact path="/history/BactaThieves">
              <BactaThieves />
            </Route>
            <Route exact path="/history/TriumvirateCoalitionsFallenKing">
              <TriumvirateCoalitionsFallenKing />
            </Route>
            <Route exact path="history/ProfessionalExporters">
              <ProfessionalExporters />
            </Route>
            <Route exact path="/history/TheLastoftheJixSiblings">
              <TheLastoftheJixSiblings />
            </Route>
            <Route exact path="/history/GetJawa">
              <GetJawa />
            </Route>
            <Route exact path="/history/GetJawa">
              <GetJawa />
            </Route>
            <Route exact path="/history/StandOff">
              <StandOff />
            </Route>
            <Route exact path="/history/Consequences">
              <Consequences />
            </Route>
            <Route exact path="/history/Interference">
              <Interference />
            </Route>
            <Route exact path="/history/AssetsAreWeakness">
              <AssetsAreWeakness />
            </Route>
            <Route exact path="/history/OneRogueDown">
              <OneRogueDown />
            </Route>
            <Route exact path="/history/DullingtheEdge">
              <DullingtheEdge />
            </Route>
            <Route exact path="/history/CrimsonoverGlomTho">
              <CrimsonoverGlomTho />
            </Route>
            <Route exact path="/history/ChissConflict">
              <ChissConflict />
            </Route>
            <Route exact path="/history/BackWithAVengeance">
              <BackWithAVengeance />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
