
let countdown;
    let minutesInput = document.getElementById('minutes');
    let timerDisplay = document.getElementById('timer');
    let playButton = document.querySelector('button');
    let pauseButton = document.getElementById('pauseButton');

    function startTimer() {
      let minutes = parseInt(minutesInput.value, 10);

      if (isNaN(minutes) || minutes <= 0) {
        alert('Please enter a valid positive number of minutes.');
        return;
      }

      playButton.disabled = true;
      pauseButton.disabled = true;

      let seconds = minutes * 60;

      countdown = setInterval(function () {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let remainingSeconds = seconds % 60;

        timerDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

        if (seconds === 0) {
          clearInterval(countdown);
          playButton.disabled = false;
          pauseButton.disabled = true;
        } else {
          seconds--;
        }
      }, 1000);
    }

    function resetTimer() {
      clearInterval(countdown);
      timerDisplay.textContent = '00:00:00';
      playButton.disabled = false;
      pauseButton.disabled = true;
    }

    function pauseTimer() {
      clearInterval(countdown);
      playButton.disabled = false;
      pauseButton.disabled = true;
    }
    minutesInput.addEventListener('input', function () {
      clearInterval(countdown);
      timerDisplay.textContent = '00:00:00';
      playButton.disabled = false;
      pauseButton.disabled = true;
    });
