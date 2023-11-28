import timeDiff from "timediff";

const getWorkedTime = (startDate: Date, endDate?: Date) => {
  const diff = timeDiff(startDate, endDate || new Date(), "YM");

  if (diff.months === 0) {
    return `${diff.years} yrs`;
  }

  if (diff.years === 0) {
    return `${diff.months} mos`;
  }

  return `${diff.years} yrs ${diff.months} mos`;
};

export default getWorkedTime;
