let button = document.querySelector('#calc-btn');
button.addEventListener('click', (e)=>{
    e.preventDefault();
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let answer = (weight / ((height*height) /10000)).toFixed(2);
    console.log(answer)
    let result = document.getElementById('output');
    result.innerHTML = answer

    if(answer<=18.5){
        result.innerHTML= 'underweight:' +answer
    }else if(answer>18.5){
        result.innerHTML= 'normal:' + answer
    }else if (answer<=30) {
        result.innerHTML= 'over-weight:'+ answer
    }
 })








