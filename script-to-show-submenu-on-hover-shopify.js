 <script>

// SCRIPT TO SHOW SUBMENU ON HOVER 
      
document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded');

  // Select the details element for the first menu (Details-HeaderMenu-4)
  const detailsElement = document.getElementById('Details-HeaderMenu-4');
  if (!detailsElement) {
    console.error('Details element not found');
    return;
  }

  // Prevent native click behavior and manage hover behavior manually
  const summaryElement = detailsElement.querySelector('summary');
  if (summaryElement) {
    // Manage hover behavior for the first menu
    detailsElement.addEventListener('mouseenter', () => {
      detailsElement.setAttribute('open', '');
      if (summaryElement) {
        summaryElement.setAttribute('aria-expanded', 'true');
        console.log('Hover: Set aria-expanded to true for Details-HeaderMenu-4');
      }
    });

    detailsElement.addEventListener('mouseleave', () => {
      detailsElement.removeAttribute('open');
      if (summaryElement) {
        summaryElement.setAttribute('aria-expanded', 'false');
        console.log('Hover: Set aria-expanded to false for Details-HeaderMenu-4');
      }
    });
  } else {
    console.warn('Summary element not found for Details-HeaderMenu-4');
  }

  // Select the details element for the second menu (Details-HeaderMenu-5)
  const detailsElement5 = document.getElementById('Details-HeaderMenu-5');
  if (!detailsElement5) {
    console.error('Details element not found for Details-HeaderMenu-5');
    return;
  }

  // Prevent native click behavior and manage hover behavior manually
  const summaryElement5 = detailsElement5.querySelector('summary');
  if (summaryElement5) {
    // Manage hover behavior for the second menu
    detailsElement5.addEventListener('mouseenter', () => {
      detailsElement5.setAttribute('open', '');
      if (summaryElement5) {
        summaryElement5.setAttribute('aria-expanded', 'true');
        console.log('Hover: Set aria-expanded to true for Details-HeaderMenu-5');
      }
    });

    detailsElement5.addEventListener('mouseleave', () => {
      detailsElement5.removeAttribute('open');
      if (summaryElement5) {
        summaryElement5.setAttribute('aria-expanded', 'false');
        console.log('Hover: Set aria-expanded to false for Details-HeaderMenu-5');
      }
    });
  } else {
    console.warn('Summary element not found for Details-HeaderMenu-5');
  }
});

</script>
