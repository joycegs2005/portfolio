// READ MORE BUTTON

function toggleDetails() {

    let details = document.getElementById("details");
    let button = document.getElementById("readMoreBtn");
  
    if (details.style.display === "block") {
  
      details.style.display = "none";
      button.textContent = "Read More";
  
    } else {
  
      details.style.display = "block";
      button.textContent = "Read Less";
  
    }
  
  }
  
  // PROJECT SLIDER
  
  let projectSlider = document.getElementById("projectSlider");
  
  let projectScroll = 0;
  
  function slideProjects(direction) {
  
    projectScroll += direction * 375;
  
    projectSlider.style.transform =
      `translateX(-${projectScroll}px)`;
  
  }
  
  // CERTIFICATE SLIDER
  
  let certificateSlider =
    document.getElementById("certificateSlider");
  
  let certificateScroll = 0;
  
  function slideCertificates(direction) {
  
    certificateScroll += direction * 375;
  
    certificateSlider.style.transform =
      `translateX(-${certificateScroll}px)`;
  
  }