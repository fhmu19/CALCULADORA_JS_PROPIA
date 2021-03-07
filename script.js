function teclear(num){
    if(document.getElementById('disp').innerHTML!=='0')
        document.getElementById('disp').innerHTML += num
    else
        document.getElementById('disp').innerHTML = num
}

function funcionar(valua){
    document.getElementById('disp').innerHTML = valua
    console.log('algo')
}
function calcular(){
    const val = document.getElementById('disp').innerHTML
    document.getElementById('disp').innerHTML = ''
    if(val.includes('/0')){
        alert("Atención! Estas haciendo una operación cuyo resultado es infinito. Intenta de nuevo!")
    }else{
        let res = eval(val)
        document.getElementById('disp').innerHTML = res
    }

    
    
}