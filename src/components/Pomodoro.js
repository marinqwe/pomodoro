import React from 'react';

class Tomato extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: false,
            totalTime: 25 * 60,
            title: 'LETS GOOOOOOOO'
        };
    }
    componentDidMount() {}
    startTimer = () => {
        this.interval = setInterval(() => {
            this.countDown();
        }, 1000);
    };
    stopTimer = () => {
        clearInterval(this.interval);
        this.setState(() => ({
            timer: false,
            title: 'Haha jk not final dont give up pls'
        }));
    };
    resetTimer = () => {
        clearInterval(this.interval);
        this.setState(() => ({
            totalTime: 25 * 60,
            timer: false,
            title: 'LETS GOOOOOOO'
        }));
    };
    countDown = () => {
        let totalTime = this.state.totalTime;
        this.setState(() => ({
            totalTime: totalTime - 1,
            title: 'ITS THE FINAL COUNTDOOOOWN',
            timer: true
        }));
    };
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    formatTime = time => {
        return (time < 10 ? '0' : '') + time;
    };
    render() {
        const { title, totalTime, timer } = this.state;
        const minutes = this.formatTime(Math.floor(totalTime / 60));
        const seconds = this.formatTime(totalTime - minutes * 60);
        console.log(minutes, seconds);
        return (
            <div className="content-container">
                <div className="title">{title}</div>
                <div className="timer">
                    <span>{minutes}</span>
                    <span>:</span>
                    <span>{seconds}</span>
                </div>
                <div className="buttons">
                    {!timer &&
                        totalTime === 1500 && (
                            <button onClick={this.startTimer} className="button">
                                Play
                            </button>
                        )}
                    {!timer &&
                        totalTime < 1500 && (
                            <div>
                                <button onClick={this.startTimer} className="button">
                                    Play
                                </button>
                                <button onClick={this.resetTimer} className="button">
                                    Reset
                                </button>
                            </div>
                        )}
                    {timer &&
                        totalTime < 1500 && (
                            <div>
                                <button onClick={this.stopTimer} className="button">
                                    Pause
                                </button>
                                <button onClick={this.resetTimer} className="button">
                                    Reset
                                </button>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

export default Tomato;
