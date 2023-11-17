    const showPopupButton = document.getElementById("showPopup");
    const closePopupButton = document.getElementById("closePopup");
    const confirmButton = document.getElementById("confirmButton");
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");

    if (showPopupButton) {
        showPopupButton.addEventListener("click", function () {
            overlay.style.display = "block";
            popup.style.display = "block";
        });
    }
    
    if (closePopupButton) {
        closePopupButton.addEventListener("click", function () {
            overlay.style.display = "none";
            popup.style.display = "none";
    
            const lobbyNameInput = document.getElementById("lobbyName");
            if (lobbyNameInput) {
                lobbyNameInput.value = "";
            }
        });
    }
    
    if (confirmButton) {
        confirmButton.addEventListener("click", function () {
            const lobbyNameInput = document.getElementById("lobbyName");
            const lobbyName = lobbyNameInput ? lobbyNameInput.value.trim() : '';
    
            if (lobbyName !== "") {
                window.location.href = `lobby.html?room=${lobbyName}`;
            } else {
                alert("Por favor, insira um nome de sala válido.");
            }
        });
    }
