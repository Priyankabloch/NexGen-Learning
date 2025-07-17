let navLinks = document.getElementById("navLinks")

let menu = document.getElementById("menu")

// menu.onclick=function(){
//     navLinks.style.right = '0px'

//     if(navLinks.style.right === '0px'){
//         menu.src = "images/close.png"
//     }
//     else{
//         menu.src = "images/menu.png"
//         navLinks.style.right = '-250px'
        
//     }
// }

menu.onclick = function(){
    if (navLinks.style.right === '-250px'){
        navLinks.style.right = '0px';
        menu.src = 'images/close.png'
    }else{
        navLinks.style.right = '-250px'
        menu.src = 'images/menu.png'
    }
}