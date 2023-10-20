const showPopupButton = document.getElementById("showPopup");
const closePopupButton = document.getElementById("closePopup");
const confirmButton = document.getElementById("confirmButton");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");

showPopupButton.addEventListener("click", function() {
    overlay.style.display = "block";
    popup.style.display = "block";
});

closePopupButton.addEventListener("click", function() {
    overlay.style.display = "none";
    popup.style.display = "none";

    const lobbyNameInput = document.getElementById("lobbyName");
    lobbyNameInput.value = "";
});

confirmButton.addEventListener("click", function() {
    const lobbyNameInput = document.getElementById("lobbyName");
    const lobbyName = lobbyNameInput.value.trim();

    if (lobbyName !== "") {
        window.location.href = `lobby.html?room=${lobbyName}`;
    } else {
        alert("Por favor, insira um nome de sala válido.");
    }
});

document.getElementById("uploadButton").addEventListener("click", function() {
    document.getElementById("imageInput").click();
});

document.getElementById("imageInput").addEventListener("change", function() {
    const uploadedImage = document.getElementById("uploadedImage");
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
            uploadedImage.style.display = "block";
        };

        reader.readAsDataURL(file);
    }
});