

let result=
{
    "tag": "",
    "free": true,
    "role": false,
    "user": "sasukeuchiha",
    "email": "sasukeuchiha@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
  }

   
  let res=document.querySelector('.res');
  
  
 
let btn=document.querySelector('.button');
let containerres=document.querySelector('.containerres');


btn.addEventListener("click",async (e)=>
{
  e.preventDefault()
     
  res.innerHTML = `<img width="20" src="loading.gif" alt="Loading...">`;
      let key="ema_live_WPNQBvfa763tQpuGbq5fXBjQ2ltVzR0h7iJ5OSPq";
       email=document.querySelector(".username").value;
       url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
      let res1=await fetch(url);
      let result=await res1.json();
    
      res.innerHTML=" ";
       
 
    for(item in (result))
      {
       
        res.innerHTML += `<div>${item} :  ${result[item]} </div><br>`;  // '\n' for line break  
      }

})

 
