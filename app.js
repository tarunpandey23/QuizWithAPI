let ques= document.getElementById("ques");
let optionA=document.getElementById("optA");
let optionB=document.getElementById("optB");
let optionC=document.getElementById("optC");
let optionD=document.getElementById("optD");
let answers=document.querySelectorAll(".answer");
var submit= document.getElementById("submit");
let result=document.getElementById("show");
let questionIndex=0;
let scoreCounter=0;
let Ans=[];
let questions;
fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy")
.then(res=>res.json())
.then(res=>{
   console.log(res)

   function loadQuestion(){
    
     questions=res.results;
        
        for(var i=0;i<questions[questionIndex].incorrect_answers.length;i++){
             Ans.push(questions[questionIndex].incorrect_answers[i]);
             console.log("incoorect answer :",i,questions[questionIndex].incorrect_answers[i])
        }
        console.log(questions[questionIndex].correct_answer);
        Ans.push(questions[questionIndex].correct_answer);

//ye array ese hi h  delete krna h .....
        for(var i=0;i<Ans.length;i++)
        {
            console.log("suffled options :",Ans[i]);
        }


//console.log("new valuesss shuffle")

        for(let i=Ans.length-1;i>0;i--){
            const j=Math.floor(Math.random()*(i+1));
            [Ans[i],Ans[j]]=[Ans[j],Ans[i]];
        }

       /* for(var k=0;k<Ans.length;k++)
        {
            console.log(Ans[k]);
        }*/
         
        ques.innerText="Ques :" + questions[questionIndex].question;
        optionA.innerText=Ans[0];
        optionB.innerText=Ans[1];
        optionC.innerText=Ans[2];
        optionD.innerText=Ans[3];

       // Ans.length=0;
}

loadQuestion();

const getcheckeAnswer=()=>{
    let answer;
    
        if(answers[0].checked){
          // answer=current.id;
        answer=Ans[0];
        Ans.length=0;
        }
        else if(answers[1].checked){
            answer=Ans[1];
            Ans.length=0;

        }
        else if(answers[2].checked){
            answer=Ans[2];
            Ans.length=0;

        }
        else{
            answer=Ans[3];
            Ans.length=0;
        }
 
    
   return answer;
}
const deSelect=()=>{
    answers.forEach((current)=>{
        current.checked=false;
    })

}


submit.addEventListener("click",()=>{
   const getcheckedAns=getcheckeAnswer();

    if(getcheckedAns==questions[questionIndex].correct_answer)
    {
       scoreCounter=scoreCounter+2;
       
    }
   
    questionIndex++;
    deSelect();
    if(questionIndex<questions.length){
        loadQuestion();
    }
    else{
 
   
        result.innerHTML=`<h3>Your Score Is :${scoreCounter}/${(questions.length)*2}</h3>
        <br>
        <button class="btn" onclick="location.reload()" style="margin-bottom:1rem; margin-right:10rem;" > play again</button>
        <br>
        
        `;
       result.classList.remove("showScore");
       
   }
});
});
