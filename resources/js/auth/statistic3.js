console.log('statistic1.js is loaded');
const troisieme = document.getElementById('physique');
const physiaque = new Chart(troisieme, {
  type: 'radar',
  data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
          label: '# of Votes',
          data: [33, 19, 33],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});