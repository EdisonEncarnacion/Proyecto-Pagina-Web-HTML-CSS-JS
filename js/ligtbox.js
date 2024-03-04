(function(){

    var proLightox= {
        imgContainer: document.getElementsByClassName("lightbox"),
        imagen:null,
        imagenSrc:null,
        cuerpoDom: document.getElementsByTagName('body')[0],
        lightbox_container:null,
        modal:null,
        cerrarModal:null,
        animacion: 'fade'
    
    }
    var metLightox= {
    
        inicio:function(){
            proLightox.imgContainer[i]
    
            for (var i= 0; i< proLightox.imgContainer.length; i++){
                proLightox.imgContainer[i].addEventListener('click', metLightox.capturaImagen);
            }          
        },
        capturaImagen: function(){
            proLightox.imagen =  this
            metLightox.lightbox( proLightox.imagen);
        },
    
        lightbox: function(imagen){
            proLightox.imagenSrc= window.getComputedStyle(imagen, null).backgroundImage.slice(5,-2);
            proLightox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id','lightbox_container');
            
            proLightox.lightbox_container= document.getElementById('lightbox_container');
    
            proLightox.lightbox_container.style.width = '100%';
            proLightox.lightbox_container.style.height = '100%';
            proLightox.lightbox_container.style.position = 'fixed';
            proLightox.lightbox_container.style.zIndex = '1000';
            proLightox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
            proLightox.lightbox_container.style.top = '0';
            proLightox.lightbox_container.style.left = '0';
    
            proLightox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id','modal');
            proLightox.modal=document.getElementById('modal');
            
            proLightox.modal.style.height='100%';
    
            proLightox.modal.appendChild(document.createElement('IMG')).setAttribute('src', proLightox.imagenSrc);
            proLightox.modal.getElementsByTagName('img')[0].setAttribute('class','imagen-modal');
            
            if (proLightox.animacion == 'fade'){
                document.getElementsByClassName('imagen-modal')[0].style.opacity = 0;          
    
            setTimeout(function() {
                document.getElementsByClassName('imagen-modal')[0].style.opacity = 1;  
               }, 50);
            }
            proLightox.modal.innerHTML +='<i id="cerrar_modal" class="fa fa-times" aria-hidden="true"></i>';
            proLightox.cerrarModal= document.getElementById('cerrar_modal');
            proLightox.cerrarModal.addEventListener('click',metLightox.cerrarModal);
    
            
    
        },
        cerrarModal: function(){
            proLightox.cuerpoDom.removeChild(proLightox.lightbox_container);
        }
    }
    metLightox.inicio();
    
}())
