const pannels = document.querySelectorAll('.pannel');
console.log(pannels);
pannels.forEach((pannel)=>{
    pannel.addEventListener('click',(e)=>{
        removeAllActivePannel();
        console.log(pannel.setAttribute('class','pannel active'));
    })
})

function removeAllActivePannel(){
    pannels.forEach(pannel=>{
        pannel.setAttribute('class','pannel')
    })
}