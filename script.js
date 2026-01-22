//USER time----------------------------------------------------

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
document.getElementById('user_zone_text').textContent = userTimeZone;


function updateClock() {
    const now = new Date();

    const timeString = now.toLocaleTimeString();
    document.getElementById('user_time').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);

//GMT time----------------------------------------------------

function updateGMTClock() {
    const now = new Date();
    const gmtTime = now.toLocaleTimeString('en-US', {
        timeZone: 'UTC'
    });
    document.getElementById('gmt_time').textContent = gmtTime;
}

updateGMTClock();
setInterval(updateGMTClock, 1000);

//CET time----------------------------------------------------

function updateCETClock() {
    const now = new Date();
    const cetTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Europe/Paris'
    });
    document.getElementById('cet_time').textContent = cetTime;
}

updateCETClock();
setInterval(updateCETClock, 1000);

//GST time----------------------------------------------------

function updateGSTClock() {
    const now = new Date();
    const gstTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Atlantic/South_Georgia'
    });
    document.getElementById('gst_time').textContent = gstTime;
}

updateGSTClock();
setInterval(updateGSTClock, 1000);

//IST time----------------------------------------------------

function updateISTClock() {
    const now = new Date();
    const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata'
    });
    document.getElementById('ist_time').textContent = istTime;
}

updateISTClock();
setInterval(updateISTClock, 1000);

//HKT time----------------------------------------------------

function updateHKTClock() {
    const now = new Date();
    const hktTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Hong_Kong'
    });
    document.getElementById('hkt_time').textContent = hktTime;
}

updateHKTClock();
setInterval(updateHKTClock, 1000);

//AEST time----------------------------------------------------

function updateAESTClock() {
    const now = new Date();
    const aestTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Australia/Brisbane'
    });
    document.getElementById('aest_time').textContent = aestTime;
}

updateAESTClock();
setInterval(updateAESTClock, 1000);

//AEDT time----------------------------------------------------

function updateAEDTClock() {
    const now = new Date();
    const aedtTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Australia/Sydney'
    });
    document.getElementById('aedt_time').textContent = aedtTime;
}

updateAEDTClock();
setInterval(updateAEDTClock, 1000);

//NZDT time----------------------------------------------------

function updateNZDTClock() {
    const now = new Date();
    const nzdtTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Pacific/Auckland'
    });
    document.getElementById('nzdt_time').textContent = nzdtTime;
}

updateNZDTClock();
setInterval(updateNZDTClock, 1000);