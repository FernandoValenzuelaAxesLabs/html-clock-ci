"use strict";

const padTwoDigits = (value) => String(value).padStart(2, "0");

const getTimeParts = (date, use24Hour = false) => {
  const hours24 = date.getHours();

  return {
    hours: padTwoDigits(use24Hour ? hours24 : hours24 % 12 || 12),
    minutes: padTwoDigits(date.getMinutes()),
    seconds: padTwoDigits(date.getSeconds()),
    period: use24Hour ? "" : hours24 >= 12 ? "PM" : "AM",
  };
};

const formatTime = (date, use24Hour = false) => {
  const { hours, minutes, seconds, period } = getTimeParts(date, use24Hour);
  return `${hours}:${minutes}:${seconds}${period ? ` ${period}` : ""}`;
};

const formatDay = (date) =>
  new Intl.DateTimeFormat(undefined, { weekday: "long" }).format(date);

const formatDate = (date) =>
  new Intl.DateTimeFormat(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);

const startClock = () => {
  const elements = {
    time: document.querySelector("#clock-time"),
    hours: document.querySelector("#hours"),
    minutes: document.querySelector("#minutes"),
    seconds: document.querySelector("#seconds"),
    period: document.querySelector("#period"),
    day: document.querySelector("#clock-day"),
    date: document.querySelector("#clock-date"),
    format: document.querySelector("#time-format"),
  };

  const updateClock = () => {
    const now = new Date();
    const use24Hour = elements.format.checked;
    const time = getTimeParts(now, use24Hour);

    elements.hours.textContent = time.hours;
    elements.minutes.textContent = time.minutes;
    elements.seconds.textContent = time.seconds;
    elements.period.textContent = time.period;
    elements.period.hidden = use24Hour;
    elements.day.textContent = formatDay(now);
    elements.date.textContent = formatDate(now);
    elements.time.dateTime = now.toISOString();
    elements.time.setAttribute("aria-label", formatTime(now, use24Hour));
  };

  updateClock();
  elements.format.addEventListener("change", updateClock);
  window.setInterval(updateClock, 1000);
};

if (typeof document !== "undefined") {
  startClock();
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { padTwoDigits, getTimeParts, formatTime, startClock };
}
