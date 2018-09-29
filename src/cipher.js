window.cipher = {
encode: (string,offset) => {
    offset = parseInt(offset) % 54;
    const abcdario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
    let textoCifrado = "";
    let posicion = 0;
    let nuevaPosicion = 0;
    //string = string.toUpperCase();
    let caracter = "";

    for (var i = 0; i < string.length; i ++)
    {
        caracter = string.charAt(i);
        posicion = (abcdario.indexOf(caracter));
        if(posicion >= 0)
        {
            nuevaPosicion = (parseInt(posicion) + parseInt(offset)) % 54;
            textoCifrado = textoCifrado + abcdario.charAt(nuevaPosicion);
        }
        else
        {
            textoCifrado = textoCifrado + caracter;
        }
    } 
        return textoCifrado;
},

decode: (string,offset) => {
     offset = parseInt(offset) % 54;
     offset = offset * -1;
    const abcdario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
    let posicion = 0;
    let nuevaPosicion = 0;
    //string = string.toUpperCase();
    let caracter = "";
    let textoCifrado = "";
    for (var i = 0; i < string.length; i ++)
    {
        caracter = string.charAt(i);
        posicion = (abcdario.indexOf(caracter));
        if(posicion >= 0)
        {
            nuevaPosicion = (posicion + parseInt(offset)) % 54;
            if(nuevaPosicion < 0)
            {
                nuevaPosicion = nuevaPosicion + 54;
            }
            textoCifrado = textoCifrado + abcdario.charAt(nuevaPosicion);
        }
        else
        {
            textoCifrado = textoCifrado + caracter;
        }
    }
        return textoCifrado;
}
}
/*window.cipher => {
  encode : (string,offset) => {
        const abcdario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        for (var i = 0; i < string.length; i ++)
        {
            caracter = string.charAt(i);
            posicion = (abcdario.indexOf(caracter));
            if(posicion >= 0)
            {
                nuevaPosicion = (posicion + offset) % 27;
                textoCifrado = textoCifrado + abcdario.charAt(nuevaPosicion);
            }
            else
            {
                textoCifrado = textoCifrado + caracter;
            }
        }
    }

  decode : (string,offset) => {
        offset = offset * -1;
        const abcdario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        var posicion = 0;
        var nuevaPosicion = 0;
        string = string.toUpperCase();
        let caracter = "";
        var textoCifrado = "";
        for (var i = 0; i < string.length; i ++)
        {
            caracter = string.charAt(i);
            posicion = (abcdario.indexOf(caracter));
            if(posicion >= 0)
            {
                nuevaPosicion = (posicion + offset) % 27;
                textoCifrado = textoCifrado + abcdario.charAt(nuevaPosicion);
            }
            else
            {
                textoCifrado = textoCifrado + caracter;
            }
        }
    }
}
*/