---
title: "Join"
title: 'Месячные Сессии'
date: 2023-07-13T21:57:45+05:30
draft: false
---

## Сессия №2 | 1 ИЮНЯ, 15:00 МСК

<div class='join-header-image'>
    <img src="/img/adiyogi3.avif" alt="Adiyogi Cover Image">
</div>

<div class="sh-divider" style="margin-top:-20px">
    <img src="/img/spandahall-banner.svg" alt="sh-divider" />
</div>

<div class="countdown">
    <span class="countdown-section">
        <span id="days" class="countdown-amount separator">00</span>
        <br />
        <span class="countdown-period">Дней</span>
    </span>
    <span class="countdown-section">
        <span id="hours" class="countdown-amount separator">00</span>
        <br />
        <span class="countdown-period">Час</span>
    </span>
    <span class="countdown-section">
        <span id="mins" class="countdown-amount separator">00</span>
        <br />
        <span class="countdown-period">Мин</span>
    </span>
    <span class="countdown-section">
        <span id="secs" class="countdown-amount">00</span>
        <br />
        <span class="countdown-period">Сек</span>
    </span>
</div>

<a href="https://us06web.zoom.us/j/81211691127?pwd=WXhkUU5kSmdyeVcrOURzdG1vYVA3dz09" id="join-btn" target="_blank"   class="cta-button disabled">Присоединиться*</a>
*Кнопка станет активна 10 мин до начала Сессии.

---

📚 На этом занятии мы сфокусируемся на одном важном и часто
используемом
<b>грамматическом правиле</b>, которое ускорит ваше изучение
английского. После этого, мы вместе решим <b>упражнения</b>, для
закрепления полученных знаний! 💪

Но это еще не все! Мы также расширим ваш <b>словарный запас</b> и
потренируем ваш <b>навык чтения</b> на захватывающей статье.

<script>
	// Set the date we're counting down to
	var countDownDate = new Date('2023-07-01T15:00:00.000+03:00').getTime();

	// Update the count down every 1 second
	var x = setInterval(function () {
		updateTimer(countDownDate);
	}, 1000);
</script>

<script>
	var y = setInterval(function () {
		var joinBtn = document.getElementById('join-btn');
		var countDownDate = new Date('2023-07-01T15:00:00.000+03:00').getTime();
		var now = new Date().getTime();
		var distance = countDownDate - now;
		var minutes = distance / (1000 * 60);

		if (minutes <= 10) {
			joinBtn.classList.remove('disabled');
		}
	}, 1000);
</script>

<style>
.join-header-image {
	clip-path: polygon(0 0, 100% 0, 100% 80%, 0 90%);
}
</style>
