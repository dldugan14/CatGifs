window.onload = function() {
  console.log("ready!!");
  var searchGiphybotton = document.getElementById("getMeow");
  searchGiphybotton.addEventListener("click", function() {
    console.log("CatS!");
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
        console.log(xhr.response);
      }
    };
    xhr.send();
  }
};
