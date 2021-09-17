var anchortags= document.querySelectorAll(".nav-bar li a");
//console.log(anchortags);

for(var i=0;i<anchortags.length;i++)
{
    anchortags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID);
        //console.log(targetSection);
        
        var interval=setInterval(function() {
            var targetCoordinates=targetSection.getBoundingClientRect();
            if(targetCoordinates.top<=0)
            {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        }, 20);



    });
}