// app_32


const arr = [];
let stop;

// set bar Value
function setBarValue(){
    arr.length = 0;
    for(let i = 0;i<10;i++){
        arr.push(Math.ceil(Math.random() * 10));
    }
    displayBar(arr);
    if(!isNaN(stop)){clearInterval(stop);}
}

// function btn sort bars
function btnSort(){
    sortBarValue(arr);
}


// btn sort bars
function sortBarValue(arr){
    
    const bars = document.querySelector('body #container .bars');
    let i = 0;
    let conteurClear = 0;
    console.clear();
    let lastIndex = Number(bars.childElementCount-1);

    stop  = setInterval(function(){
        
        
        let x = i+1;
        
       
        bars.children[i].classList.add('active'); 
        bars.children[x].classList.add('active');
        
        const I = i;
        const X = x;

        if(Number(bars.children[i].heightValue) > Number(bars.children[x].heightValue)){
            bars.insertBefore(bars.children[x],bars.children[i]);
            conteurClear = 0;
        }
        else if(Number(bars.children[i].heightValue) <= Number(bars.children[x].heightValue)){
            conteurClear++;
        }
        
        // console.log(lastIndex,conteurClear)

        if((lastIndex == 0) || (lastIndex == conteurClear)){clearInterval(stop)}
        if(x == lastIndex){
            lastIndex=lastIndex-1;
            i=-1;
            x=i+1;
        }

        // if(conteurClear >= (bars.childElementCount-1)){clearInterval(stop);}
        if(i == bars.childElementCount-2){
            i = -1;
            conteurClear = 0;
        }
        ++i;

        
        setTimeout(function(){
                bars.children[X].classList.remove('active');
                bars.children[I].classList.remove('active');
        },390);   

    },400);
}
// display bars
function displayBar(arr){
    document.querySelector('body #container .bars').innerHTML = '';
    for(let i = 0;i<arr.length;i++){
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.setProperty('height',`${(arr[i] * 30)}px`);
        bar.heightValue = `${arr[i] * 30}`;
        document.querySelector('body #container .bars').appendChild(bar);
    }
};

// console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);          detect mode dark or light ?!
document.addEventListener('DOMContentLoaded',function(){setBarValue()});
