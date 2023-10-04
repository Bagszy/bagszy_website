var cookies = 0;

window.onload = function(){
    curCookieTotal();
}

function curCookieTotal(){
    const cText = document.getElementById("cookie-text");
    cText.innerHTML +=  ` ${cookies}`;
}

function cookieClick(){
    const cText = document.getElementById("cookie-text");
    cookies = cookies + 1;
    cText.innerHTML = `Cookies: ${cookies}`
}
function cookieSmaller(){
    const cookieImg = document.getElementById("clickerbox");
    cookieImg.style.height = "35vh"
    cookieImg.style.top = "15%"
    cookieImg.style.left = "33%"
}

function cookieBigger(){
    const cookieImg = document.getElementById("clickerbox");
    cookieImg.style.height = "37vh"
    cookieImg.style.top = "15%"
    cookieImg.style.left = "32%"
}