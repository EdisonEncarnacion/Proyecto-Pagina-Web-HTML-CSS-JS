(function(){
    var propParalax ={
      
        section: document.querySelector ('.parallax'),
        recorrido:null,
        limite:null
          
    }
    
    
    var metParallax= {
       inicio: function(){
          window.addEventListener('scroll', metParallax.scrollParallax);
       },
    
        scrollParallax: function (){
            propParalax.recorrido = window.pageYOffset;
            propParalax.limite = propParalax.section.offsetTop  + propParalax.section.offsetHeight;
            if(propParalax.recorrido > propParalax.section.offsetTop - window.outerHeight && propParalax.recorrido <= propParalax.limite){
                propParalax.section.style.backgroundPositionY = (propParalax.recorrido - propParalax.section.offsetTop) /1.5 + 'px';
    
            } else{
                propParalax.section.style.backgroundPositionY= 0;
            }
    
           
        }
    }
    
    metParallax.inicio();
}())
