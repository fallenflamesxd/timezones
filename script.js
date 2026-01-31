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

//EST time----------------------------------------------------

function updateESTClock() {
    const now = new Date();
    const estTime = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York'
    });
    document.getElementById('est_time').textContent = estTime;
}

updateESTClock();
setInterval(updateESTClock, 1000);

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

//ACDT time----------------------------------------------------

function updateACDTClock() {
    const now = new Date();
    const acdtTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Australia/Adelaide'
    });
    document.getElementById('acdt_time').textContent = acdtTime;
}

updateACDTClock();
setInterval(updateACDTClock, 1000);

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

// Time Converter ----------------------------------------------------

function getOffset(tz, date = new Date()) {
    const utc = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    const tzDate = new Date(date.toLocaleString('en-US', {timeZone: tz}));
    return (tzDate - utc) / 60000;
}

document.getElementById('convert_btn').addEventListener('click', () => {
    const sourceTimeInput = document.getElementById('source_time').value;
    const sourceTz = document.getElementById('source_tz').value;
    const targetTz = document.getElementById('target_tz').value;

    if (!sourceTimeInput) {
        document.getElementById('converted_time').textContent = 'Please enter a date and time.';
        return;
    }

    // Parse the input
    const [datePart, timePart] = sourceTimeInput.split('T');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hour, min] = timePart.split(':').map(Number);

    // Create fake Date (interpreted as local time)
    const fakeDate = new Date(year, month - 1, day, hour, min);

    // Get offsets
    const localOffset = fakeDate.getTimezoneOffset();
    const sourceOffset = getOffset(sourceTz, fakeDate);

    // Adjust to correct moment
    const correctDate = new Date(fakeDate.getTime() + (sourceOffset - localOffset) * 60000);

    // Format in target timezone
    const convertedTime = correctDate.toLocaleString('en-US', {
        timeZone: targetTz,
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    document.getElementById('converted_time').textContent = `Converted Time: ${convertedTime}`;
});