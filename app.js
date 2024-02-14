const container = document.querySelector('.bars');
    let bars = [];

    function generateBars(numBars, maxHeight) {
      container.innerHTML = ''; // Clear previous bars
      for (let i = 0; i < numBars; i++) {
        const height = Math.floor(Math.random() * maxHeight) + 20;
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${height}px`;
        container.appendChild(bar);
        bars.push(bar);
      }
    }

    async function bubbleSort() {
      for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
          bars[j].style.backgroundColor = 'red';
          bars[j + 1].style.backgroundColor = 'red';

          await new Promise(resolve => setTimeout(resolve, 50));

          const height1 = parseInt(bars[j].style.height);
          const height2 = parseInt(bars[j + 1].style.height);

          if (height1 > height2) {
            const temp = bars[j].style.height;
            bars[j].style.height = bars[j + 1].style.height;
            bars[j + 1].style.height = temp;
          }

          bars[j].style.backgroundColor = 'dodgerblue';
          bars[j + 1].style.backgroundColor = 'dodgerblue';
        }
      }
    }

    function startSorting() {
      const numBars = parseInt(document.getElementById('numBars').value);
      const maxHeight = parseInt(document.getElementById('maxHeight').value);
      generateBars(numBars, maxHeight);
      bubbleSort();
    }