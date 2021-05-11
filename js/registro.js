function abrirregistrar(){

document.getElementById("registro").style.visibility= 'visible';

}
function cerrarregistrar(){

    document.getElementById("registro").style.visibility= 'hidden';
    
    }

function mostrar1(){

        var contra= document.getElementById('contra');
        var btn = document.getElementById('ojo');


        if(contra.type =='password'){
        contra.type ='text';
        btn.src = 'img/eye-slash-fill.svg';
        }else{
        contra.type='password';
        btn.src = 'img/eye-fill.svg';
        }
        
}
function mostrar2(){

    var contra= document.getElementById('contra2');
    var btn = document.getElementById('ojo2');


    if(contra.type =='password'){
    contra.type ='text';
    btn.src = 'img/eye-slash-fill.svg';
    }else{
    contra.type='password';
    btn.src = 'img/eye-fill.svg';

    }
    
}

function correotel(){
    var correotel = document.getElementById('cotel');
    var correotelbtn = document.getElementById('cotelbtn');
    var correoteltext = document.getElementById('coteltext');
    if (correotel.type == 'tel'){
        correotel.type = 'email';
        correotel.pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$';
        correoteltext.innerHTML = 'Correo: ';
        correotelbtn.innerHTML = 'Usar teléfono';
    } else {
        
        correotel.type = 'tel';
        correotel.pattern = '[0-9]{3}-[0-9]{2}-[0-9]{3}';
        correoteltext.innerHTML = 'Teléfono: '
        correotelbtn.innerHTML = 'Usar correo';
    }
}
