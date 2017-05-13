module.exports = (ms = 0, { asArray = false, seconds = false } = { }) => {
  ms = ms / 1000;

  let hours = Math.floor(ms / 3600) || '00';
  let minutes = Math.floor((ms - (hours * 3600)) / 60) || '00';
  let _seconds = Math.floor(ms - (hours * 3600) - (minutes * 60)) || '00';

  hours = `0${hours}`.substr(-2);
  minutes = `0${minutes}`.substr(-2);
  _seconds = `0${_seconds}`.substr(-2);

  if (asArray) {
    return [hours, minutes, _seconds];
  }

  if (seconds) {
    return `${hours}sa ${minutes}dk ${_seconds}sn`;
  }

  return `${hours}sa ${minutes}dk`;
};
