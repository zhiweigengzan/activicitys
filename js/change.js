var zoomLevel = 0;
var currentWidth = 0;
var currentHeight = 0;
var originalWidth = 0;
var originalHeight = 0;
function initial(){
    currentWidth = document.myImage.width;
    currentHeight = document.myImage.height;
    originalWidth = currentWidth;
    originalHeight = currentHeight;
    update();
}
function zoomIn(){
    document.myImage.width = currentWidth*1.2;
    document.myImage.height = currentHeight*1.2;
    zoomLevel = zoomLevel + 1;
    update();
}
function zoomOut(){
    document.myImage.width = currentWidth/1.2;
    document.myImage.height = currentHeight/1.2;
    zoomLevel = zoomLevel - 1;
    update();
}
function resetImage(){
    document.myImage.width = originalWidth;
    document.myImage.height = originalHeight;
    zoomLevel = 0;
    update();
}
function update(){
    currentWidth = document.myImage.width;
    currentHeight = document.myImage.height;
    /*zoomsize.innerText = zoomLevel;*/
    // imgsize.innerText = currentWidth + "X" + currentHeight;
}