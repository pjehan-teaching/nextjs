import Prism from 'prismjs';
import {summaryChart, traditionalChart, csrChart, ssrChart, ssgChart, isrChart} from "./js/charts";
import './css/style.scss';

require.context('./images', false, /\.(png|jpe?g|svg|gif)$/); // Import all images

document.getElementById('revealexpress').addEventListener('loaded', function (event) {

  const Reveal = event.detail.Reveal;
  const loadedSlide = Reveal.getCurrentSlide();

  Prism.highlightAll();

  Reveal.addEventListener('chart-summary', summaryChart);
  if (loadedSlide.dataset.state === 'chart-summary') {
    summaryChart();
  }

  Reveal.addEventListener('chart-traditional', traditionalChart);
  if (loadedSlide.dataset.state === 'chart-traditional') {
    traditionalChart();
  }

  Reveal.addEventListener('chart-csr', csrChart);
  if (loadedSlide.dataset.state === 'chart-csr') {
    csrChart();
  }

  Reveal.addEventListener('chart-ssr', ssrChart);
  if (loadedSlide.dataset.state === 'chart-ssr') {
    ssrChart();
  }

  Reveal.addEventListener('chart-ssg', ssgChart);
  if (loadedSlide.dataset.state === 'chart-ssg') {
    ssgChart();
  }

  Reveal.addEventListener('chart-isr', isrChart);
  if (loadedSlide.dataset.state === 'chart-isr') {
    isrChart();
  }

});
