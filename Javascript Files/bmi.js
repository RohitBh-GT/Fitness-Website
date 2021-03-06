const height=document.querySelector("#height");
const weight=document.querySelector("#weight");
const checkBmi=document.querySelector('.check-bmi-btn');
var bmiScoreText=document.querySelector('.scoreText');
var bmiScore=document.querySelector('.score');
const tableRows=document.querySelectorAll("tr");
const resultTitle=document.querySelector(".resultTitle");
const resultImage=document.querySelector('.resultImage');
const resultBox=document.querySelector('.result-box');
const bmiResultCategory=document.querySelector('.bmi-result-category');
const para=document.querySelector('.para');
const image=document.querySelector('.resultImage img');
const bmiChecker=document.querySelector('#bmiChecker');

console.log(typeof(height.value));


function calculateBmi(){
   tableRows.forEach(i=> i.style.backgroundColor="transparent"); 
   var heightValue=height.value / 100;
   var h=Math.pow(heightValue,2);
   var weightValue=weight.value;
   var bmi= (weightValue/h);
   bmi=Math.floor(bmi*100);
   bmi=bmi/100;
   bmiScoreText.classList.remove('makeInvisible');
   bmiScore.textContent=bmi;
   bmiScore.classList.remove('makeInvisible');
   resultTitle.classList.remove('makeInvisible');
   resultImage.classList.remove('makeInvisible');
   resultBox.classList.remove('makeInvisible');
   image.classList.remove('makeInvisible');

   if(bmi<18.5){ 
      tableRows[1].style.backgroundColor="#62fa57";
      image.setAttribute("src","../underweight.png");
      bmiResultCategory.textContent='You are Underweight';
      para.textContent='Increase your weight with our perfect diet by signing in on our website and remain fit.'; 
      bmiChecker.style.background='#7bc1d1'; 
   }
   else if(bmi>=18.5 && bmi<=25){
    tableRows[2].style.backgroundColor="#62fa57";
    image.setAttribute("src","../normal.png");
    bmiResultCategory.textContent='You are Normal';
    para.textContent='Maintain your weight and eat a healthy diet to maintain your body in this range by signing in on our website and remain fit.'; 
    bmiChecker.style.background='#0cf7a8';    
   }
   else if(bmi>25&&bmi<=30){
    tableRows[3].style.backgroundColor="#62fa57";
    image.setAttribute("src","../overweight.png");
    bmiResultCategory.textContent='You are Overweight';
    para.textContent='You need to decrease your weight. You are too short to have a normal BMI.'+
                          'So sign in on our website and remain fit.'; 
    bmiChecker.style.background='#f7ad4d';                    
   }
   else if(bmi>30 && bmi<=35){
    tableRows[4].style.backgroundColor="#62fa57";
    image.setAttribute("src","../obese.png");
    bmiResultCategory.textContent='You are Obese';
    para.textContent='Being obese is a serious issue and bring with it serious health problems. So in order to remain fit and decrease your weight, Sign in on our website and remain fit.'; 
    bmiChecker.style.backgroundColor='#f7ad4d';
   }
   else if(bmi>35){
    tableRows[5].style.backgroundColor="#62fa57";
    image.setAttribute("src","../extreme-obesity.png");
    bmiResultCategory.textContent='You are Extreme Obese';
    para.textContent='Too high BMI, its a serious cause and can lead to many health problems. So Sign in to our website and choose expert level exercise plan and reduce your weight.'; 
    bmiChecker.style.backgroundColor='#d40000';
   }

}

checkBmi.addEventListener('click',calculateBmi);