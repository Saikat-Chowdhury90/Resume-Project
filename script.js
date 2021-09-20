var anchortags= document.querySelectorAll(".nav-bar li a");
//console.log(anchortags);

for(var i=0;i<anchortags.length;i++)
{
    anchortags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID);
       // console.log(targetSection);
        
        var interval=setInterval(function() {
            var targetCoordinates=targetSection.getBoundingClientRect();
            // console.log(targetCoordinates);
            if(targetCoordinates.top<=0 )
            {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        }, 20);



    });
}



//skill-bar

//handle scroll event on window

//check that skill sections container is visisble or not
//ensure that your initial skill was initialised zero
//start animation on every skill => increase the skill width from 0 to skill level at regular intervals
//Store skill level--> html atrtribute using data-attribute

var progressbar=document.querySelectorAll(".skills-acquire > div");
//console.log(progressbar);
var skillcontainer=document.getElementById("skill-container");
//console.log(skillcontainer);
var expirience=document.getElementById("expirience");
var count=0;
var isanimation=false;
window.addEventListener('scroll',checkscroll);
function initialisingbars() {

        for(let bar of progressbar)
        {
            bar.style.width=0+'%';
        }
    
    
   
}
initialisingbars();

function fillbar() 
{
    for(let bar of progressbar)
    {
        let targetattribute=bar.getAttribute('data-attribute-width');
        let currwidth=0;
        let interval=setInterval(function(){
            if(currwidth > targetattribute)
            {
                clearInterval(interval);

                return;
            }
            currwidth++;
            bar.style.width=currwidth+'%';
        }, 8);
        
    }
}
function checkscroll() 
{
    //you have to check whether skill section is visible  
    
    var coordinates=skillcontainer.getBoundingClientRect();
    
    if(!isanimation  && coordinates.top<window.innerHeight)
    {
        isanimation=true;
        count=0;
        //console.log("skill-section-visible");
        fillbar();
    }
   


}








