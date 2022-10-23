AFRAME.registerComponent("stars-twinkle",{
    init:function(){
        // for getting multiple of stars
        for(var i=1;i<=20;i++){
            var id= `twinkle${i}`;

            var posX =(Math.random() * 3000 + (-1000));      
            var posY = (Math.random() * 2 + (-1));
            var posZ = (Math.random() * 3000 + -1000);
        
            var position={x:posX, y:posY, z:posZ}

            // calling the function
            this.twinkleStars(id,position)
        }
    },
    twinkleStars:function(id,position){
        var backgroundEl=document.querySelector("#stars")
        var starEl=document.createElement("a-entity")
        starEl.setAttribute("id",id)
       starEl.setAttribute("position",position)
       starEl.setAttribute("scale",{x:500,y:500,z:500})

        //starEl.setAttribute("obj-model","./star2/")

        starEl.setAttribute("animation-mixer",{})
        backgroundEl.appendChild(starEl)
    }
})