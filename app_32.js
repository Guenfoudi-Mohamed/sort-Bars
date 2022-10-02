// app_31


const arr = [];
function setBarValue(){
    arr.length = 0;
    for(let i = 0;i<10;i++){
        arr.push(Math.ceil(Math.random() * 10));
    }
    displayBar(arr);
}

function btnSort(){
    sortBarValue(arr);
    displayBar(arr);
}

function sortBarValue(arr){
    for(let i = 0;i<arr.length-1;i++){
        for(let x = i+1;x<arr.length;x++){
            if(arr[i]>arr[x]){
                [arr[x],arr[i]]=[arr[i],arr[x]];
            }
        }
    }
}
function displayBar(arr){
    document.querySelector('body #container .bars').innerHTML = '';
    for(let i = 0;i<arr.length;i++){
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.setProperty('height',`${(arr[i] * 30)}px`);
        document.querySelector('body #container .bars').appendChild(bar);
    }
};
// console.log(window.matchMedia('(prefers-color-scheme: dark)').matches); detect mode dark or light ?!
document.addEventListener('DOMContentLoaded',function(){setBarValue()});
