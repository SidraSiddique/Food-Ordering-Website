


const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

/*========dark mode=========*/
const modeSwitch = document.getElementById('modeSwitch');
const body = document.body;

modeSwitch.addEventListener('change', () => {
  if (modeSwitch.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});

//  ===========active-tabs==========
  const tabLinks = document.querySelectorAll('.tab-links');
  const tabContents = document.querySelectorAll('.tab-contents');


  tabLinks.forEach((link, index) => {
    link.addEventListener('click', () => {


      tabContents.forEach(content => content.classList.remove('active-tab'));
      
      tabContents[index].classList.add('active-tab');

      tabLinks.forEach(link => link.classList.remove('active-link'));

      link.classList.add('active-link');
    });
  });


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwquU8zNkDrOM0MFZ-FwHxgURCDdlfs15JC5H1zQ7ef_wPRIIuOaaYv_DHCCRBqpWF4/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent successfully!"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
{
  // Get the button element
  var button = document.getElementById("shop");

  // Add click event listener to the button
  button.addEventListener("click", function() {
    // Change the window location to the desired URL
    window.location.href = "www.";
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var currentPageUrl = window.location.href;

  document.getElementById("facebook-share").href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(currentPageUrl);
  document.getElementById("twitter-share").href = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(currentPageUrl) + "&text=Check%20out%20this%20awesome%20website!";
  document.getElementById("linkedin-share").href = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(currentPageUrl) + "&title=Example%20Website";
});

