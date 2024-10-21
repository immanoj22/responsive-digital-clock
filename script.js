function currentime(){
    let now=new Date();
    let hr=now.getHours();
    let meridian=hr>=12?"PM":"AM";
    hr=hr%12;
    if(hr==0){
        hr=12;
    }
    hr=hr.toString().padStart(2,0);
    let min=now.getMinutes().toString().padStart(2,0);
    let sec=now.getSeconds().toString().padStart(2,0);
   
    let time=`${hr}:${min}:${sec} ${meridian}`;
    document.getElementById("ddate").textContent=time;
    
}
;
setInterval(currentime,1000);