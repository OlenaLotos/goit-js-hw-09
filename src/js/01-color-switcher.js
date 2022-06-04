const bodyRef = document.querySelector('body');
    const buttonStartChangeColorRef = document.querySelector('button[data-start]');
const buttonStopChangeColorRef = document.querySelector('button[data-stop]');
    
buttonStartChangeColorRef.style.width = '60px';
buttonStartChangeColorRef.style.height = '30px';
buttonStartChangeColorRef.style.textTransform = 'uppercase';


buttonStopChangeColorRef.style.width = '60px';
buttonStopChangeColorRef.style.height = '30px';
buttonStopChangeColorRef.style.textTransform = 'uppercase';

buttonStartChangeColorRef.style.marginRight = '20px';
    
    const timer = {
intervalId: null,
isActive: false,
start() {
if (this.isActive) {
return;
}
this.isActive = true;
this.intervalId = setInterval(() => {
    ChangeColorRef()
}, 1000);
},
stop() {
clearInterval(this.intervalId);
this.isActive = false;
},
    };
    
    buttonStartChangeColorRef.addEventListener('click', () => {
timer.start();
    });
    
    buttonStopChangeColorRef.addEventListener('click', () => {
timer.stop();
    });
    
    function getRandomHexColor() {
return `#${Math
.floor(Math.random() * 16777215)
.toString(16)}`;
    };
    
    const ChangeColorRef = () => {
bodyRef.style.backgroundColor = getRandomHexColor();
    };

