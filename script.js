        // Chart data
        const salesData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Monthly Sales',
                data: [1000, 1200, 1500, 1800, 2000, 2200, 2500, 2800, 3000, 3200, 3500, 3800],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.3)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#fff',
                pointBorderColor: 'rgba(75, 192, 192, 1)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
                pointStyle: 'circle',
                pointRadius: 5
            }]
        };

        // Chart config
        const config = {
            type: 'line',
            data: salesData,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: '#fff'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Monthly Sales Over the Past Year',
                        color: '#fff',
                        font: {
                            size: 18
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Month',
                            color: '#fff',
                            font: {
                                size: 16
                            }
                        },
                        ticks: {
                            color: '#ffffff'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Sales ($)',
                            color: '#fff',
                            font: {
                                size: 16
                            }
                        },
                        ticks: {
                            color: '#ffffff'
                        },
                        beginAtZero: true
                    }
                }
            }
        };

        // Render chart
        const ctx = document.getElementById('salesChart').getContext('2d');
        let salesChart = new Chart(ctx, config);

        // Function to refresh chart data
        function refreshChart() {
            salesChart.data.datasets[0].data = salesChart.data.datasets[0].data.map(() => Math.floor(Math.random() * 4000 + 500));
            salesChart.update();
        }