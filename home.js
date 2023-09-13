// JavaScript to handle the shrinking and sticking header on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector(".shrink-header");
    if (header) {
      if (window.scrollY > 0) {
        header.classList.add("shrink", "sticky");
      } else {
        header.classList.remove("shrink", "sticky");
      }
    }
  });
  

  function showRoomOptions(year) {
    const roomOptionsDiv = document.getElementById('room-options');
    const roomTypeSelect = document.getElementById('room-type');
    
    if (year === "") {
      roomOptionsDiv.style.display = 'none';
      roomTypeSelect.innerHTML = '<option value="" disabled selected>Select Room Type</option>';
    } else {
      roomOptionsDiv.style.display = 'block';
  
      if (year !== "1") {
        roomTypeSelect.innerHTML = `
          <option value="" disabled selected>Select Room Type</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="triple">Triple</option>
        `;
      } else {
        roomTypeSelect.innerHTML = `
          <option value="" disabled selected>Select Room Type</option>
          <option value="double">Double</option>
          <option value="triple">Triple</option
        `;
      }
    }
  }

  function showAdditionalFields(roomType) {
    const additionalFieldsDiv = document.getElementById('additional-fields');
    const submitButton = document.getElementById('submit-button');
    
    if (roomType === "") {
      additionalFieldsDiv.style.display = 'none';
      submitButton.style.display = 'none';
    } else {
      additionalFieldsDiv.style.display = 'block';
      // You can add additional form fields based on room type here
      submitButton.style.display = 'block';
    }
  }
  