const STATUS_NOT_FED = "NOT_FED"
const STATUS_FED = "FED"

const notFedImage = "https://icon-library.com/images/uncheck-icon/uncheck-icon-17.jpg";
const fedImage = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg";

const feedCards = document.querySelectorAll(".feed-status");
for(const card of feedCards){
    card.addEventListener("click",async function(){
        let currentStatus = card.dataset.status

        console.log(currentStatus)
    
        currentStatus = currentStatus === STATUS_FED ? STATUS_NOT_FED : STATUS_FED
        // if not fed will be fed, if fed become not fed//
        
        console.log(currentStatus)

        const isSaveSuccess = await saveStatus(currentStatus)

        if (isSaveSuccess ){

            card.dataset.status = currentStatus

            const image = card.querySelector(".feed-status__img")
            image.src = currentStatus === STATUS_FED ? fedImage : notFedImage

        } 
    })
}
async function saveStatus(status){
    let isSuccess = false
    const timestamp = Date.now();
    // todo get name from localstorage// 
    const createdBy = "laoxie"
    /*1.todo hook up with api server
      2.research AJAX, fetch API, axios (call- API related content)
      3.research async, await, promise, callback(Kaogu) */
    
      // (assume axios installed) **below are pseudo code logic
      try{
        await axios.post("https://api.dogfeed.io/status",{createdBy:createdBy, timestamp:timestamp,status:status})
        isSuccess = true
    }  
      catch(error){
        alert("Error")
      }  
    return isSuccess  
}

//need a another fuction: need a axios.get to get today status//

//document.getElementById("app").innerHTML = ``//
