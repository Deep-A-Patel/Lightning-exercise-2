console.log("main.js")

const setupElement = document.querySelector("#setup");
const punchlineElement = document.querySelector("#punchline");


fetch("https://official-joke-api.appspot.com/random_joke", {
     mpde: "no-cors"
})
  .then(result => result.json())
  .then(parsedJSON => {
      console.log("joke", parsedJSON.punchline, parsedJSON.setup);
      addToDom(parsedJSON);
  })

  function addToDom(jokeObj){
    setupElement.innerHTML = `<h4>${jokeObj.setup}</h4>`;
    punchlineElement.innerHTML = `<p>${jokeObj.punchline}</p>`;


  }
