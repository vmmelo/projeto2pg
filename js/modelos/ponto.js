function Ponto(x,y,z) {
    this.x = x;
    this.y = y;
    this.normal = new Vetor(0, 0, 0);

    this.z = undefined;
    if (z != undefined) {
        this.z = z;
    }

    this.adicionar = function(p) {
        if (this.z == undefined) {
            return new Ponto(this.x + p.x, this.y + p.y);
        }
        return new Ponto(this.x + p.x, this.y + p.y, this.z + p.z);
    };

    this.subtrair = function(p) {
        if (this.z == undefined) {
            return new Ponto(this.x - p.x, this.y - p.y);    
        }
        return new Ponto(this.x - p.x, this.y - p.y, this.z - p.z);
    };
    
    this.multiplicacaoMatriz = function(matrix) {
        var x = this.x*matrix[0][0] + this.y*matrix[0][1] + this.z*matrix[0][2];
        var y = this.x*matrix[1][0] + this.y*matrix[1][1] + this.z*matrix[1][2];
        var z = this.x*matrix[2][0] + this.y*matrix[2][1] + this.z*matrix[2][2];
        return new Ponto(x, y, z);
    };

    //retorna o ponto de vista para a camera
    this.retornarPontoVista = function(camera) {
        var a = this.copiar();
        var b = a.subtrair(camera.c);
        var r = b.multiplicacaoMatriz(camera.alfa);
        return r;
    };

    //retorna o ponto de tela
    this.retornarPontoTela = function(camera) {
        var x = (camera.d/camera.hx)*(this.x/this.z);
        var y = (camera.d/camera.hy)*(this.y/this.z);
        var a = new Ponto(x, y);
        var r = new Ponto(((a.x + 1) * (largura / 2)), ((1 - a.y) * (altura / 2)));
        //arredonda
        r.x = Math.round(r.x);
        r.y = Math.round(r.y);
        //copia a normal
        r.normal = this.normal.copiar();
        return r;
    };
    
    this.multiplicar = function(k) {
        return new Ponto(this.x*k, this.y*k, this.z*k);
    };
    
    this.copiar = function() {
        if (this.z == undefined){
            return new Ponto(this.x, this.y);    
        }
        return new Ponto(this.x, this.y, this.z);
    };

}