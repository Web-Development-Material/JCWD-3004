function dropDown(){
    let element = document.querySelector(".hamburger");
    if(element.style.display === "flex"){
        element.style.display = "none";
    }else{
        element.style.display = "flex";
    }
}