document.addEventListener('keydown', e => {
    document.getElementById("keyName").innerHTML = `"${e.key}"`;
    document.getElementById("keyCodeName").innerHTML = e.code;
    document.getElementById("keyCodeNumber").innerHTML = e.keyCode;
})