import { BattleshipsProvider } from "../contexts/useBattleships";

import { Actions } from "./Actions/Actions";
import { BattleZone } from "./BattleZone/BattleZone";

import styles from "./App.module.css";

function App() {
  return (
    <BattleshipsProvider>
      <div className={styles.appContainer}>
        <div className={styles.actions}>
          <Actions />
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
