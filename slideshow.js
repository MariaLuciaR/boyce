// set a variable named currentSlide to the increment of 0
var currentSlide = 0

setInterval(function(){
    // this tells the currentSlide variabe to increase by 1 everytime it runs
    currentSlide = currentSlide + 1
    // working with '-100vw' means that the variable vwUnit needs to be set to '-currentSlide'
    var vwUnit = -currentSlide * 100
    // ;ets jquery know that you are using the vw unit when writing numbers
    var leftPosition = vwUnit + 'vw'
    //targets the div with the class of holder in css move all elements within it to move to the left 100vw
    $('.holder').css('left', leftPosition)  
    // sets a time of 4s
}, 4000)
