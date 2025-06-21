const incomplete = document.querySelector(".in");
const add = document.getElementById("add");
const msg = document.querySelector(".disply");
const input = document.getElementById("tex");
const msText = document.querySelector(".ms");
const complete = document.querySelector(".com");
let inc=0;
add.addEventListener("click", () => {
    const inputValue = input.value.trim();
    if (inputValue) {
        msg.style.display="flex";
        inc++;
        incomplete.innerText = "Incomplete: " + inc;

        const msgBox = document.createElement("div");
        msgBox.className = "msg-box";

        const newPara = document.createElement("p");
        newPara.innerText = inputValue;
        newPara.className = "task-msg";

        const iconDiv = document.createElement("div");
        iconDiv.className = "images";

        const right = document.createElement("i");
        right.className = "fa-solid fa-circle-check";

        const wrong = document.createElement("i");
        wrong.className = "fa-solid fa-circle-xmark";

        const edit = document.createElement("i");
        edit.className = "fa-solid fa-pen-to-square";

        iconDiv.appendChild(right);
        iconDiv.appendChild(wrong);
        iconDiv.appendChild(edit);

        msgBox.appendChild(newPara);
        msgBox.appendChild(iconDiv);
        msText.appendChild(msgBox);

        input.value = "";
        msgBox.style.display="flex";
        msgBox.style.width="350px";
        msgBox.style.justifyContent="space-between";

        right.addEventListener("click", () => {
        newPara.style.textDecoration = "line-through";
        co++;
        complete.innerText = "Complete: " + co;
        right.style.pointerEvents = "none";
        right.style.opacity = "0.5";
        });

        wrong.addEventListener("click", () => {
        msgBox.remove();
        inc--;
        incomplete.innerText = "Incomplete: " + inc;
        });

        edit.addEventListener("click", () => {
        input.value = newPara.innerText;
        msgBox.remove();
        inc--;
        incomplete.innerText = "Incomplete: " + inc; 
        });
    }
});
