// set a variable named currentSlide to the increment of 0
var currentSlide = 0

// by using the '.length' method it shows how many slides we have in the .holder div
var totalSlides = $('.holder div').length


//this function will go to the next slide
var nextSlide = function () {
    // this tells the currentSlide variabe to increase by 1 everytime it runs
    currentSlide = currentSlide + 1
    // working with '-100vw' means that the variable vwUnit needs to be set to '-currentSlide'
    var vwUnit = -currentSlide * 100
    // lets jquery know that you are using the vw unit when writing numbers
    var leftPosition = vwUnit + 'vw'
    //targets the div with the class of holder in css move all elements within it to move to the left 100vw using the variable of 'leftPosition'
    $('.holder').css('left', leftPosition) 
    // setting a slideNumber variable that increases by 1 because arrays begin at 0
    var slideNumber = currentSlide + 1
    // setting up the text to idicate which page you are on out of how many pages there are in total
    $('.steps').text(slideNumber + ' / ' + totalSlides) 
}

// this function will take us to the previous slide
var previousSlide = function() {
    // this tells the currentSlide variabe to decrease by 1 everytime it runs
    currentSlide = currentSlide - 1
    var vwUnit = -currentSlide * 100
    var leftPosition = vwUnit + 'vw'
    $('.holder').css('left', leftPosition)
    // setting a slideNumber variable that increases by 1 because arrays begin at 0
    var slideNumber = currentSlide + 1
    // setting up the text to idicate which page you are on out of how many pages there are in total
    $('.steps').text(slideNumber + ' / ' + totalSlides)  
}


var autoSlide = setInterval(function(){

    nextSlide()
    // sets a time of 3s
}, 3000)

// this targets the next link in the html so that when it clicks the function of going to the next slide happens
$('.next').on('click', function() {
    clearInterval(autoSlide)
    nextSlide()
})
// this targets the previous link in the html so that when clicked it will go to the previous slide
$('.prev').on('click', function() {
    clearInterval(autoSlide)
    previousSlide()
})

// setting a slideNumber variable that increases by 1 because arrays begin at 0
var slideNumber = currentSlide + 1
// setting up the text to idicate which page you are on out of how many pages there are in total
$('.steps').text(slideNumber + ' / ' + totalSlides)




