// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
let data= JSON.parse(localStorage.getItem("newsd"))
console.log(data)
   
let news=document.getElementById("detailed_news")
let div=document.createElement("div")
div.setAttribute("class","flex")
let img=document.createElement("img")
      img.src=data.urlToImage;
      let head=document.createElement("h3")
      head.innerText=data.title;
      let des=document.createElement("p")
      des.innerText=data.description;
      let content=document.createElement("p")
      des.innerText=data.content;


div.append(img,head,des,content)
news.append(div)
















