// Get the element that will trigger the tooltip

const tooltipTrigger = document.getElementById('tooltip-trigger');

// Get the tooltip element
const tooltip = document.getElementById('tooltip');

// Add an event listener to the trigger element
tooltipTrigger.addEventListener('click', () => {
    tooltip.classList.toggle('show');
});

tooltipTrigger.addEventListener('click', () => {
    const card2 = document.getElementById('card2');
    const avatar = document.getElementById('avatar');
    tooltipTrigger.classList.remove('show');
    tooltip.classList.toggle('hide');
    card2.classList.toggle('hide');
    avatar.classList.toggle('hide');
});

// Add an event listener to the document to hide the tooltip when clicked outside
document.addEventListener('click', (e) => {

  if (!tooltip.contains(e.target) && !tooltipTrigger.contains(e.target)) {

    // Hide the tooltip
    tooltip.classList.remove('show');

  }

});
