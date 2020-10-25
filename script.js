let str = document.getElementById('dialogue').textContent;
let regexp = /\B'|'\B/g;

function b() {
    let result = str.replace(regexp, '"');
    document.getElementById("dialogue").innerHTML = result;
    console.log(result);
}