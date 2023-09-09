// -------------------------------------------CODE FOR DARK AND LIGHT MODE-----------------------------------

let theam = document.querySelector('.theam')
var count = 0;
theam.addEventListener("click",()=>{
    if(count%2==0){
        // document.body.style.backgroundColor = "black";
        count++;
        theam.style.transform = "scale(1)"
        document.body.style.backgroundImage = "url('./media/ezgif.com-video-to-gif.gif')"
    }
    else{
        document.body.style.backgroundImage = ""
        document.body.style.backgroundColor = "rgb(10,25,48)";
        count++;
        theam.style.transform = "scale(1.5)"
    }   
})

// -----------------------------------------------SOCIAL ACCOUNT LINKS ----------------------------------------

let insta = document.querySelector('.insta')
insta.addEventListener("click",()=>{
    window.open("https://instagram.com/lucky_patil02202?igshid=MzNlNGNkZWQ4Mg==","_blank")
})

let github = document.querySelector('.github')
github.addEventListener("click",()=>{
    window.open("https://github.com/Lucky02202","_blank")
})

let linkedin = document.querySelector('.linkedin')
linkedin.addEventListener("click",()=>{
    window.open("https://www.linkedin.com/in/laxmikantpatil02202/","_blank")
})

let gmail = document.querySelector('.gmail')
gmail.addEventListener("click",()=>{
    window.open("mailto:laxmikant.patil02202@gmail.com","_blank")
})
