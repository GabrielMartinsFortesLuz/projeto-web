    const showPopupButton = document.getElementById("showPopup");
    const closePopupButton = document.getElementById("closePopup");
    const confirmButton = document.getElementById("confirmButton");
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");

    showPopupButton.addEventListener("click", function () {
        overlay.style.display = "block";
        popup.style.display = "block";
    });

    closePopupButton.addEventListener("click", function () {
        overlay.style.display = "none";
        popup.style.display = "none";

        const lobbyNameInput = document.getElementById("lobbyName");
        lobbyNameInput.value = "";
    });

    confirmButton.addEventListener("click", function () {
        const lobbyNameInput = document.getElementById("lobbyName");
        const lobbyName = lobbyNameInput.value.trim();

        if (lobbyName !== "") {
            window.location.href = `lobby.html?room=${lobbyName}`;
        } else {
            alert("Por favor, insira um nome de sala válido.");
        }
    });
