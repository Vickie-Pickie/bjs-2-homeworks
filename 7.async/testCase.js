class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Параметр id не передан');
        }

        if (this.alarmCollection.find(item => item.id === id)) {
            console.error('Будильник с таким id уже существует');
            return;
        }

        this.alarmCollection.push({
            id,
            time,
            callback
        });
    }

    removeClock(id) {
        const index = this.alarmCollection.findIndex(item => item.id === id);
        if (index === -1) {
            return false;
        }
        this.alarmCollection.splice(index, 1);
        return true;

    }

    getCurrentFormattedTime() {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if (hours < 10) {
            hours = '0' + hours;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        return `${hours}:${minutes}`;
    }

    checkClock(item, timeNow) {
        if (timeNow === item.time) {
            item.callback();
        }


    }
    start() {
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                const timeNow = this.getCurrentFormattedTime();
                this.alarmCollection.forEach(item => {
                    this.checkClock(item, timeNow);
                });
            }, 1000);
        }
    }



    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(item => {
            console.log(`Будильник ${item.id} заведен на ${item.time}`);
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}
function getFormattedTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return `${hours}:${minutes}`;
}

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}


//TestCases

let alarm = new AlarmClock();
const now = new Date();

alarm.addClock(getFormattedTime(now), () => console.log('Пора есть!'), 1);
alarm.addClock(getFormattedTime(addMinutes(now, 1)), () => { console.log('Давай вставай уже'); alarm.removeClock(2) }, 2);
//alarm.addClock(getFormattedTime(addMinutes(now, 1)), () => console.log('Иди умываться'));
alarm.addClock(getFormattedTime(addMinutes(now, 2)), () => {
    console.log('Вставай, а то проспишь');
    alarm.clearAlarms();
    alarm.printAlarms();
}, 3);
alarm.addClock(getFormattedTime(addMinutes(now, 5)), () => console.log('Вставай, а то проспишь!'), 1);
alarm.printAlarms();
alarm.start();
