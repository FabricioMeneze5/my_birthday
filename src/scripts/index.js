AOS.init();

var currentYear = new Date().getFullYear();
var eventDate = new Date(`Jun 29, ${currentYear} 00:00:00`);

function updateEventDate() {
    const currentDate = new Date();
    
    if (currentDate >= eventDate) {
        currentYear++;
        eventDate = new Date(`Jun 29, ${currentYear} 00:00:00`);
    }
}

const timer = setInterval( function() {
    updateEventDate();

    const currentDate = new Date();
    const eventTimeStamp = eventDate.getTime();
    const currentTimeStamp = currentDate.getTime();

    const timeUntilEvent = eventTimeStamp - currentTimeStamp;

    const dayMS = 1000 * 60 * 60 * 24;
    const hourMS = 1000 * 60 * 60;
    const minuteMS = 1000 * 60;

    const daysUntilEvent = Math.floor(timeUntilEvent / dayMS);
    const hoursUntilEvent = Math.floor((timeUntilEvent % dayMS) / hourMS);
    const minutesUntilEvent = Math.floor((timeUntilEvent % hourMS) / minuteMS);
    const secondsUntilEvent = Math.floor((timeUntilEvent % minuteMS) / 1000);

    document.getElementById('counter').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;
}, 1000);
