import React, { PureComponent, Fragment } from "react";
import styles from "./Time.scss";

export default class Time extends PureComponent {
  render() {
    let { hasSelectedDay } = this.props;
    
    return (
      hasSelectedDay && (
        <div className={styles.root} key={`select-time`}>
          <span className={styles.timeItem}>07:00</span>
          <span className={styles.timeItem}>08:00</span>
          <span className={styles.timeItem}>09:00</span>
          <span className={styles.timeItem}>10:00</span>
          <span className={styles.timeItem}>11:00</span>
          <span className={styles.timeItem}>12:00</span>
          <span className={styles.timeItem}>13:00</span>
          <span className={styles.timeItem}>14:00</span>
          <span className={styles.timeItem}>15:00</span>
          <span className={styles.timeItem}>16:00</span>
          <span className={styles.timeItem}>17:00</span>
          <span className={styles.timeItem}>18:00</span>
          <span className={styles.timeItem}>19:00</span>
          <span className={styles.timeItem}>20:00</span>
          <span className={styles.timeItem}>21:00</span>
          <span className={styles.timeItem}>22:00</span>
          <span className={styles.timeItem}>23:00</span>
        </div>
      )
    );
  }
}
