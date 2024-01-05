function iniciar_clasificación() {
    
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
    console.console.log('resultado obtenido');
}