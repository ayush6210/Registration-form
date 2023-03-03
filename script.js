document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registration-form").addEventListener("submit", function(event) {
      event.preventDefault();
      var form = event.target;
      var data = new FormData(form);
      var request = new XMLHttpRequest();
      request.open("POST", "submit.php");
      request.send(data);
    });
  });

  function SayHello(){
    alert("Your details has been succesfully submitted, Thanks ! ");
  }
  // let popup = document.getElementById("popup");
  // function openPopup(){
  //   popup.classList.add("open-popup");

  // }
  // function closePopup(){
  //   popup.classList.remove("open-popup");
    
  // }
  