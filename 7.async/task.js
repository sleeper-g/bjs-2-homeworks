class AlarmClock {
  constructor(){
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback){
    if (time === null || time === undefined || callback === undefined){
      throw new Error('Отсутствуют обязательные аргументы')
    }
    if (this.alarmCollection.includes(time)){
      console.warn('Уже присутствует звонок на это же время')
    }
    this.alarmCollection.push({callback: callback, time: time, canCall: true})
  }
  removeClock(time){
     this.alarmCollection.filter(alarm => alarm.time === time).forEach(elem => this.alarmCollection.splice(this.alarmCollection.indexOf(alarm => alarm.time === elem.time), 1));
  }
  getCurrentFormattedTime(){
    return (new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    }))
  }
  start(){
    if (this.intervalId !== null){
      return
    }
    this.intervalId = setInterval(this.alarmCollection.forEach(elem => (elem.time === this.getCurrentFormattedTime() && elem.canCall === true).map(elem.canCall = false).map(elem.callback)
    ))
  }
  stop(){
    clearInterval()
    this.intervalId = null;
  }
  resetAllCalls(){
    this.alarmCollection.forEach(elem => elem.canCall = true)
  }
  clearAlarms(){
    this.stop()
    this.alarmCollection = []
  }
}
