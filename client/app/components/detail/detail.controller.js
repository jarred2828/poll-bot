import angular from 'angular';
import Chart from 'chart.js';

Chart.defaults.global.legend.display = false;

class DetailController {
  static $inject = [];
  constructor() {
    this.name = 'detail';
    this.dateInfo = {
      start: new Date(this.pollInfo.start),
      end: new Date(this.pollInfo.end)
    };
    this.renderChart();
  }

  renderChart() {
    let ctx = document.getElementById('pie-chart').getContext('2d');
    ctx.canvas.width = 150;
    ctx.canvas.height = 150;
    let pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Answer1', 'Answer2', 'Answer3'],
        datasets: [
          {
            data: [300, 50, 150],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
            hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffce56']
          }
        ]
      }
    });
  }
}

export default DetailController;