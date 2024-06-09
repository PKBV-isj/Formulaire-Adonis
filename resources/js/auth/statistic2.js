console.log('statistic1.js is loaded');
const ctx = document.getElementById('Charte');
const Charte = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['bon', 'mauvais', 'passable'],
        datasets: [{
            label: '# of Votes',
            data: [33, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 92, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 92, 1)',
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