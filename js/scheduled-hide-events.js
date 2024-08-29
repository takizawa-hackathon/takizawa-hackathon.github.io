window.onload = () => {
  const elements = document.querySelectorAll('.hideable-element');
  let visibleEventCount = 0;

  elements.forEach(element => {
    const showUntil = element?.getAttribute('data-show-until');
    if (!showUntil) return;

    const [year, month, day] = showUntil.split('-').map(Number);
    const showUntilDate = new Date(Date.UTC(year, month - 1, day, 14, 59, 59));
    const currentDate = new Date();

    if (currentDate > showUntilDate) {
      element.style.display = 'none';
    } else {
      visibleEventCount++;
    }
  });

  if (visibleEventCount === 0) {
    document.getElementById('event-container').innerHTML = `
      <div class="col-md-12">
        <p>現在予定されているスポンサーイベントはありません。</p>
      </div>
    `;
  }
};
