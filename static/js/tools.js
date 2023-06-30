function timeUntilDate(date) {
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
	);
	var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var secs = Math.floor((distance % (1000 * 60)) / 1000);

	return {
		days: days,
		hours: hours,
		mins: mins,
		secs: secs,
		total: distance / (24 * 1000),
	};
}
function prependZero(num) {
  return (String(num).length < 2 ? '0' : "") + num;
}
function updateTimer(date) {
	var t = timeUntilDate(date);

	// If the count down is over, write some text
	if (t.total < 0) {
		t = { days: 0, hours: 0, mins: 0, secs: 0, total: 0 };
	}

	// Output the result in the timer
  document.getElementById('days').innerHTML = prependZero(t.days);
  document.getElementById('hours').innerHTML = prependZero(t.hours);
document.getElementById('mins').innerHTML = prependZero(t.mins);
  document.getElementById('secs').innerHTML = prependZero(t.secs);
}
