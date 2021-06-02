// set a variable named currentSlide to the increment of 0
var currentSlide = 0

// by using the '.length' method it shows how many slides we have in the .holder div
var totalSlides = $('.holder div').length

// This sets all of the variable and jquery within it that is responsible for the movement and position of the background images as well as the text within a variable called moveSlide
var moveSlide = function(slide) {
    // working with '-100vw' means that the variable vwUnit needs to be set to '-currentSlide'
    var vwUnit = -slide * 100
    // lets jquery know that you are using the vw unit when writing numbers
    var leftPosition = vwUnit + 'vw'
    //targets the div with the class of holder in css move all elements within it to move to the left 100vw using the variable of 'leftPosition'
    $('.holder').css('left', leftPosition) 
    // setting a slideNumber variable that increases by 1 because arrays begin at 0
    var slideNumber = slide + 1
    // setting up the text to idicate which page you are on out of how many pages there are in total
    $('.steps').text(slideNumber + ' / ' + totalSlides) 
    
}
//this function will go to the next slide
var nextSlide = function () {
    // this tells the currentSlide variabe to increase by 1 everytime it runs
    currentSlide = currentSlide + 1
    //This says to check if the currentSlide is greater than or equal to the totalSides and if it is then it will be set back to the currentSlide which is set to Slide1(index0)
if (currentSlide >= totalSlides) {
    currentSlide = 0
}
moveSlide(currentSlide)
}

// this function will take us to the previous slide
var previousSlide = function() {
    // this tells the currentSlide variabe to decrease by 1 everytime it runs
    currentSlide = currentSlide - 1
    // this checks if the currentSlide is less than 0 and if it is it will get set to the last one
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1
    }
    moveSlide(currentSlide)
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

// using an event we can get all the data that comes with it
$('body').on('keydown' , function (event) {
    //  getting the keycode of the key that was pressed
    var keyCode = event.keyCode
    // if the keycode is equal to the left arrow key then we can run the previous slide
    if (keyCode == 37) {
        previousSlide()
    }
    //  if the keycode is equal to right arrow key the we can run the next slide
    if (keyCode == 39) {
        nextSlide()
    }
        console.log(event.keyCode)
})


