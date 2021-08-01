// this makes the quick switcher icon (two arrows) clickable and it hides the user bar


function closeUsers() {
    let target;
    let elementArray = [];
    elementArray = Array.prototype.slice.call(document.getElementsByClassName("membersWrap-2h-GB4"));
    for (target of elementArray){
        target.style.display = 'none';
    }
}

let target;
let elementArray = [];
elementArray = Array.prototype.slice.call(document.getElementsByClassName("channelNotice-1-XFjC"));
for (target of elementArray){
    target.style.cursor = 'pointer';
    target.addEventListener('click', closeUsers, null);
}