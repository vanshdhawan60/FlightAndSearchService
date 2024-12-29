function compareTime (timestring1, timestring2) {
    const dateTime1 = new Date (timestring1);
    const dateTime2 = new Date (timestring2);
    return dateTime1.getTime() < dateTime2.getTime();
}

module.exports = {
    compareTime,
}