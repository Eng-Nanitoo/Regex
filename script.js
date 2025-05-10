document.getElementById("form").onsubmit = function () {
    if (checkMarque() && checkMatricule()) {
        return true;
    }

    return false;
}

function estChiffre(c) {
    return /^[0-9]$/.test(c);
}
function estLettre(c) {
    return /^[a-zA-Z]$/.test(c);
}

function checkMarque(){
    let marque = document.getElementById("marque");
    let pMarque = document.getElementById("marqueError");
    const marqueExpression = /^[a-zA-Z]\w+(\s[a-zA-Z0-9]+)?$/
    
    if(marque.value != ""){
        if (marqueExpression.test(marque.value)) {
            pMarque.innerHTML = ""
            return true;
        }
        else if(!estLettre(marque.value[0])){
            pMarque.innerHTML = "Marque doit commence par un lettre"
        }
        else{
            pMarque.innerHTML = "invalid marque"
        }
    }
    else{
        pMarque.innerHTML = ""
    }
    return false;
}

function checkMatricule(){
    let matricule = document.getElementById("matricule");
    let pMatricule = document.getElementById("matriculeError");
    const matriculeExpression = /^[0-9]{4}(A[A-Z](0[1-9]|1[0-5])|B(A|B)1[3-5])$/
    
    if(matricule.value != ""){
        if (matriculeExpression.test(matricule.value)) {
            pMatricule.innerHTML = ""
            return true;
        }
        else if(!estChiffre(matricule.value[0])){
            pMatricule.innerHTML = "matricule doit commence par un chiffre"
        }
        else{
            pMatricule.innerHTML = "Matricule doit etre sous la format: 0000XX00"
        }
    }
    else{
        pMatricule.innerHTML = ""
    }

    return false;
}