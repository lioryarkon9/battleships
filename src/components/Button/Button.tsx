import React from "react";

import styles from "./Button.module.css";

type TProps = {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isEnabled?: boolean;
};

export function Button({
  label,
  onClick,
  isEnabled = true,
}: TProps): React.JSX.Element {
  return (
    <button
      className={styles.container}
      onClick={onClick}
      disabled={!isEnabled}
    >
      {label}
    </button>
  );
}
