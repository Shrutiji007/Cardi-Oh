document.addEventListener('DOMContentLoaded', () => {

  // ==============================
  // Sidebar Open/Close Functions
  // ==============================

  function openSidebar() {
    document.getElementById('sidebar').style.width = '250px';
  }

  function closeSidebar() {
    document.getElementById('sidebar').style.width = '0';
  }

  document.getElementById('openSidebarBtn').addEventListener('click', openSidebar);
  document.getElementById('closeSidebarBtn').addEventListener('click', closeSidebar);


  // ==============================
  // Get Started Button Functionality
  // ==============================

  document.getElementById('getStartedBtn').addEventListener('click', () => {
    // Hide the landing page
    document.getElementById('landingPage').classList.add('hidden');
    // Show the form section
    document.getElementById('formSection').classList.remove('hidden');
    // Scroll to form section (optional)
    document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
  });


  // ==============================
  // Show Equipment Field (only if 'home' selected)
  // ==============================

  const preferenceRadios = document.querySelectorAll('input[name="preference"]');
  const equipmentCard = document.getElementById('equipmentCard');

  preferenceRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
      if (radio.value === 'home') {
        equipmentCard.classList.remove('hidden');
      } else {
        equipmentCard.classList.add('hidden');
      }
    });
  });


  // ==============================
  // Placeholder for Plan Generation
  // ==============================

  document.querySelector('.generate-btn').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form reload
    alert("Your personalized plan will appear here!");
  });

});
