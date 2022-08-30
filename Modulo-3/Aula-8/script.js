let html = '';

let c = 1;

while(c<10){
    html += "Número: " +c+"<br/>";
    c++;
}

for(let i=1;i<10;i++){
    html += "Número: " +i+"<br/>";
}

document.getElementById("demo").innerHTML = html; 