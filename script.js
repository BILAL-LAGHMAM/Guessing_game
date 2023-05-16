var nbrRandom = Math.floor(Math.random() * 100);
console.log(nbrRandom);
var trying = 0;
document.getElementById("try").onclick = function () {
    var answer = Number(document.getElementById("answer").value);
    if (!isNaN(answer)) {
        if (answer === nbrRandom) {
            var div = document.getElementById("div");
            var createDiv = document.createElement("div");
            var success = document.createTextNode(`Good You are win! you win in ${trying} trying`);
            createDiv.setAttribute("class", "alert alert-success w-100");
            createDiv.appendChild(success);
            div.prepend(createDiv);

        } else if (answer < nbrRandom) {
            trying++;
            var div = document.getElementById("div");
            var createDiv = document.createElement("div");
            var low = document.createTextNode(`answer is low! try is: ${trying} and you have ${10 - trying} trying rest`);
            createDiv.setAttribute("class", "alert alert-secondary w-100");
            createDiv.appendChild(low);
            div.prepend(createDiv);
        } else {
            trying++;
            var div = document.getElementById("div");
            var createDiv = document.createElement("div");
            var great = document.createTextNode(`answer is great try is: ${trying} and you have ${10 - trying} trying rest`);
            createDiv.setAttribute("class", "alert alert-warning w-100");
            createDiv.appendChild(great);
            div.prepend(createDiv);
        }
    } else {
        console.log(`please enter a number!`);
        var div = document.getElementById("div");
        var createDiv = document.createElement("div");
        var notNumber = document.createTextNode(`please enter a number!`);
        createDiv.setAttribute("class", "alert alert-danger w-100");
        createDiv.appendChild(notNumber);
        div.prepend(createDiv);
    }
}