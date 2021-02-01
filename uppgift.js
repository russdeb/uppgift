//Javascript dokument
var span = document.getElementsByTagName('span');
var card = document.getElementsByClassName('card');
var l = 0;
window.onload = function(){
    var base = card[0].offsetWidth;
span[1].onclick = ()=>{
    console.log(base)
    l++;
    for(var i of card)
    {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = -base + "px";}
        if (l==2) {i.style.left = -2*base + "px";}
        if (l==3) {i.style.left = -3*base + "px";}
        if (l==4) {i.style.left = -4*base + "px";}
        if (l>4) {l=4;}
    }
}
span[0].onclick = ()=>{
    console.log(1);
    l--;
    for(var i of card)
    {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = -base + "px";}
        if (l==2) {i.style.left = -2*base + "px";}
        if (l==3) {i.style.left = -3*base + "px";}
        if (l==4) {i.style.left = -4*base + "px";}
        if (l<0) {l=0;}
    }
}
}
