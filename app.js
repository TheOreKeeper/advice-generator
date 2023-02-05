function randomize() {
    let advice;
    let id;

    $.ajax({
        url: "https://api.adviceslip.com/advice",
        dataType: "json",
        success: function(response) {
          advice = response.slip.advice;
          id = response.slip.id;

          document.getElementById("advice").innerHTML = '"' + advice + '"';
          document.getElementById("advice-number").innerHTML = "Advice #" + id;
        
          document.getElementById("advice").style.animation = "";
          document.getElementById("advice").style.animation = `fadeInAnimation 3s ease forwards`;
        }
    });
}

window.onload = () => {
    let advice;
    let id;
  
    $.ajax({
        url: "https://api.adviceslip.com/advice",
        dataType: "json",
        success: function(response) {
          advice = response.slip.advice;
          id = response.slip.id;
  
          document.getElementById("advice").innerHTML = '"' + advice + '"';
          document.getElementById("advice-number").innerHTML = "Advice #" + id;

          advice.style.animation = `fadeInAnimation 3s ease forwards`;
        }
    });
  };