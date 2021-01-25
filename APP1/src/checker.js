const STATUS_NOT_FED = "STATUS_NOT_FED"
const STATUS_FED = "STATUS_FED"

const notFedImage = "https://icon-library.com/images/uncheck-icon/uncheck-icon-17.jpg";
const fedImage = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg";

const feedCards = document.querySelectorAll(".feed-status");
for(const card of feedCards){
    card.addEventListener("click",function(){
        let currentStatus = card.dataset.status
        currentStatus = currentStatus === STATUS_FED ? STATUS_NOT_FED : STATUS_FED
        //card.dataset.status = currentStatus//
        const image = card.querySelector(".feed-status__img")
        image.src = currentStatus === STATUS_FED ? fedImage : notFedImage  
    })
}



//document.getElementById("app").innerHTML = ``//
