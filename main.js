function clasificación() {
    
navigator.mediaDevices.getUserMedia({
    audio:true
});
 clasificación=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VcneijGJS/model.json',cargar_modelo);

}
function cargar_modelo()
{
clasificación.classify(ver_resultados);
}
function ver_resultados(error,results){
console.log('resultados obtenidos');

if (error) {
console.error(error);    
}
else{
    console.log(results);
}
document.getElementById("identificar_sonido").innerHTML = 'Escucho: '+ results[0].label;
document.getElementById("precision_sonido").innerHTML = 'Presición: '+ (results[0].confidence*100).toFixed(2)+" %";
img1=document.getElementById ('alien1')
img2=document.getElementById ('alien2')
img3=document.getElementById ('alien3')
img4=document.getElementById ('alien4')
if(results[0].label=="Ruido de fondo")
{
    img1.src='aliens-01.gif';
    img2.src='aliens-02.png';
    img3.src='aliens-03.png';
    img4.src='aliens-04.png';
}
}
