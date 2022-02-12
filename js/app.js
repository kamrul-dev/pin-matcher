// 4 digit pin generate function
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit pin');
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

// number from key pad in display and validation
document.getElementById('key-pad').addEventListener('click',
    function (event) {
        const number = event.target.innerText;
        const calcInput = document.getElementById('typed-numbers');
        if (isNaN(number)) {
            if(number == 'C'){
                calcInput.value = '';
            }
        }
        else {
           
            const previousNumber = calcInput.value;
            const newNumber = previousNumber + number;
            calcInput.value = newNumber;
        }
    });

// veryfy the numbers are matched or not
    function verifyPin(){
        const pin = document.getElementById('display-pin').value;
        const typedNumbbers = document.getElementById('typed-numbers').value;
        const successMessage  = document.getElementById('notify-success');
        const failError = document.getElementById('notify-failed');

        if(pin == typedNumbbers){          
            successMessage.style.display = 'block';
            failError.style.display = 'none';
        }
        else{          
            failError.style.display = 'block';
            successMessage.style.display = 'none';
        }


    }