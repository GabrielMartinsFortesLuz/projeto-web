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
    function rollDice() {
        // Lógica para gerar um número aleatório entre 1 e 6 (como em um dado comum de seis lados)
        const result = Math.floor(Math.random() * 6) + 1;
    
        // Atualizar o conteúdo do elemento com o ID 'diceRoll' com o resultado
        const diceRollElement = document.getElementById("diceRoll");
        if (diceRollElement) {
            diceRollElement.textContent = result;
        }
    }
    
    // Adicionar um ouvinte de evento ao botão de rolar dados
    const rollButton = document.getElementById("btnRoll");
    if (rollButton) {
        rollButton.addEventListener("click", rollDice);
    }