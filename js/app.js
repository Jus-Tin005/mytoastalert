const buttonTag = document.querySelector('.btn');
const parentsTag = document.querySelector('.parents');


const openToastAlert = () => {
parentsTag.innerHTML = "";
const toastAlertTag  = document.createElement("div");
toastAlertTag.append("Your file was uploaded successfully !");
toastAlertTag.classList.add("toastAlert");
parentsTag.append(toastAlertTag);
toastAlertTag.style.bottom = `-${toastAlertTag.offsetHeight}px`; // offsetHeight = bottom: -44px;
setTimeout(() => {
toastAlertTag.style.bottom = "0px";
},100);
setTimeout(() => {
        toastAlertTag.style.bottom = `-${toastAlertTag.offsetHeight}px`; // offsetHeight = bottom: -44px;
},2000)
}
buttonTag.addEventListener("click", () => {
        openToastAlert();
});