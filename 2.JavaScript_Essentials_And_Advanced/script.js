const imageUrls = [
    "https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?w=740&t=st=1689573433~exp=1689574033~hmac=852b98e11436480feb50e751b1a971a635b6f480ab28f3602ed604d5a776ea58",
    "https://img.freepik.com/premium-photo/two-doner-kebabs-shawarmas-with-ingredients-floating-air-orange-gradient-background_120795-931.jpg",
    "https://img.freepik.com/free-photo/christmas-mood_181624-9816.jpg?t=st=1689512508~exp=1689513108~hmac=55eeb2c3f9787e7f12126a801a315c2c0886d9f45bc1467dda0326c22ac5ec91",
    "https://img.freepik.com/free-photo/hamburger-wooden-board-with-copy-space_23-2148614039.jpg?w=740&t=st=1689573626~exp=1689574226~hmac=cf5b47734b329709525ca1a7144f59a6ffb064caede7f7a4d428404d50fbbd18",
    "https://img.freepik.com/free-photo/composition-with-tasty-hamburger-copy-space_23-2148614082.jpg?t=st=1689573626~exp=1689574226~hmac=73140bd8d345ad03ca5fec01e9ee1606b45bf6cf15b573aa7dcc28576a67ded9",
    "https://img.freepik.com/free-photo/arrangement-delicious-hamburgers-with-copy-space_23-2148614105.jpg",
    "https://img.freepik.com/premium-photo/hamburger-fries-table_7939-1828.jpg",
  ];
  
  let currentImageIndex = 0;

  // Function to switch main slider image
  function switchImage(imageUrl) {
    const sliderContainer = document.getElementById("sliderContainer");
    sliderContainer.style.backgroundImage = `url(${imageUrl})`;
  }

  // Function to update the preview image
  function updatePreview() {
    const previewContainer = document.getElementById("previewContainer");
    previewContainer.innerHTML = ""; // Clear previous preview

    const activeImage = new Image();
    activeImage.src = imageUrls[currentImageIndex];
    activeImage.alt = "Active Image";
    activeImage.classList.add("active-image");
    previewContainer.appendChild(activeImage);
  }

  // Reusable function to generate dynamic slider nodes
  function createSliderNode(imageUrl, isActive) {
    const thumbnail = document.createElement("img");
    thumbnail.src = imageUrl;
    thumbnail.alt = "Thumbnail Image";
    thumbnail.classList.add("thumbnail", isActive ? "active" : "inactive");

    thumbnail.addEventListener("click", () => {
      currentImageIndex = imageUrls.indexOf(imageUrl);
      updateThumbnails();
      switchImage(imageUrl);
      updatePreview(); // Update the preview to show only the active image
    });

    return thumbnail;
  }

  // Function to handle left button click
  function onLeftButtonClick() {
    currentImageIndex = Math.max(currentImageIndex - 1, 0);
    updateThumbnails();
    switchImage(imageUrls[currentImageIndex]);
    updatePreview(); // Update the preview to show only the active image
  }

  // Function to handle right button click
  function onRightButtonClick() {
    currentImageIndex = Math.min(currentImageIndex + 1, imageUrls.length - 1);
    updateThumbnails();
    switchImage(imageUrls[currentImageIndex]);
    updatePreview(); // Update the preview to show only the active image
  }

  // Function to update the thumbnails based on the currentImageIndex
  function updateThumbnails() {
    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumbnail, index) => {
      const isActive = index === currentImageIndex;
      thumbnail.classList.toggle("active", isActive);
      thumbnail.classList.toggle("inactive", !isActive);
    });

    const leftButton = document.querySelector(".leftBtn");
    const rightButton = document.querySelector(".rightBtn");

    leftButton.disabled = currentImageIndex === 0;
    rightButton.disabled = currentImageIndex === imageUrls.length - 1;
  }

  // Initialize the slider
  document.addEventListener("DOMContentLoaded", () => {
    const thumbnailsContainer = document.getElementById("thumbnailsContainer");
    const leftButton = document.querySelector(".leftBtn");
    const rightButton = document.querySelector(".rightBtn");

    leftButton.addEventListener("click", onLeftButtonClick);
    rightButton.addEventListener("click", onRightButtonClick);

    imageUrls.forEach((imageUrl, index) => {
      const isActive = index === currentImageIndex;
      const thumbnailNode = createSliderNode(imageUrl, isActive);
      thumbnailsContainer.appendChild(thumbnailNode);
    });

    // Set the initial background image and preview for the slider
    switchImage(imageUrls[currentImageIndex]);
    updatePreview();
  });