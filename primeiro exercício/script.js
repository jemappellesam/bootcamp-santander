function verificar(){
    var data=new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById('txtano')
    var idade=ano-Number(fano.value)
    var res=document.getElementById('random')
    var genero=''
    var house=document.getElementsByName('rad')
    var img=document.createElement('img')
    if(house[0].checked){
        genero='Sonserina'
        img.setAttribute('src','sonserina.png')
    
    }
    else if(house[1].checked){
        genero='Grifinoria'
        img.setAttribute('src','grifinoria.jpg')
    }
    else if(house[2].checked){
        genero='Corvinal'
        img.setAttribute('src','corvinal.jpg')
    }
    else if(house[3].checked){
        genero='Lufa Lufa'
        img.setAttribute('src','lufalufa.jpg')
    }
    res.innerHTML= 'Você é um '+genero +' de '+idade+' anos '
    res.appendChild(img)
    //appendchild acrescenta um elemento embaixo na mesma variavel que contem a div
 
}