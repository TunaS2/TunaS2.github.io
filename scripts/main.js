let activePopup = null;
let dragData = {
  isDragging: false,
  startX: 0,
  startY: 0,
  initialX: 0,
  initialY: 0,
};

function openPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.classList.add("active");
  activePopup = popupId;

  // Center the popup on screen
  const rect = popup.getBoundingClientRect();
  popup.style.left = (window.innerWidth - rect.width) / 2 + "px";
  popup.style.top = (window.innerHeight - rect.height) / 2 + "px";
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.classList.remove("active");
  if (activePopup === popupId) {
    activePopup = null;
  }
}

// Drag functionality
document.addEventListener("mousedown", function (e) {
  if (
    e.target.classList.contains("popup-header") ||
    e.target.classList.contains("popup-title")
  ) {
    const popup = e.target.closest(".popup");
    if (!popup) return;

    dragData.isDragging = true;
    dragData.startX = e.clientX;
    dragData.startY = e.clientY;

    const rect = popup.getBoundingClientRect();
    dragData.initialX = rect.left;
    dragData.initialY = rect.top;

    popup.classList.add("dragging");
    document.body.style.userSelect = "none";

    // Attach mousemove and mouseup to document
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }
});

function handleMouseMove(e) {
  if (!dragData.isDragging) return;

  const popup = document.querySelector(".popup.dragging");
  if (!popup) return;

  const deltaX = e.clientX - dragData.startX;
  const deltaY = e.clientY - dragData.startY;

  let newX = dragData.initialX + deltaX;
  let newY = dragData.initialY + deltaY;

  // Keep popup within viewport bounds
  const rect = popup.getBoundingClientRect();
  newX = Math.max(0, Math.min(newX, window.innerWidth - rect.width));
  newY = Math.max(0, Math.min(newY, window.innerHeight - rect.height));

  popup.style.left = newX + "px";
  popup.style.top = newY + "px";
}

function handleMouseUp() {
  if (!dragData.isDragging) return;

  dragData.isDragging = false;
  document.body.style.userSelect = "";

  const popup = document.querySelector(".popup.dragging");
  if (popup) {
    popup.classList.remove("dragging");
  }

  // Remove event listeners
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
}

// Close popup when clicking outside
document.addEventListener("click", function (e) {
  if (
    activePopup &&
    !e.target.closest(".popup") &&
    !e.target.closest(".main-button")
  ) {
    closePopup(activePopup);
  }
});

// Prevent popup from closing when clicking inside it
document.querySelectorAll(".popup").forEach((popup) => {
  popup.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});
