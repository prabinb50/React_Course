function TimeDisplay() {
    let time = new Date();

    return <p className="clock-time">
        This is the current time: {time.toLocaleDateString()} - {""}{time.toLocaleTimeString()}
    </p>

}
export default TimeDisplay;