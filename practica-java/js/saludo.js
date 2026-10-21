var today= new Date();
var hournow= today.getHours();
var saludo;

console.log(today);
console.log(hournow);

if(hournow > 18){
    saludo = "Buenas noches";
}else if(hournow>12){
    saludo = "Buenas tardes";
}else if(hournow>0){
    saludo = "Buenos d&iacute;as";
}else{
    saludo = "Bienvenido!!";
}
document.write("<h3>"+saludo+"</h3>");