class AlarmClock {
  constructor(){
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback){
    if (!time || !callback){
      throw new Error('Отсутствуют обязательные аргументы')
    }
    if (this.alarmCollection.some(elem => elem.time === time)){
      console.warn('Уже присутствует звонок на это же время')
    }
    this.alarmCollection.push({callback: callback, time: time, canCall: true})
  }
  removeClock(time){
     this.alarmCollection = this.alarmCollection.filter(elem => elem.time !== time)
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
    };
    this.alarmCollection.forEach(elem => {
      if (elem.time === this.getCurrentFormattedTime() && elem.canCall){
        elem.canCall = false;
      this.intervalId = setInterval(elem.callback, 1000);
      }
    })
  };
  stop(){
    clearInterval(this.intervalId)
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
