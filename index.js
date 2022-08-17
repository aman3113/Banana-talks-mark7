var inputText = document.querySelector("#input-el");
var btn = document.querySelector("#btn");
var outputText = document.querySelector("#output-el");
var url = "https://api.funtranslations.com/translate/groot.json";

function getServerURL(text) {
  return encodeURI(url + "?text=" + text);
}

btn.addEventListener("click", () => {
  fetch(getServerURL(inputText.value))
    .then((result) => result.json())
    .then((res) => {
      var output = res.contents.translated;
      outputText.innerText = output;
    });
});
