var imgs = 
["download.jpg" , "sdf.png" , "download.png" , "images.jpg" , "images.png"];
var names =
["Kamlesh Kumar Chaurasia" , "Kusum Chaurasia" , "Kanishka" , "Kritika" , "Kushank"];

var i = 0;
function updatedata() {
     
    i++
    var names = 5
    if ( i > names ) {
        i=0
    }
    var updatedImage = Imgs[i];
    var updatedName = names[i];
    document.getElementById("imgs").src = updatedImage;
    document.getElementById("name").innerHTML = updatedName;
}