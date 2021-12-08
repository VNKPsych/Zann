import { Link } from 'react-router-dom';
const History = () => {
    return ( 
            <div className="History">
                <h2 className="title">The history of Zann</h2>
                <h3 className="hyear">Year 14</h3>
                <div className="hlinks">
                    <h4><Link to="/history/AssaultonKorosSpaceworks">Assault on Koros Spaceworks</Link></h4>
                    <h4><Link to="/history/TheMercenaryGuildandSabotage">The Mercenary Guild and Sabotage</Link></h4>
                </div>
                <h3 className="hyear">Year 15</h3>
                <div className="hlinks">
                    <h4><Link to="/history/TheOctagonLeagueTakeover">The Octagon League Takeover</Link></h4>
                    <h4><Link to="/history/KuatSystemsEngineeringSabotage">Kuat Systems Engineering Sabotage</Link></h4>
                    <h4><Link to="/history/AssassinationOfAndyLongshot">Assassination of Andy Longshot</Link></h4>
                    <h4><Link to="/history/TerroristsInCoruscant">Terrorists in Coruscant</Link></h4>
                    <h4><Link to="/history/BlackSailsPrison">Black Sails Prison</Link></h4>
                </div>
                <h3 className="hyear">Year 16</h3>
                <div className="hlinks">
                    <h4><Link to="/history/ZannConsortiumRetaliation">Zann Consortium Retaliation</Link></h4>
                    <h4><Link to="/history/CrossingtheSun">Crossing the Sun</Link></h4>
                    <h4><Link to="/history/TaxingtheRebels">Taxing the Rebels</Link></h4>
                </div>
                <h3 className="hyear">Year 17</h3>
                <div className="hlinks">
                    <h4><Link to="/history/BactaThieves">Bacta Thieves</Link></h4>
                    <h4><Link to="/history/TriumvirateCoalitionsFallenKing">Triumvirate Coalition's Fallen King</Link></h4>
                    <h4><Link to="/history/ProfessionalExporters">Professional Exporters</Link></h4>
                    <h4><Link to="/history/TheLastoftheJixSiblings">The Last of the Jix Siblings</Link></h4>
                    <h4><Link to="/history/GetJawa">Get Jawa</Link></h4>
                    <h4><Link to="/history/StandOff">Stand Off</Link></h4>
                    <h4><Link to ="/history/Consequences">Consequences</Link></h4>
                    <h4><Link to="/history/Interference">Interference</Link></h4>
                </div>
                <h3 className="hyear">Year 18</h3>
                <div className="hlinks">
                    <h4><Link to="/history/AssetsAreWeakness">Assets Are Weakness</Link></h4>
                    <h4><Link to="/history/OneRogueDown">One Rogue Down</Link></h4>
                    <h4><Link to="/history/DullingtheEdge">Dulling the Edge</Link></h4>
                    <h4><Link to="/history/CrimsonoverGlomTho">Crimson over Glom Tho</Link></h4>
                    <h4><Link to="/history/ChissConflict">Chiss Conflict</Link></h4>
                </div>
                <h3 className="hyear">Year 19</h3>
                <div className="hlinks">
                    <h4><Link to="/history/BackWithAVengeance">Back With A Vengeance</Link></h4>
                </div>
            </div> 
     );
}
 
export default History;