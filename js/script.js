//Ações abrir e fechar menu
function openNav() {
    jQuery('#menuLat')[0].style.width = "20%";
}
function closeNav() {
    jQuery('#menuLat')[0].style.width = "0%";
}
//inicializa variáveis que serão preenchidas a partir da leitura dos arquivos
var camera = {};
var iluminacao = {};
var objeto = {};

jQuery( "#submit" ).click(function() {
    if(validarEnvioArquivos()) {
        parametrosCamera();
        parametrosIluminacao();
        parametrosObjeto();
    }
});

function validarEnvioArquivos() {
    if (jQuery('#camera').get(0).files.length === 0 ||
        jQuery('#objeto').get(0).files.length === 0 ||
        jQuery('#iluminacao').get(0).files.length === 0) {
        return false
    }
    return true
}

function parametrosCamera() {
    var file = jQuery('#camera').get(0).files[0];
    var reader = new FileReader();
    reader.onload = function(){
        var lines = this.result.split('\n');
        for(var line = 0; line < lines.length; line++){
            lines[line] = lines[line].split(" ");
        }
        camera.c = lines[0]; //C - Posicao da camera em coordenadas de mundo
        camera.vetorN = lines[1]; //Vetor N
        camera.vetorV = lines[2]; //Vetor V
        camera.dhxhy = lines[3]; //d hx hy
    };
    reader.readAsText(file);
}

function parametrosIluminacao() {
    var file = jQuery('#iluminacao').get(0).files[0];
    var reader = new FileReader();
    reader.onload = function(){
        var lines = this.result.split('\n');
        for(var line = 0; line < lines.length; line++){
            lines[line] = lines[line].split(" ");
        }
        iluminacao.pl = lines[0]; //Posicao da luz em coordenadas de mundo
        iluminacao.ka = lines[1]; //reflexao ambiental
        iluminacao.ia = lines[2]; //vetor cor ambiental
        iluminacao.kd = lines[3]; //constante difusa
        iluminacao.od = lines[4]; //vetor difuso
        iluminacao.ks = lines[5]; //parte especular
        iluminacao.il = lines[6]; //cor da fonte de luz
        iluminacao.n =  lines[7]; //constante de rugosidade
    };
    reader.readAsText(file);
}

function parametrosObjeto() {
    var file = jQuery('#iluminacao').get(0).files[0];
    var reader = new FileReader();
    reader.onload = function(){
        var lines = this.result.split('\n');
        for(var line = 0; line < lines.length; line++){
            lines[line] = lines[line].split(" ");
        }
    };
    reader.readAsText(file);
}