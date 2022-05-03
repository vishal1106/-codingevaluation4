// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
let search= async(e)=>{
    try{
    if(e.key==="Enter")
    {
        let query=document.getElementById("search_input").value
          
     let res=  await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
      
     let data=await res.json();
  let news =data.articles;
  
  append(news)

   
   }
}catch(err){
    console.log(err)
}
   

}
document.getElementById("search_input").addEventListener("keydown",search);

function append(data){
  
      data.map(function({content,title,urlToImage,description}){
      
          let results=document.getElementById("results")
      let div=document.createElement("div")
      div.setAttribute("class","news")
  div.addEventListener("click",function(){
      details({content,title,urlToImage,description})
  })

      let imgdiv=document.createElement("div")
      imgdiv.setAttribute("class","imge")
      let img=document.createElement("img")
      img.src=urlToImage;
      
      let namediv=document.createElement("div")
      namediv.setAttribute("class","name")
      let head=document.createElement("h3")
      head.innerText=title;
      
  
      let des=document.createElement("p")
      des.innerText=description;
      
      imgdiv.append(img)
      namediv.append(head,des)
      div.append(imgdiv,namediv)
      results.append(div)
      })
      }
  
    function details(el){
        localStorage.setItem("newsd",JSON.stringify(el))
        window.location.href="./news.html"
    }































