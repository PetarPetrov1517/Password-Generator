function generate() {
    let complexity = document.getElementById("slider").value;

    let values = "ABCDEFGHIJKLMNOPQRSTUVWZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*()_+";

    let password = "";

    for (let index = 0; index <= complexity - 1; index++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length + 1)));
    }

    document.getElementById("display").value = password;

    document.getElementById("lastNums").innerHTML += password + "<br />"
}

document.getElementById('length').innerHTML = "Length: 25"

document.getElementById('slider').oninput = function() {
    if(document.getElementById('slider').value > 0) {
        document.getElementById('length').innerHTML = "Length: " + document.getElementById('slider').value
    } else {
        document.getElementById('length').innerHTML = "Length: 1"
    }
}

function copy() {
    document.getElementById('display').select()
    
    document.execCommand('Copy')

    alert('Password copied to clipboard!')
}