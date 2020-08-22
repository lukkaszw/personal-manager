const moment = require('moment');

const generateDays = (tasks, month, year, daysInMonth, daysFromPrevMonth, daysFromNextMonth, beginDate, lastDate) => {
  const days = [];

  if(daysFromPrevMonth > 0) {
    const lastDayOfMonthBefore = beginDate.daysInMonth();
    const monthNrBefore = beginDate.month() + 1;
    const year = beginDate.year();
    const monthNrString = monthNrBefore > 9 ? monthNrBefore : `0${monthNrBefore}`;

    
    for( let i = lastDayOfMonthBefore - daysFromPrevMonth + 1; i <= lastDayOfMonthBefore; i++) {

      const tasksInDay = tasks.filter(task => (task.day === i && task.month === monthNrBefore));

      const day = {
        day: i,
        weekDay: moment(`${year}-${monthNrString}-${i}`).weekday(),
        tasks: tasksInDay,
        month: monthNrBefore,
      };

      days.push(day);
    }
  }

  for (let i = 1;i <= daysInMonth; i++) {

    const monthNrString = month > 9 ? month : `0${month}`;

    const tasksInDay = tasks.filter(task => (task.day === i && task.month === month));

    const day = {
      day: i,
      weekDay: moment(`${year}-${monthNrString}-${i > 9 ? i : `0${i}`}`).weekday(),
      tasks: tasksInDay,
      month: month,
    };

    days.push(day);
  }

  if(daysFromNextMonth > 0) {
    const monthNrNext = lastDate.month() + 1;
    const year = lastDate.year();
    const monthNrNextString = monthNrNext > 9 ? monthNrNext : `0${monthNrNext}`;

    for(let i = 1; i <= daysFromNextMonth; i++) {
      const tasksInDay = tasks.filter(task => (task.day === i && task.month === monthNrNext));

      const day = {
        day: i,
        weekDay: moment(`${year}-${monthNrNextString}-${i > 9 ? i : `0${i}`}`).weekday(),
        tasks: tasksInDay,
        month: monthNrNext,
      };

      days.push(day);
    }
  }

  return days;
}

module.exports = generateDays;