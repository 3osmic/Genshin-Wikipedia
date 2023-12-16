const targetDate = new Date('Dec 22, 2023 19:00:00').getTime();

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
      // Get the current date and time
      const currentDate = new Date().getTime();

      // Calculate the time remaining
      const timeRemaining = targetDate - currentDate;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById('countdown-timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // Check if the countdown is over
      if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown-timer').innerHTML = 'Countdown expired';
      }
    }

    // Initial call to display the countdown immediately
    updateCountdown();