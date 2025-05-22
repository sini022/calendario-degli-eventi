/*document.getElementById("numeroInput").addEventListener("focus", function () {
     let infoBox = document.getElementById("infoBox"); 
     infoBox.style.opacity = "1"; 
     infoBox.style.transform = "translateY(0)"; 
     infoBox.style.visibility = "visible"; 
    }); 
     // Chiudi la finestrella quando l'utente clicca fuori 

     document.addEventListener("click", function(event) {
         let infoBox = document.getElementById("infoBox"); 
         let inputBox = document.getElementById("numeroInput"); 
         // Se il click NON è dentro l'input o dentro la finestrella, chiudi la finestra 
         
         if (!inputBox.contains(event.target) && !infoBox.contains(event.target)) { 
            infoBox.style.opacity = "0"; 
            infoBox.style.transform = "translateY(-10px)"; 
            infoBox.style.visibility = "hidden"; 
        } 
    });*/
    document.querySelectorAll(".numeroInput").forEach(input => {
    input.addEventListener("focus", function () {
        let infoBox = this.parentElement.querySelector(".info-box"); // Trova la finestrella relativa
        document.querySelectorAll(".info-box").forEach(box => {
            box.style.opacity = "0";
            box.style.transform = "translateY(-10px)";
            box.style.visibility = "hidden";
        });

        if (infoBox) {
            infoBox.style.opacity = "1";
            infoBox.style.transform = "translateY(0)";
            infoBox.style.visibility = "visible";
        }
    });

    document.addEventListener("click", function(event) {
        document.querySelectorAll(".info-box").forEach(infoBox => {
            if (!infoBox.parentElement.querySelector(".numeroInput").contains(event.target) && !infoBox.contains(event.target)) {
                infoBox.style.opacity = "0";
                infoBox.style.transform = "translateY(-10px)";
                infoBox.style.visibility = "hidden";
            }
        });
    });
});
