
let c=1;
let d,bubu;

function joli( ){
    
    let a = document.getElementById('scroller1').getBoundingClientRect().left;
  
   
    d=c++;

    bubu= -100*d +'%';
    let us=parseInt(bubu);

if(d<=4){

    switch(d){
      case 1:
      document.getElementById('scroller1').style.marginLeft ="-100%";
     document.getElementById('scroller1').style.transition='all 3s ease'
     document.getElementById('button').innerHTML =">";
     break;
     case 2:
      document.getElementById('scroller1').style.marginLeft ="-200%";
     document.getElementById('scroller1').style.transition='all 3s ease';
     document.getElementById('button').innerHTML =">";
     break;

     case 3:
      document.getElementById('scroller1').style.marginLeft ="-100%";
     document.getElementById('scroller1').style.transition='all 3s ease';
     document.getElementById('button').innerHTML ="<";
     break;


     case 4:
      document.getElementById('scroller1').style.marginLeft ="00%";
     document.getElementById('scroller1').style.transition='all 3s ease'
     
     document.getElementById('scroller1').style.transition='all 3s ease';
     document.getElementById('button').innerHTML ="<";
     break;


     default:
  
        document.getElementById('scroller1').style.marginLeft ="0%";
       document.getElementById('scroller1').style.transition='all 3s ease'
       break;

    }}
    else if(d >=5){
      c=1;
   
    }

};



function joli2( ){
    
  let a = document.getElementById('scroller2').getBoundingClientRect().left;

 
  d=c++;

  bubu= -100*d +'%';
  let us=parseInt(bubu);

if(d<=4){

  switch(d){
    case 1:
    document.getElementById('scroller2').style.marginLeft ="-100%";
   document.getElementById('scroller2').style.transition='all 3s ease'
   document.getElementById('fant').innerHTML =">";
   break;
   case 2:
    document.getElementById('scroller2').style.marginLeft ="-200%";
   document.getElementById('scroller2').style.transition='all 3s ease';
   document.getElementById('fant').innerHTML =">";
   break;

   case 3:
    document.getElementById('scroller2').style.marginLeft ="-100%";
   document.getElementById('scroller2').style.transition='all 3s ease';
   document.getElementById('fant').innerHTML ="<";
   break;


   case 4:
    document.getElementById('scroller2').style.marginLeft ="00%";
   
   document.getElementById('fant').innerHTML ="<";
   break;


   default:
  
      document.getElementById('scroller2').style.marginLeft ="0%";
     document.getElementById('scroller2').style.transition='all 3s ease'
     break;

  }}
  else if(d >=5){
    c=1;
 
  }

};










function joli3( ){
  
    
  let a = document.getElementById('scroller3').getBoundingClientRect().left;

 
  d=c++;

  bubu= -100*d +'%';
  let us=parseInt(bubu);

if(d<=4){

  switch(d){
    case 1:
    document.getElementById('scroller3').style.marginLeft ="-100%";
   document.getElementById('scroller3').style.transition='all 3s ease'
   document.getElementById('fant').innerHTML =">";
   break;
   case 2:
    document.getElementById('scroller3').style.marginLeft ="-200%";
   document.getElementById('scroller3').style.transition='all 3s ease';
   document.getElementById('button2').innerHTML =">";
   break;

   case 3:
    document.getElementById('scroller3').style.marginLeft ="-100%";
   document.getElementById('scroller3').style.transition='all 3s ease';
   document.getElementById('button2').innerHTML ="<";
   break;


   case 4:
    document.getElementById('scroller3').style.marginLeft ="00%";
   
   document.getElementById('button2').innerHTML ="<";
   break;


   default:
  
      document.getElementById('scroller3').style.marginLeft ="0%";
     document.getElementById('scroller3').style.transition='all 3s ease'
     break;

  }}
  else if(d >=5){
    c=1;
 
  }

};




















window.addEventListener('scroll', function() {
  var box = document.querySelector('#joe');
  var trigger = box.getBoundingClientRect().top - window.innerHeight;
  
console.log(trigger);
  if (trigger < 0) {
    box.classList.add('visible');
  } else {
    box.classList.remove('visible');
  }
});



window.addEventListener('scroll', function() {
    var box = document.querySelector('#joex');
    var trigger = box.getBoundingClientRect().top - window.innerHeight;

  console.log(trigger);
    if (trigger < 0) {
      box.classList.add('visible');
    } else {
      box.classList.remove('visible');
    }
  });
  
  

window.addEventListener('scroll', function() {
    var box = document.querySelector('#joew');
    var trigger = box.getBoundingClientRect().top - window.innerHeight;
    
  console.log(trigger);
    if (trigger < 0) {
      box.classList.add('visible');
    } else {
      box.classList.remove('visible');
    }
  });
  

window.addEventListener('scroll', function() {
    var box = document.querySelector('#joey');
    var trigger = box.getBoundingClientRect().top - window.innerHeight;
  
  console.log(trigger);
    if (trigger < 0) {
      box.classList.add('visible');
    } else {
      box.classList.remove('visible');
    }
  });



  var da=document.getElementById("morn").value;
  alert(da);
  
  

  function dami(){
    var da=document.getElementById("morn").value;
  //alert(da);
  //var dad= document.getElementById('paddie').textContent;
  var dadd= document.getElementById('paddie');

  //alert(dad)
  if(da=='abc'){
 dadd.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid maxime omnis molestiae ab dolorem repellendus ullam aspernatur modi quos odit.';
 
  }

  else if(da=='bcd')
  {
    dadd.innerHTML=' Ea repellendus illo voluptas asperiores magnam. Repellat facere quae earum nesciunt minima.';
    
     }

     else if(da=='cde')
  {
    dadd.innerHTML=' Aliquid maxime omnis molestiae ab dolorem repellendus ullam aspernatur modi quos odit';
    
     }
     else if(da=='def')
     {
       dadd.innerHTML='  Repellat molestiae impedit accusamus nisi provident obcaecati minima eius. Atque veniam ';
       
        }
        else if(da=='efg')
        {
          dadd.innerHTML='  the stories and histories which depicts all Africa has faced from our precolonial era to today;When you pay us a visit,';
          
           }

           else if(da=='fgh')
           {
             dadd.innerHTML=' which depicts all Africa has faced from our precolonial era to today;When you pay us a visit,Lorem ipsum dolor sit amet.';
             
              }
  }




 function adant( ){setInterval(chuckn,30000);;
 clearInterval(chuckn);
 setTimeout(chuckn,0000);
 clearTimeout(chuckn)
}
  function chuckn(){

let a =document.getElementById('a').style;

let aa =document.getElementById('aa').style;

let aaa =document.getElementById('aaa').style;

let aaaa =document.getElementById('aaaa').style;

let aaaaa =document.getElementById('aaaaa').style;

  setTimeout(oboo,3000);
  function oboo(){
    //mj.innerHTML='asdfghjkl'
   
  let mj=document.getElementById('unas');
  mj.innerHTML=' Calculate the received optical power, when the lunch power is 1 mW. Assume complete compensation of the link dispersion';
  a.opacity=1;
  a.transition='all 2s ease';
    
    console.log('this aint right')
  }
  clearTimeout(oboo)


  
  setTimeout(oboo1,6000);
  function oboo1(){
    //mj.innerHTML='asdfghjkl'
   
  let mj=document.getElementById('unas');
  mj.innerHTML='or an optical link operating around 1550nm, with 40km of standard single – mode Fiber, having attenuation of 0.2 Db/km, followed by 8 km of dispersion compensating fiber, having attenuation of 0.5 Db/km and gain compensating EDFA having a gain of 10 dB and insertion loss of 1 dB.';
  //alert(mj);
    
  aa.opacity=1;
  aa.transition='all 2s ease';
    
    console.log('this aint right')
  }
  clearTimeout(oboo1)


  
  setTimeout(oboo2,9000);
  function oboo2(){
    //mj.innerHTML='asdfghjkl'
   
  let mj=document.getElementById('unas');
  mj.innerHTML='Maxime qui reprehenderit quas minima dolores, sit amet consectetur adipisicing elit.';
  //alert(mj);
    
  aaa.opacity=1;
  aaa.transition='all 2s ease';
    
    console.log('this aint right')
  }
  clearTimeout(oboo2)


  
  setTimeout(oboo3,12000);
  function oboo3(){
    //mj.innerHTML='asdfghjkl'
   
  let mj=document.getElementById('unas');
  mj.innerHTML='Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, modi vitae rem ducimus  inventore facilis cumque iste repudiandae sit ea minima reiciendis debitis ipsum ipsa suscipit necessitatibus  dignissimos unde adipisci.';
  //alert(mj);
  aaaa.opacity=1;
  aaaa.transition='all 2s ease';
    
    
    console.log('this aint right')
  }
  clearTimeout(oboo3);
  
  setTimeout(oboo4,15000);
  function oboo4(){
    //mj.innerHTML='asdfghjkl'
   
  let mj=document.getElementById('unas');
  mj.innerHTML=' Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, modi vitae rem ducimus   inventore facilis cumque iste repudiandae sit ea minima reiciendis debitis ipsum ipsa suscipit necessitatibus dignissimos unde adipisci. Maxime qui reprehenderit quas minima dolores';
  //alert(mj);
  aaaaa.opacity=1;
  aaaaa.transition='all 2s ease';
    
    
    console.log('this aint right')
  }
  clearTimeout(oboo4)

  setTimeout(oboo5,18000);
  function oboo5(){
    //mj.innerHTML='asdfghjkl'
   
  let mj=document.getElementById('unas');
  mj.innerHTML=' Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, modi vitae rem ducimus   inventore facilis cumque iste repudiandae sit ea minima reiciendis debitis ipsum ipsa suscipit necessitatibus dignissimos unde adipisci. Maxime qui reprehenderit quas minima dolores';
  //alert(mj);
  aaaaa.opacity=0;
  aaaaa.transition='all 2s ease';
    
    
    console.log('this aint right')
  }
  clearTimeout(oboo5)





  
  setTimeout(oboo6,21000);
  function oboo6(){
    //mj.innerHTML='asdfghjkl'
   
  let mj=document.getElementById('unas');
  mj.innerHTML='Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, modi vitae rem ducimus  inventore facilis cumque iste repudiandae sit ea minima reiciendis debitis ipsum ipsa suscipit necessitatibus  dignissimos unde adipisci.';
  //alert(mj);
  aaaa.opacity=0;
  aaaa.transition='all 2s ease';
    
    
    console.log('this aint right')
  }
  clearTimeout(oboo3);






  
  setTimeout(oboo7,24000);
  function oboo7(){
    //mj.innerHTML='asdfghjkl'
   
  let mj=document.getElementById('unas');
  mj.innerHTML='Maxime qui reprehenderit quas minima dolores, sit amet consectetur adipisicing elit. '  //alert(mj);
  aaa.opacity=0;
  aaa.transition='all 2s ease';
    
    
    console.log('this aint right')
  }
  clearTimeout(oboo7)



  
  
  setTimeout(oboo8,27000);
  function oboo8(){
    //mj.innerHTML='asdfghjkl'
   
  let mj=document.getElementById('unas');
  mj.innerHTML='Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, modi vitae rem ducimus  inventore facilis cumque iste repudiandae sit ea minima reiciendis debitis ipsum ipsa suscipit necessitatibus  dignissimos unde adipisci.';
  //alert(mj);
  aa.opacity=0;
  aa.transition='all 2s ease';
    
    
    console.log('this aint right')
  }
  clearTimeout(oboo8);


  
  setTimeout(oboo9,30000);
  function oboo9(){
    //mj.innerHTML='asdfghjkl'
   
  let mj=document.getElementById('unas');
  mj.innerHTML=' Calculate the received optical power, when the lunch power is 1 mW. Assume complete compensation of the link dispersion';
  a.opacity=0;
  a.transition='all 2s ease';
    
    console.log('this aint right')
  }
  clearTimeout(oboo9)

 
  }


  clearInterval(chuckn)
  
  function baddest(){
    let human =document.getElementById('human');
  let human2=document.getElementById('human2');
  let turns=document.getElementById('turns');
 


if(human.value.length >0  && human2.value >0)
{
    turns.innerHTML = human2.value*200;
}

else{turns.innerHTML='input a possible number'}
  }
  var  bod=false;
  function pago(){

  
    
bod=!bod;

if(bod==false){
  alert(bod)
  document.getElementById('logged').style.visibility='hidden';
  document.getElementById('logged').style.opacity=0;

  document.getElementById('logged').style.transition='all 1s ease';
}

else if(bod==true){
  document.getElementById('logged').style.visibility='visible';
 document.getElementById('logged').style.opacity=1;

 document.getElementById('logged').style.transition='all 2s ease';
 // alert(bod);
}
  }