function verif(){

    let mdp1 = document.getElementById("password").value
    let mdp2 = document.getElementById("confirmPassword").value

    if (mdp1 === mdp2) {


        document.getElementById("password").style.border="3px solid green"
        document.getElementById("confirmPassword").style.border="3px solid green"

        
    }

    else {
        
    

        document.getElementById("confirmPassword").style.border="3px solid red"
        document.getElementById("password").style.border="3px solid red"

    }
}