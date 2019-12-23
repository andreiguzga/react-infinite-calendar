import React, { Component, Fragment } from "react";
import styles from "./Time.scss";

export default class Time extends Component {
  constructor(props) {
    super(...arguments);

    this.state = {
      availableTimes: props.availableTimes,
    };
  }

  renderTimes() {
    let timeRows = [];
    let { availableTimes } = this.state;


    if (availableTimes.length > 0) {
      for (let i = 0, len = availableTimes.length; i < len; i++) {
        let time = availableTimes[i];
        timeRows[i] = <span key={`time-${i}`} className={styles.timeItem}>{time}</span>;
      }
    }

    return timeRows;
  }

  render() {
    let { hasSelectedDay } = this.props;

    return (
      hasSelectedDay && (
        <div className={styles.root} key={`select-time`}>
          {this.renderTimes()}
        </div>
      )
    );
  }
}
