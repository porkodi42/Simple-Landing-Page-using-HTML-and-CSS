function scrollProject(){

document.getElementById("projects").scrollIntoView({
behavior:"smooth"
});

}
const text="Frontend Developer"
let index=0;
function typingEffect() {
    if(index<text.length){
    document.querySelector(".typing").innerHTML +=text.charAt(index);
    index++;
    setTimeout(typingEffect,100) ;
}
}
typingEffect();