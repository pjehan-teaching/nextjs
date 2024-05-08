import {BarController, BarElement, CategoryScale, Chart, Legend, LinearScale, Title} from "chart.js";

const chartData = {
  traditional: { build: 30, server: 60, client: 10, isLoaded: false },
  csr: { build: 30, server: 10, client: 60, isLoaded: false  },
  ssr: { build: 30, server: 50, client: 20, isLoaded: false  },
  ssg: { build: 80, server: 10, client: 10, isLoaded: false  },
  isr: { build: 40, server: 50, client: 10, isLoaded: false  },
  summary: { isLoaded: false }
};

Chart.defaults.font.size = 22;
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarController);
Chart.register(BarElement);
Chart.register(Legend);
Chart.register(Title);

export function summaryChart() {
  if (chartData.summary.isLoaded) {
    return;
  }
  new Chart(document.getElementById('chart-summary'), {
    type: 'bar',
    data: {
      labels: ['Traditionnel', 'CSR', 'SSR', 'SSG', 'ISR'],
      datasets: [
        {
          label: 'Build',
          backgroundColor: '#03178C',
          borderColor: '#03178C',
          data: [chartData.traditional.build, chartData.csr.build, chartData.ssr.build, chartData.ssg.build, chartData.isr.build]
        },
        {
          label: 'Server',
          backgroundColor: '#F2CB05',
          borderColor: '#F2CB05',
          data: [chartData.traditional.server, chartData.csr.server, chartData.ssr.server, chartData.ssg.server, chartData.isr.server]
        },
        {
          label: 'Client',
          backgroundColor: '#D90B1C',
          borderColor: '#D90B1C',
          data: [chartData.traditional.client, chartData.csr.client, chartData.ssr.client, chartData.ssg.client, chartData.isr.client]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          display: true
        },
        y: {
          stacked: true,
          display: false
        }
      },
      plugins: {
        legend: {
          display: true,
          position: 'left'
        }
      }
    }
  });
  chartData.summary.isLoaded = true;
}

export function traditionalChart() {
  if (chartData.traditional.isLoaded) {
    return;
  }
  new Chart(document.getElementById('chart-traditional'), {
    type: 'bar',
    data: {
      labels: ['Traditionnel'],
      datasets: [
        {
          label: 'Build',
          backgroundColor: '#03178C',
          borderColor: '#03178C',
          data: [chartData.traditional.build]
        },
        {
          label: 'Server',
          backgroundColor: '#F2CB05',
          borderColor: '#F2CB05',
          data: [chartData.traditional.server]
        },
        {
          label: 'Client',
          backgroundColor: '#D90B1C',
          borderColor: '#D90B1C',
          data: [chartData.traditional.client]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          display: false
        },
        y: {
          stacked: true,
          display: false
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Traditionnel'
        },
        legend: {
          display: true,
          position: 'left'
        }
      }
    }
  });
  chartData.traditional.isLoaded = true;
}

export function csrChart() {
  if (chartData.csr.isLoaded) {
    return;
  }
  new Chart(document.getElementById('chart-csr'), {
    type: 'bar',
    data: {
      labels: ['CSR'],
      datasets: [
        {
          label: 'Build',
          backgroundColor: '#03178C',
          borderColor: '#03178C',
          data: [chartData.csr.build]
        },
        {
          label: 'Server',
          backgroundColor: '#F2CB05',
          borderColor: '#F2CB05',
          data: [chartData.csr.server]
        },
        {
          label: 'Client',
          backgroundColor: '#D90B1C',
          borderColor: '#D90B1C',
          data: [chartData.csr.client]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          display: false
        },
        y: {
          stacked: true,
          display: false
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'CSR'
        },
        legend: {
          display: true,
          position: 'left'
        }
      }
    }
  });
  chartData.csr.isLoaded = true;
}

export function ssrChart() {
  if (chartData.ssr.isLoaded) {
    return;
  }
  new Chart(document.getElementById('chart-ssr'), {
    type: 'bar',
    data: {
      labels: ['SSR'],
      datasets: [
        {
          label: 'Build',
          backgroundColor: '#03178C',
          borderColor: '#03178C',
          data: [chartData.ssr.build]
        },
        {
          label: 'Server',
          backgroundColor: '#F2CB05',
          borderColor: '#F2CB05',
          data: [chartData.ssr.server]
        },
        {
          label: 'Client',
          backgroundColor: '#D90B1C',
          borderColor: '#D90B1C',
          data: [chartData.ssr.client]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          display: false
        },
        y: {
          stacked: true,
          display: false
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'SSR'
        },
        legend: {
          display: true,
          position: 'left'
        }
      }
    }
  });
  chartData.ssr.isLoaded = true;
}

export function ssgChart() {
  if (chartData.ssg.isLoaded) {
    return;
  }
  new Chart(document.getElementById('chart-ssg'), {
    type: 'bar',
    data: {
      labels: ['SSG'],
      datasets: [
        {
          label: 'Build',
          backgroundColor: '#03178C',
          borderColor: '#03178C',
          data: [chartData.ssg.build]
        },
        {
          label: 'Server',
          backgroundColor: '#F2CB05',
          borderColor: '#F2CB05',
          data: [chartData.ssg.server]
        },
        {
          label: 'Client',
          backgroundColor: '#D90B1C',
          borderColor: '#D90B1C',
          data: [chartData.ssg.client]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          display: false
        },
        y: {
          stacked: true,
          display: false
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'SSG'
        },
        legend: {
          display: true,
          position: 'left'
        }
      }
    }
  });
  chartData.ssg.isLoaded = true;
}

export function isrChart() {
  if (chartData.isr.isLoaded) {
    return;
  }
  new Chart(document.getElementById('chart-isr'), {
    type: 'bar',
    data: {
      labels: ['ISR'],
      datasets: [
        {
          label: 'Build',
          backgroundColor: '#03178C',
          borderColor: '#03178C',
          data: [chartData.isr.build]
        },
        {
          label: 'Server',
          backgroundColor: '#F2CB05',
          borderColor: '#F2CB05',
          data: [chartData.isr.server]
        },
        {
          label: 'Client',
          backgroundColor: '#D90B1C',
          borderColor: '#D90B1C',
          data: [chartData.isr.client]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          display: false
        },
        y: {
          stacked: true,
          display: false
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'ISR'
        },
        legend: {
          display: true,
          position: 'left'
        }
      }
    }
  });
  chartData.isr.isLoaded = true;
}


