import { BattleshipsProvider } from "../contexts/useBattleships";
import { FightingWater } from "./FightingWater/FightingWater";

import { Actions } from "./Actions/Actions";

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
            <FightingWater />
          </div>
        </div>
      </div>
    </BattleshipsProvider>
  );
}

export default App;
