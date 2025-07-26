function showForm() {
  document.getElementById("landingPage").style.display = "none";
  document.getElementById("formPage").style.display = "block";
}

function backToLanding() {
  document.getElementById("landingPage").style.display = "flex";
  document.getElementById("formPage").style.display = "none";
}

function toggleEquipment() {
  const workoutPlace = document.getElementById("workoutPlace");
  const equipmentField = document.getElementById("equipmentField");
  equipmentField.style.display = workoutPlace.value === "home" ? "block" : "none";
}

// Sidebar toggle
document.getElementById("openSidebarBtn").addEventListener("click", () => {
  document.getElementById("sidebar").style.display = "flex";
});
document.getElementById("closeSidebarBtn").addEventListener("click", () => {
  document.getElementById("sidebar").style.display = "none";
});

document.getElementById("openSidebarBtn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.remove("hidden");
});

document.getElementById("closeSidebarBtn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.add("hidden");
});
