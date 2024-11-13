var produit = document.getElementsByClassName("box");

// Boucle à travers chaque produit
for (let i = 0; i < produit.length; i++) {
    let bntPlus = produit[i].children[4].children[2]; // Bouton "+"
    let bntMoins = produit[i].children[4].children[0]; // Bouton "-"
    let nombre = produit[i].children[4].children[1]; // Quantité
    let total = produit[i].children[3].children[1]; // Total unitaire
    let prixUnit = produit[i].children[2].children[1]; // Prix unitaire
    let btnSupprimer = produit[i].getElementsByClassName("fa-trash")[0]; // Bouton poubelle

    let qty = parseInt(nombre.innerText);
    let prixUnitaire = parseInt(prixUnit.innerText);

    // Événement pour le bouton "+"
    bntPlus.addEventListener("click", function () {
        qty++;
        nombre.innerText = qty;
        total.innerText = prixUnitaire * qty;

        // Mettre à jour le total général
        mettreAJourTotalGlobal();
    });

    // Événement pour le bouton "-"
    bntMoins.addEventListener("click", function () {
        if (qty > 0) {
            qty--;
            nombre.innerText = qty;
            total.innerText = prixUnitaire * qty;
        }

        // Mettre à jour le total général
        mettreAJourTotalGlobal();
    });

    // Événement pour le bouton de suppression
    btnSupprimer.addEventListener("click", function () {
        // Supprimer l'élément produit (la boîte entière)
        produit[i].remove();

        // Mettre à jour le total général après suppression
        mettreAJourTotalGlobal();
    });
}

// Fonction pour mettre à jour le total général
function mettreAJourTotalGlobal() {
    let totalGlobal = 0;
    let totalElements = document.getElementsByClassName("price");

    // Additionner tous les totaux unitaires restants
    for (let j = 0; j < totalElements.length; j++) {
        totalGlobal += parseInt(totalElements[j].innerText);
    }

    // Mettre à jour l'élément "Total Commande"
    document.getElementById("tyu").innerText = totalGlobal;
}

// Sélectionner toutes les icônes cœur sur la page
let coeurs = document.querySelectorAll('.fa-heart');

// Ajouter un événement de clic à chaque icône
coeurs.forEach(function(coeur) {
    coeur.addEventListener('click', function() {
        // Basculer la classe 'liked' pour changer la couleur
        coeur.classList.toggle('liked');
    });
});