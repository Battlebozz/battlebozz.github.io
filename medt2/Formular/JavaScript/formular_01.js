'use strict';

function getPostleitzahlName() {
    let x = document.getElementById("postleitzahl").value;
    let text = "Postleitzahl fehlt";

    if ((x < 1000) || (x == "") || (x > 10000)) {
        document.querySelector("#postleitzahl").style.background = "red";
    }
    if ((x >= 1000) && (x < 2000)) {
        text = "Wien";
    }
    if ((x >= 2000) && (x < 4000)) {
        text = "Niederösterreich";
    }
    if ((x >= 4000) && (x < 5300)) {
        text = "Oberösterreich";
    }
    if ((x >= 5300) && (x < 5800)) {
        text = "Salzburg";
    }
    if (((x >= 6000) && (x < 6700) || (x > 9900) && (x < 10000))) {
        text = "Tirol";
    }
    if ((x >= 9100) && (x < 9900)) {
        text = "Kärnten";
    }
    if ((x >= 8200) && (x < 9000)) {
        text = "Steiermark";
    }
    if ((x >= 7000) && (x < 7600)) {
        text = "Burgenland";
    }
    document.getElementById("Bundesland").innerText = text;
}

document.getElementById("postleitzahl").addEventListener("blur", getPostleitzahlName, false);

let boolCheck = true;

function testfname() {
    if (document.getElementById("fname").value == "") {
        document.getElementById("fname").value = "";
        document.querySelector("#fname").style.background = "red";
        boolCheck = false;
    }
}

function testlname() {
    if (document.getElementById("lname").value == "") {
        document.getElementById("lname").value = "";
        document.querySelector("#lname").style.background = "red";
        boolCheck = false;
    }
}

document.getElementById("fname").addEventListener("blur", testfname, false);
document.getElementById("lname").addEventListener("blur", testlname, false);

function checkSub() {
    boolCheck = true;
    testfname();
    testlname();
    if (boolCheck === false) {
        alert("Sie haben einen Fehler bei ihren Eingaben. Bitte bearbeiten Sie die rot markierten Felder");
    } else {
        alert("Vielen Dank!");
        location.submit();
    }
}

document.getElementById("submit").addEventListener("click", checkSub, false);

function setCheck() {
    if (document.getElementById("Mozarella").checked ||
        document.getElementById("Tomaten").checked || document.getElementById("Mais").checked) {
        document.getElementById("Pizza").checked = true;
    } else {
        document.getElementById("Pizza").checked = false;
    }
}

function checkPassword() {
    boolCheck = false;

    let password = document.getElementById("Password1").value;
    if (password.length >= 6) {
        boolCheck = true;
        document.querySelector("#Ppassword1").style.background = "white";
    } else {
        document.querySelector("#Password1").style.background = "red";
    }
}

function checkEqual() {
    boolCheck = false;
    if (document.getElementById("Password1").value === document.getElementById("Password2").value) {
        boolCheck = true;
        document.querySelector("#lname").style.background = "white";
    } else {
        document.querySelector("#lname").style.background = "red";
        document.getElementById("")
    }
}
document.getElementById("Mozarellalabel").addEventListener("click", setCheck, false);
document.getElementById("Tomatenlabel").addEventListener("click", setCheck, false);
document.getElementById("Maislabel").addEventListener("click", setCheck, false);
document.getElementById("Password1").addEventListener("blur", checkPassword, false);
document.getElementById("Password2").addEventListener("blur", checkEqual, false);
