const sliderLine = document.querySelector('.slider-line');
let a = 0;

document.getElementById('one').style.backgroundColor = '#8A4A44';

document.getElementById('one').addEventListener('click', function(){
    sliderLine.style.left = '0';
    document.getElementById('one').style.backgroundColor = '#8A4A44';
    document.getElementById('two').style.backgroundColor = '#FFFFFF';
    document.getElementById('three').style.backgroundColor = '#FFFFFF';
    document.getElementById('four').style.backgroundColor = '#FFFFFF';
    document.getElementById('five').style.backgroundColor = '#FFFFFF';
    a = 100;
});

document.getElementById('two').addEventListener('click', function(){
    sliderLine.style.left = '-100%';
    document.getElementById('one').style.backgroundColor = '#FFFFFF';
    document.getElementById('two').style.backgroundColor = '#8A4A44';
    document.getElementById('three').style.backgroundColor = '#FFFFFF';
    document.getElementById('four').style.backgroundColor = '#FFFFFF';
    document.getElementById('five').style.backgroundColor = '#FFFFFF';
    a = 0;
});

document.getElementById('three').addEventListener('click', function(){
    sliderLine.style.left = '-200%';
    document.getElementById('one').style.backgroundColor = '#FFFFFF';
    document.getElementById('two').style.backgroundColor = '#FFFFFF';
    document.getElementById('three').style.backgroundColor = '#8A4A44';
    document.getElementById('four').style.backgroundColor = '#FFFFFF';
    document.getElementById('five').style.backgroundColor = '#FFFFFF';
    a = -100;
});

document.getElementById('four').addEventListener('click', function(){
    sliderLine.style.left = '-300%';
    document.getElementById('one').style.backgroundColor = '#FFFFFF';
    document.getElementById('two').style.backgroundColor = '#FFFFFF';
    document.getElementById('three').style.backgroundColor = '#FFFFFF';
    document.getElementById('four').style.backgroundColor = '#8A4A44';
    document.getElementById('five').style.backgroundColor = '#FFFFFF';
    a = -200;
});

document.getElementById('five').addEventListener('click', function(){
    sliderLine.style.left = '-400%';
    document.getElementById('one').style.backgroundColor = '#FFFFFF';
    document.getElementById('two').style.backgroundColor = '#FFFFFF';
    document.getElementById('three').style.backgroundColor = '#FFFFFF';
    document.getElementById('four').style.backgroundColor = '#FFFFFF';
    document.getElementById('five').style.backgroundColor = '#8A4A44';
    a = -300;
});

function autoSlide(){
    a -= 100;   
    sliderLine.style.left = a + '%';
    if(sliderLine.style.left == '-400%'){
        a = 100;
        document.getElementById('one').style.backgroundColor = '#FFFFFF';
        document.getElementById('two').style.backgroundColor = '#FFFFFF';
        document.getElementById('three').style.backgroundColor = '#FFFFFF';
        document.getElementById('four').style.backgroundColor = '#FFFFFF';
        document.getElementById('five').style.backgroundColor = '#8A4A44';
    }
    else if(sliderLine.style.left == '-300%'){
        document.getElementById('one').style.backgroundColor = '#FFFFFF';
        document.getElementById('two').style.backgroundColor = '#FFFFFF';
        document.getElementById('three').style.backgroundColor = '#FFFFFF';
        document.getElementById('four').style.backgroundColor = '#8A4A44';
        document.getElementById('five').style.backgroundColor = '#FFFFFF';
    }
    else if(sliderLine.style.left == '-200%'){
        document.getElementById('one').style.backgroundColor = '#FFFFFF';
        document.getElementById('two').style.backgroundColor = '#FFFFFF';
        document.getElementById('three').style.backgroundColor = '#8A4A44';
        document.getElementById('four').style.backgroundColor = '#FFFFFF';
        document.getElementById('five').style.backgroundColor = '#FFFFFF';
    }
    else if(sliderLine.style.left == '-100%'){
        document.getElementById('one').style.backgroundColor = '#FFFFFF';
        document.getElementById('two').style.backgroundColor = '#8A4A44';
        document.getElementById('three').style.backgroundColor = '#FFFFFF';
        document.getElementById('four').style.backgroundColor = '#FFFFFF';
        document.getElementById('five').style.backgroundColor = '#FFFFFF';
    }
    else if(sliderLine.style.left == '0%'){
        document.getElementById('one').style.backgroundColor = '#8A4A44';
        document.getElementById('two').style.backgroundColor = '#FFFFFF';
        document.getElementById('three').style.backgroundColor = '#FFFFFF';
        document.getElementById('four').style.backgroundColor = '#FFFFFF';
        document.getElementById('five').style.backgroundColor = '#FFFFFF';
    }
}

setInterval(autoSlide, 5000);