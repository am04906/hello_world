let containerNode = document.getElementById("container_for_animation");
let animeID = "animate_id";

function myMove() {
    let elem = document.getElementById(animeID);
    let pos = 0;
    let id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}


// add a button to start the animation
let buttonNode = document.createElement('input');
buttonNode.setAttribute('type', 'button');
buttonNode.setAttribute('value', 'Start');
buttonNode.onclick = myMove;
//buttonNode.setAttribute('onclick', myMove);
containerNode.appendChild(buttonNode);


// add container for the animation box
let boxNode = document.createElement("div");
boxNode.setAttribute('id', animeID);
containerNode.appendChild(boxNode); // Append <li> to <ul> with id="myList"


// alert(document.body.innerHTML);
