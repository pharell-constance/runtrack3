let Type = "article";
let content = "L'important n'est pas la chute, mais l'atterrissage.";

function showHide(Type, content) {
    const existingContent = document.getElementById("content");

    if (!existingContent) {
        const newText = document.createElement(Type);
        newText.id = "content";
        newText.textContent = content;
        newText.classList.add("texte")
        newText.style.display = "block";
        document.body.append(newText);
    } else if (existingContent.style.display === "none") {
        existingContent.style.display = "block";
    } else {
        existingContent.style.display = "none";
    }
}

const button = document.getElementById("button");
button.addEventListener("click", function () {
    showHide(Type, content);
});
