setInterval(()=>{
    let a = new Date();
    let hours = a.getHours();
    let minutes = a.getMinutes();
    let seconds = a.getSeconds();
    let setampm = hours >= 12 ? 'PM' : 'AM';

   
   hours  = hours< 10 ? '0' + hours : hours;
   minutes = minutes< 10 ? '0' + minutes : minutes;
   seconds = seconds< 10 ? '0' + seconds : seconds;


 
   let innertime = `${hours}:${minutes}:${seconds}`;
   let innerampm =`${setampm}`;
   let ampm = document.getElementById('ampm');
        ampm.innerText = innerampm;


    let clock = document.getElementById('clock');
        clock.innerText = innertime;
},1000);