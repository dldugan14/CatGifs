import $ from "jquery";
import "./style.css";

$(document).ready(function() {
  console.log("ready!!");
  var searchGiphybotton = document.getElementById("getMeow");
  var gifImg = document.getElementById("randoImg");
  var notYetText;
  searchGiphybotton.addEventListener("click", function() {
    fetchGif();
  });

  function fetchGif() {
    var xhr = new XMLHttpRequest();
    //open
    xhr.open(
      "GET",
      "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kitten"
    );
    xhr.onload = function() {
      if (xhr.status === 200 && xhr.readyState === 4) {
        var payload = JSON.parse(xhr.response);
        gifImg.src = payload.data.image_url;
      }
    };
    xhr.send();
  }
});
