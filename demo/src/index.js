import React from 'react';
import {render} from 'react-dom';
import InfiniteCalendar from '../../src';
import '../../styles.css';
import './demo.css';

const handleSelect = () => {
  console.log('select');
}

const handleScroll = () => {
  console.log("scroll");
};

const handleScrollEnd = () => {
  console.log("scroll end");
};

const handleMonthLoad = (year, month, minDate, maxDate) => {
  setTimeout(() => {
    console.log('load availability');
  }, 1000);
}

let times = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30"];

const minDate = new Date();
const maxDate = new Date();
maxDate.setUTCDate(maxDate.getUTCDate() + 365);

render(
  <InfiniteCalendar
    minDate={minDate}
    maxDate={maxDate}
    onSelect={handleSelect}
    onScroll={handleScroll}
    onScrollEnd={handleScrollEnd}
    onMonthLoaded={handleMonthLoad}
    withTimes={true}
    availableTimes={times}
  />,
  document.querySelector("#demo")
);
