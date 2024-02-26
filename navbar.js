let hamicon = document.querySelector("#ham-icon");
let crossicon = document.querySelector("#cross-icon");
let siderbar = document.querySelector(".sidebar");

hamicon.addEventListener("click", ()=> 
{
    siderbar.style.display = "block";
    setTimeout(()=>
    {
        siderbar.style.margin = "0";
    },10);
    document.body.style.overflow = 'hidden';
});

crossicon.addEventListener("click", ()=> 
{
    setTimeout(()=>
    {
        siderbar.style.display = "none";
    },500);
    siderbar.style.margin = "0 -100vw 0 0";
    document.body.style.overflowY = 'visible';
});