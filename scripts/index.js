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
  
console.log(news)

   window.location.href="./search.html"
   }
}catch(err){
    console.log(err)
}
   

}
 document.getElementById("search_input").addEventListener("keydown",search);

// function append(data){
   
// data.map(function(e){

//     let container=document.getElementById("container")
// let div=document.createElement("div")
// let imgdiv=document.createElement("div")
// let img=document.createElement("img")
// img.src=el.url;
// let namediv=document.createElement("div")
// let head=document.createElement("h3")
// head.innerText=el.content;

// console.log(data)
// let des=document.createElement("p")
// des.innerText=el.description;

// img.append(img)
// namediv.append(head,des)
// div.append(imgdiv,namediv)

// })
// }
//----------------------------------------------------------------------------------------------------------
let sidebar=document.getElementById("sidebar").children;
for(let el of sidebar)
{
    el.addEventListener("click", csearch)
}

 async function csearch(){
    document.getElementById("container").innerHTML=null;
let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${this.id}`)

let data= await res.json();
// appends(data)
appends(data.articles)
}


function appends(data){
  console.log(data)
    data.map(function({content,title,urlToImage,description}){
    
        let container=document.getElementById("container")
    let div=document.createElement("div")
    div.setAttribute("class","flex")
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
    container.append(div)
    })
    }








// author: "Igor Bonifacic"
// content: "Tesla delivered 310,048 vehicles over the first three months of 2022, the automaker announced\r\n on Saturday. This was an exceptionally difficult quarter due to supply chain interruptions and China Ze… [+920 chars]"
// description: "Tesla delivered 310,048 vehicles over the first three months of 2022, the automaker announced\r\n on Saturday. “This was an exceptionally difficult quarter due to supply chain interruptions and China Zero-Covid policy,” Musk said\r\n on Twitter shortly after Tesl…"
// publishedAt: "2022-04-02T21:41:41Z"
// source: {id: 'engadget', name: 'Engadget'}
// title: "Tesla's deliveries increased despite supply shortages and plant closures"
// url: "https://www.engadget.com/tesla-q-1-2022-deliveries-214141313.html"
