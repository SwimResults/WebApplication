export class Clock {

    clockUpdateInterval: number = 1000;

    currentTime: string = "HH:mm:ss";
    hours: string = "HH";
    minutes: string = "mm";
    seconds: string = "ss";
    currentDate: string = "dd.MM.YYYY";
    time: Date = new Date();

    run(): void {
        this.fetchTime();

        setInterval(() => {
            this.fetchTime();
        }, this.clockUpdateInterval);
    }

    fetchTime(): void {
        this.time = new Date();
        this.hours = ("0" + this.time.getHours()).slice(-2);
        this.minutes = ("0" + this.time.getMinutes()).slice(-2);
        this.seconds = ("0" + this.time.getSeconds()).slice(-2);
        this.currentTime = this.hours + ":" + this.minutes + ":" + this.seconds;
        this.currentDate = this.time.getDate() + "." + (this.time.getMonth() + 1) + "." + this.time.getFullYear();
    }
}
