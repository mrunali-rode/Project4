function Clockstart(){
    let date=new Date();
    let second=date.getSeconds();
    let minute=date.getMinutes();
    let hours=date.getHours();
    let am=document.getElementById("am");

     //for Good morning div
     let good1=document.getElementById("good1");
     if(hours >=6 && hours < 12){
        good1.innerText="GOOD MORNING!! WAKE UP!!"

    }else if(hours>=12 && hours < 16){
            good1.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP!!"   
    }else if(hours>=16 && hours<20){
        good1.innerText="GOOD EVENING!!"

    }else{
        good1.innerText="GOOD NIGHT!!"
    }
    if(hours > 12){
        hours= hours - 12;
        am.innerText="PM"
        
    }else{
        am.innerText="AM"
    }
   


   console.log(second,minute,hours);
   
    let sec=document.getElementById("sec");
    sec.innerText=second;
    let min=document.getElementById("min");
    min.innerText=minute;
    let hr=document.getElementById("hr")
    hr.innerText=hours;

  
    
   
}
setInterval(()=>{
    Clockstart();
},1000)

 let btnid=document.getElementById("btnid");


 btnid.addEventListener("click",function Clickme(){
    let date=new Date();
    let hours=date.getHours();
    let wake1=document.getElementById('wake1');
    let lunch1=document.getElementById('lunch1');
    let nap1=document.getElementById('nap1');
    let nap2=document.getElementById('nap2');
     //Background Image

       let image=document.getElementById("image");
       let grab=document.getElementById("grab");
       if(parseInt(wake1.value)===hours){
          image.style.backgroundImage="url(./window.png)";
           grab.innerText="GOOD MORNING!! WAKE UP !!"

       }else
       if(hours===parseInt(lunch1.value)){
        image.style.backgroundImage="url(./drink.png)";
        grab.innerText="LET'S HAVE SOME LUNCH !!";
       } else
       if(hours===parseInt(nap1.value)){
        image.style.backgroundImage="url(./evening.png)"
        grab.innerText="STOP YAWNING, GET SOME TEA..ITS JUST EVENING!!"
       }else
       if(hours===parseInt(nap2.value)){
        image.style.backgroundImage="url(./goodnight.png)";
        grab.innerText="CLOSE YOUR EYES AND GO TO SLEEP!";
       } 
         // let wakeup=document.getElementById("wakeup");
    // let lunchtime=document.getElementById("lunchtime");
    // let naptime=document.getElementById("naptime");
    // let nighttime=document.getElementById("nighttime");
    
 })
 //for Background Imgae
 