function show_clock(){
    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0];
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    h.style.transform = `rotate(${30 * hours + minutes/2}deg)`;
    m.style.transform = `rotate(${6 * minutes}deg)`;
    s.style.transform = `rotate(${6 * seconds}deg)`;
    let sound = new Audio('sound2.mp3');
    sound.play();
}
setInterval(show_clock, 1000);

// setInterval(()=>{
//     d=new Date();
//     htime=d.getHours();
//     mtime=d.getMinute();
//     stime=d.getSecond();
//     hrotation=30*htime + mtime/2;
//     mrotation=6*mtime;
//     srotation=6*stime;
//     hr.style.transform='rotate(${hrotation}deg)';
//     mn.style.transform='rotate(${hrotation}deg)';
//     ss.style.transform='rotate(${hrotation}deg)';
// },1000);
