
(function(){
    
var proTabs= {
    primer_encabezado: document.getElementById('encabezado_menu').firstElementChild,
    primer_contenido: document.getElementById('contenido_menu').firstElementChild,
    enlace_encabezado: document.querySelectorAll('#encabezado_menu li a'),
    li_encabezado:  document.querySelectorAll('#encabezado_menu li'),
    div_contenido: document.querySelectorAll('#contenido_menu > div'),
    contenido_activo: null
    }
    var metTabs= {
    
        inicio: function(){
            proTabs.primer_encabezado.className = 'active';
            proTabs.primer_contenido.className = 'active';
    
            for (var i = 0; i < proTabs.enlace_encabezado.length; i++) {
                proTabs.enlace_encabezado[i].addEventListener('click',metTabs.evento);
                
            }
        },
    
        evento: function(e){
             e.preventDefault();
             for (var i = 0; i < proTabs.li_encabezado.length; i++) {
                proTabs.li_encabezado[i].className = '';
        }  
    
        for (var i = 0; i < proTabs.div_contenido.length; i++) {
            proTabs.div_contenido[i].className = '';
       }  
       this.parentElement.className = 'active';
       proTabs.contenido_activo=this.getAttribute('href');
       document.querySelector(proTabs.contenido_activo).className = 'active';
       document.querySelector(proTabs.contenido_activo).style.opacity = '0';
       setTimeout(function(){
          document.querySelector(proTabs.contenido_activo).style.opacity = '1';
       },100);
     },
    }
    metTabs.inicio();


}())
