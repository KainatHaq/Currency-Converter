
function convertCurrency(){
    const currency = document.getElementById('currency').value;
    const amount = document.getElementById('amount').value;
    let result = document.getElementById('result');
    let value;
    if(currency === 'usd'){
       value = amount * 280;
       result.innerHTML = `Amount In PKR: ${value}.`
    }
    else if(currency === 'eur'){
        value = amount * 305;
        result.innerHTML = `Amount In PKR: ${value}.`
     }
     else if(currency === 'gbp'){
        value = amount * 350;
        result.innerHTML = `Amount In PKR: ${value}.`
     }
     else if(currency === 'aed'){
        value = amount * 77;
       result.innerHTML = `Amount In PKR: ${value}.`
     }
     else if(currency === 'sar'){
        value = amount * 75;
        result.innerHTML = `Amount In PKR: ${value}.`
     }
    }










    // function Calculate(){
    //     const radius = document.getElementById('radius').value;
    //     let para = document.getElementById('para');
    //     const circumference = 2 * 3.14 * radius;
    //     const area = 2 * 3.14 * (radius)^2;
    //     para.innerHTML = `The circumference is: ${circumference}<br/>
    //     The area is: ${area}`
    
    // }
//     <div id="container">
//     <h1>The Geometizer App</h1>
//     <p id="description"><i>
//       ''This program calculates and displays the circumference and area of a circle using the
//       radius, applying the formulas C = 2πr and A = πr² with π approximated as
//       3.142.''</i>
//     </p>
//     <label for="radius">Radius Of A Circle:</label>
//     <input type="number" id="radius" placeholder="Please enter radius of circle"><br>
//     <p id="para"></p>
//     <button id="btn" onclick="Calculate()">Calculate</button>
//   </div>