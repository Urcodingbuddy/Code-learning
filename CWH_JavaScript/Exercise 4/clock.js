
// function timeing(){
//     let a = new Date();
//     let hours = a.getHours();
//     let minutes = a.getMinutes();
//     let seconds = a.getSeconds();

   
//    hours  = hours< 10 ? '0' + hours : hours;
//    minutes = minutes< 10 ? '0' + minutes : minutes;
//    seconds = seconds< 10 ? '0' + seconds : seconds;


    
//     let innertime = `<div class="time" id="time">${hours}:${minutes}:${seconds}</div>`;

//     let clock = document.getElementById('clock');
//         clock.innerHTML = innertime;
//         setTimeout(timeing, 1000);
    

// }
// timeing();


setInterval(()=>{
    let a = new Date();
    let hours = a.getHours();
    let minutes = a.getMinutes();
    let seconds = a.getSeconds();

   
   hours  = hours< 10 ? '0' + hours : hours;
   minutes = minutes< 10 ? '0' + minutes : minutes;
   seconds = seconds< 10 ? '0' + seconds : seconds;


    
   let innertime = `<div class="time" id="time">${hours}:${minutes}:${seconds}</div>`;

    let clock = document.getElementById('clock');
        clock.innerHTML = innertime;
},1000);


