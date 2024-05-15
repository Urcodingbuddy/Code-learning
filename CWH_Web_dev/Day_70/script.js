console.log("script.js Initiallizing")
        // let boxes = document.getElementsByClassName("box") /// Or // 
         let boxes = document.querySelector(".container").children
        
         function getRandomColor(){
            let val1 = 0 + Math.random()*255;
            let val2 = 0 + Math.random()*255;
            let val3 = 0 + Math.random()*255;
            return `rgb(${val1}, ${val2}, ${val3})`
         }

        Array.from(boxes).forEach(e=>{
            e.style.backgroundColor = getRandomColor()
            e.style.color = getRandomColor()
        });
