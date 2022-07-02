export const formatTime = (timeNumber) => {
  if (timeNumber <= 9) {
    return `0${timeNumber}`;
  }

  return timeNumber;
};
