let val1=document.getElementById("n1")
let val2=document.getElementById("n2")
let val3=document.getElementById("easy")
let val4=document.getElementById("medium")
let val5=document.getElementById("hard")
console.log(val3)
console.log(val4)
console.log(val5)
let k=0;
let i;
let j;
let l;
let m=3;
let ans;
let level;
let result=0;

 alert('Initially  we will provide you 3 chances')
document.getElementById("chn").style.display="none"
document.getElementById("opt").style.display="none"
 document.getElementById("but2").style.display="none"
 document.getElementById("qn").style.display="none"
 document.getElementById("but1").style.display="none"
document.getElementById("score").style.display="none"
function easy(){
    level=1;
   let opt=document.getElementById("level")
   document.getElementById("level").style.display="block"
   document.getElementById("easy").style.backgroundColor="white"
   document.getElementById("easy").style.color="black"
   document.getElementById("medium").style.backgroundColor="black"
   document.getElementById("medium").style.color="white"
   document.getElementById("hard").style.backgroundColor="black"
   document.getElementById("hard").style.color="white"
   document.getElementById("easy").style.borderLeft="3px solid white"
   document.getElementById("easy").style.borderRight="0px solid white"
   document.getElementById("easy").style.borderTop="3px solid white"
   document.getElementById("easy").style.borderBottom="3px solid white"
   opt.innerHTML="next question changed to easy"
    return level;
}function medium(){
    level=2;
    document.getElementById("level").style.display="block"
   document.getElementById("medium").style.backgroundColor="white"
   document.getElementById("medium").style.borderLeft="3px solid white"
   document.getElementById("medium").style.borderRight="0px solid white"
   document.getElementById("hard").style.borderRight="3px solid white"
   document.getElementById("medium").style.borderTop="3px solid white"
   document.getElementById("medium").style.borderBottom="3px solid white"
   document.getElementById("medium").style.color="black"
   document.getElementById("hard").style.backgroundColor="black"
   document.getElementById("hard").style.color="white"
   document.getElementById("easy").style.backgroundColor="black"
   document.getElementById("easy").style.color="white"
   let opt=document.getElementById("level")
   opt.innerHTML="next question changed to medium"
    return level;
}function hard(){
    level=3;
    document.getElementById("level").style.display="block"
    document.getElementById("hard").style.backgroundColor="white"
    document.getElementById("hard").style.color="black"
    document.getElementById("medium").style.backgroundColor="black"
    document.getElementById("medium").style.color="white"
    document.getElementById("easy").style.backgroundColor="black"
    document.getElementById("easy").style.color="white" 
   document.getElementById("hard").style.borderLeft="3px solid white"
   document.getElementById("hard").style.borderRight="0px solid white"
   document.getElementById("hard").style.borderTop="3px solid white"
   document.getElementById("hard").style.borderBottom="3px solid white"
    let opt=document.getElementById("level")
    opt.innerHTML="next question changed to hard"
    return level;
}
 function nxt(){
    
   document.getElementById("but").style.animationName="anime"
   document.getElementById("but").style.animationDirection="normal"
   document.getElementById("but").style.animationDuration="3s"
    document.getElementById("but").style.animationFillMode="backwards"
     document.getElementById("but").style.display="none"
     document.getElementById("but1").style.display="block"
     document.getElementById("score").style.display="block"
     document.getElementById("but2").style.display="block"
     document.getElementById("qn").style.display="block"
     document.getElementById("ans").style.display="block"
     document.getElementById("opt").style.display="flex"
     document.getElementById("chn").style.display="block"
     document.getElementById("easy").style.display="block"
     document.getElementById("medium").style.display="block"
     document.getElementById("hard").style.display="block"
 
     if(level==2){
    document.getElementById("qn").style.fontSize="18px"
     i=(val1.innerHTML=Math.floor(Math.random()*100))
     j=(val2.innerHTML=Math.floor(Math.random()*100))
     ans=i+j
     m=3
     chn.innerHTML="Chance:" + m
     return ans;
     }
     else if(level==3){
    document.getElementById("qn").style.fontSize="17px"
     i=(val1.innerHTML=Math.floor(Math.random()*500))
     j=(val2.innerHTML=Math.floor(Math.random()*500))
     ans=i+j
   m=3
     chn.innerHTML="Chance:" + m
     return ans;
     }
     else{
    document.getElementById("qn").style.fontSize="20px"
     i=(val1.innerHTML=Math.floor(Math.random()*10))
     j=(val2.innerHTML=Math.floor(Math.random()*10))
     ans=i+j
     m=3
     chn.innerHTML="Chance:" + m
     return ans;
     }
  
}
 function stop(){
     val1.innerHTML=0
     val2.innerHTML=0
     score.innerHTML="Score: "+0
    l=0;
     document.getElementById("but").style.display="block"
     document.getElementById("but1").style.display="none"
     document.getElementById("but2").style.display="none"
     document.getElementById("qn").style.display="none"
     document.getElementById("score").style.display="none"
     document.getElementById("ans").style.display="none"
     document.getElementById("chn").style.display="none"
     document.getElementById("level").style.display="none"
     document.getElementById("opt").style.display="none"
     document.getElementById("easy").style.display="none"
     document.getElementById("medium").style.display="none"
     document.getElementById("hard").style.display="none"
     level=0;
     document.getElementById("easy").style.backgroundColor="black"
   document.getElementById("easy").style.color="white"
   document.getElementById("medium").style.backgroundColor="black"
   document.getElementById("medium").style.color="white"
   document.getElementById("hard").style.backgroundColor="black"
   document.getElementById("hard").style.color="white"
    console.log(result);  
    let res=document.getElementById("result")
    document.getElementById("result").style.display="block"
    res.innerHTML="Last Score :" + result;
   return level
    
 }
 function fun(){
     let val3=document.getElementById("ans").value
     let score=document.getElementById("score")
    let point=document.getElementById("ans").value
    console.log(point)
     if(ans==val3){
     console.log(val3)
     k=k+1
     m=3
     chn.innerHTML="Chance:" + m
     score.innerHTML="Score:" + k
     console.log(score)
     result=k;
     nxt()
     
    

     }
     else{
        m=m-1
         chn.innerHTML="Chance:" + m
         if(m==0){
            alert('Game Over')
             stop() 
        }
        
     }
     let val4=document.getElementById("ans").style.textTransform="emp"
        console.log(val4)
        return result;
 }

