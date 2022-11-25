var anchor=document.querySelectorAll("ul li a");
    
        // here obj return all anchor tags
        anchor.forEach(function(obj){
    
            // get background color clicked anchor tag
    
            // add click event on anchor tag
            obj.addEventListener("click",function(){
                // get background color clicked anchor tag
    
                var getColor=obj.style.background;
    
                // this will return color in rgba form.
    
                document.body.style.background=getColor;
            })
        });