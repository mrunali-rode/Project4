function Clockstart(){
    let date=new Date();
    let second=date.getSeconds();
    let minute=date.getMinutes();
    let hours=date.getHours();
    let am=document.getElementById("am");
    if(hours > 12){
        hours= hours - 12;
        am.innerText="PM"
        
    }else{
        am.innerText="AM"
    }
    //for Good morning div
    let good1=document.getElementById("good1");
    if((hours>=4 && hours<12) && am=="AM"){
        good1.innerText="GOOD MORNING WAKE UP!!"
    }else if(((hours>=1 || hours==12) && hours<=4) && am=="PM"){
        good1.innerText="GOOD AFTERNOON!!TAKE SOME SLEEP"
    }else if((hours>4 && hours<=8) && am=="PM"){
        good1.innerText="GOOD EVENING!!.."
    }
    else {
        good1.innerText="GOOD NIGHT!!.."
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
    let wake1=document.getElementById("wake1");
    let wakevalue=wake1.value;
    let wakeup=document.getElementById("wakeup");
    wakeup.innerText=wakevalue;
    let lunch1=document.getElementById("lunch1");
    let luncht=lunch1.value;
    let lunchtime=document.getElementById("lunchtime");
    lunchtime.innerText=luncht;
    let nap1=document.getElementById("nap1");
    let napvalue=nap1.value;
    let naptime=document.getElementById("naptime");
    naptime.innerText=napvalue;
    let nap2=document.getElementById("nap2");
    let napt=nap2.value;
    let nighttime=document.getElementById("nighttime");
    nighttime.innerText=napt;
    
  
 })
 //for Background Imgae
 function changeBackground(){
     var ctime=new Date().getHours();
    var image=document.getElementById("image");
    var grab=document.getElementById("grab");
    
    if(ctime >=6 && ctime < 12){
        image.style.backgroundImage="url(./window.png)";
        grab.innerText="GRAB SOME HEALTHY BREAKFAST!!"

    }else if(ctime>=12 && ctime < 16){
            image.style.backgroundImage="url(./naptime.png)";
            grab.innerText="LET'S HAVE SOME LUNCH!!"   
    }else if(ctime<=16 && ctime<20){
        image.style.backgroundImage="url(./evening.png)";
        grab.innerText="STOP YAWNING, GET SOME TEA..ITS JUST EVENING!!"

    }else{
        image.style.backgroundImage="url(./goodnight.png)";
        grab.innerText="CLOSE YOUR EYES AND GO TO SLEEP!!"
    }

    

 }
 changeBackground();
