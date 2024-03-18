// // Fonction pour créer une ligne de cases à cocher avec le nom du jeu et la croix de suppression
// function createCheckboxRowWithDeleteCross(gameName) {
//     var table = document.getElementById("myTable");
//     var newRow = table.insertRow(); // Insérer une nouvelle ligne

//     // Ajouter la première cellule avec le nom du jeu
//     var gameCell = newRow.insertCell(); // Insérer une nouvelle cellule
//     gameCell.textContent = gameName; // Définir le texte comme le nom du jeu

//     // Ajouter des cellules avec des cases à cocher dans les autres colonnes
//     for (var i = 0; i < 2; i++) {
//         var cell = newRow.insertCell(); // Insérer une nouvelle cellule
//         var checkbox = document.createElement("input"); // Créer un élément input
//         checkbox.type = "checkbox"; // Définir le type comme checkbox
//         cell.appendChild(checkbox); // Ajouter la case à cocher dans la cellule
//     }
    



//     // Ajouter une cellule avec le bouton Modifier
//     var editCell = newRow.insertCell(); // Insérer une nouvelle cellule
//     var editStylo = document.createElement("div"); // Créer un élément button
//     editStylo.className = "edit-stylo"; // Ajouter la classe de style
//     editStylo.textContent = "✒️"; // Texte du bouton
//     editStylo.onclick = function () { // Définir le gestionnaire d'événement onclick pour modifier le nom du jeu
//         var newName = prompt("Entrez le nouveau nom du jeu :", gameName); // Demander le nouveau nom du jeu
//         if (newName !== null && newName.trim() !== "") { // Vérifier si le champ n'est pas vide et que l'utilisateur n'a pas annulé
//             gameCell.textContent = newName; // Mettre à jour le nom du jeu
//         }
//         // table.editRow(newRow.rowindex);
//     };
//     editCell.appendChild(editStylo); // Ajouter le bouton Modifier dans la cellule


//     // Ajouter une cellule avec la croix de suppression
//     var deleteCell = newRow.insertCell(); // Insérer une nouvelle cellule
//     var deleteCross = document.createElement("div"); // Créer un élément div
//     deleteCross.className = "delete-cross"; // Ajouter la classe de style
//     deleteCross.textContent = "×"; // Contenu de la croix de suppression
//     deleteCross.onclick = function () { // Définir le gestionnaire d'événement onclick pour supprimer la ligne
//         table.deleteRow(newRow.rowIndex);
//     };
//     deleteCell.appendChild(deleteCross); // Ajouter la croix de suppression dans la cellule
// }



// // Fonction pour ajouter un nouveau jeu
// function addNewGame() {
//     var gameName = document.getElementById("newGameInput").value; // Récupérer le nom du jeu depuis la zone de texte
//     if (gameName.trim() !== "") { // Vérifier si le champ n'est pas vide
//         createCheckboxRowWithDeleteCross(gameName); // Créer une nouvelle ligne avec le nom du jeu et la croix de suppression
//         document.getElementById("newGameInput").value = ""; // Effacer le contenu de la zone de texte après l'ajout
//     } else {
//         alert("Veuillez entrer un nom de jeu vidéo.");
//     }
// }


// // Fonction pour mettre à jour le stockage local avec les jeux actuellement affichés dans le tableau
// function updateLocalStorage() {
//     var games = [];
//     var table = document.getElementById("myTable");
//     for (var i = 1; i < table.rows.length; i++) { // Commencer à 1 pour exclure la ligne d'en-tête
//         games.push(table.rows[i].cells[0].textContent); // Récupérer le nom du jeu dans la première cellule de chaque ligne
//     }
//     localStorage.setItem("games", JSON.stringify(games)); // Stocker les jeux dans le stockage local
// }

// // Fonction pour charger les jeux à partir du stockage local lors du chargement de la page
// function loadFromLocalStorage() {
//     var games = JSON.parse(localStorage.getItem("games"));
//     if (games) {
//         for (var i = 0; i < games.length; i++) {
//             createCheckboxRowWithDeleteCross(games[i]); // Créer une ligne pour chaque jeu récupéré du stockage local
//         }
//     }
// }

// // Appeler la fonction pour charger les jeux à partir du stockage local lors du chargement de la page
// loadFromLocalStorage();



// Fonction pour créer une ligne de cases à cocher avec le nom du jeu et la croix de suppression
function createCheckboxRowWithDeleteCross(gameName) {
    var table = document.getElementById("myTable");
    var newRow = table.insertRow(); // Insérer une nouvelle ligne

    // Ajouter la première cellule avec le nom du jeu
    var gameCell = newRow.insertCell(); // Insérer une nouvelle cellule
    gameCell.textContent = gameName; // Définir le texte comme le nom du jeu

    // Ajouter des cellules avec des cases à cocher dans les autres colonnes
    for (var i = 0; i < 2; i++) {
        var cell = newRow.insertCell(); // Insérer une nouvelle cellule
        var checkbox = document.createElement("input"); // Créer un élément input
        checkbox.type = "checkbox"; // Définir le type comme checkbox
        cell.appendChild(checkbox); // Ajouter la case à cocher dans la cellule
    }

    // Ajouter une cellule avec le bouton Modifier
    var editCell = newRow.insertCell(); // Insérer une nouvelle cellule
    var editStylo = document.createElement("div"); // Créer un élément button
    editStylo.className = "edit-stylo"; // Ajouter la classe de style
    editStylo.textContent = "✒️"; // Texte du bouton
    editStylo.onclick = function () { // Définir le gestionnaire d'événement onclick pour modifier le nom du jeu
        var newName = prompt("Entrez le nouveau nom du jeu :", gameName); // Demander le nouveau nom du jeu
        if (newName !== null && newName.trim() !== "") { // Vérifier si le champ n'est pas vide et que l'utilisateur n'a pas annulé
            gameCell.textContent = newName; // Mettre à jour le nom du jeu
            updateLocalStorage(); // Mettre à jour le stockage local après la modification
        }
    };
    editCell.appendChild(editStylo); // Ajouter le bouton Modifier dans la cellule

    // Ajouter une cellule avec la croix de suppression
    var deleteCell = newRow.insertCell(); // Insérer une nouvelle cellule
    var deleteCross = document.createElement("div"); // Créer un élément div
    deleteCross.className = "delete-cross"; // Ajouter la classe de style
    deleteCross.textContent = "×"; // Contenu de la croix de suppression
    deleteCross.onclick = function () { // Définir le gestionnaire d'événement onclick pour supprimer la ligne
        deleteGameRow(newRow); // Appeler la fonction de suppression avec la ligne en paramètre
    };
    deleteCell.appendChild(deleteCross); // Ajouter la croix de suppression dans la cellule
}

// Fonction pour ajouter un nouveau jeu
function addNewGame() {
    var gameName = document.getElementById("newGameInput").value; // Récupérer le nom du jeu depuis la zone de texte
    if (gameName.trim() !== "") { // Vérifier si le champ n'est pas vide
        createCheckboxRowWithDeleteCross(gameName); // Créer une nouvelle ligne avec le nom du jeu et la croix de suppression
        document.getElementById("newGameInput").value = ""; // Effacer le contenu de la zone de texte après l'ajout
        updateLocalStorage(); // Mettre à jour le stockage local
    } else {
        alert("Veuillez entrer un nom de jeu vidéo.");
    }
}

// Fonction pour supprimer une ligne de jeu
function deleteGameRow(row) {
    var table = document.getElementById("myTable");
    table.deleteRow(row.rowIndex);
    updateLocalStorage(); // Mettre à jour le stockage local après la suppression
}

// Fonction pour mettre à jour le stockage local avec les jeux actuellement affichés dans le tableau
function updateLocalStorage() {
    var games = [];
    var table = document.getElementById("myTable");
    for (var i = 1; i < table.rows.length; i++) { // Commencer à 1 pour exclure la ligne d'en-tête
        games.push(table.rows[i].cells[0].textContent); // Récupérer le nom du jeu dans la première cellule de chaque ligne
    }
    localStorage.setItem("games", JSON.stringify(games)); // Stocker les jeux dans le stockage local
}

// Fonction pour charger les jeux à partir du stockage local lors du chargement de la page
function loadFromLocalStorage() {
    var games = JSON.parse(localStorage.getItem("games"));
    if (games) {
        for (var i = 0; i < games.length; i++) {
            createCheckboxRowWithDeleteCross(games[i]); // Créer une ligne pour chaque jeu récupéré du stockage local
        }
    }
}

// Appeler la fonction pour charger les jeux à partir du stockage local lors du chargement de la page
loadFromLocalStorage();
