import { BattleshipsProvider } from "../contexts/useBattleships";

import { BattleZone } from "./BattleZone/BattleZone";
import { Legend } from "./Legend/Legend";

import styles from "./App.module.css";

function App() {
  return (
    <BattleshipsProvider>
      <div className={styles.appContainer}>
        <div className={styles.legend}>
          <Legend />
        </div>
        <div className={styles.alignCenter}>
          <div className={styles.fightingWaterContainer}>
            <BattleZone />
          </div>
        </div>
      </div>
    </BattleshipsProvider>
  );
}

export default App;
