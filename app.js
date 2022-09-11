let ques= document.getElementById("ques");
let optionA=document.getElementById("optA");
let optionB=document.getElementById("optB");
let optionC=document.getElementById("optC");
let optionD=document.getElementById("optD");
let questionIndex=0;
let scoreCounter=0;



fetch("https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple")
.then(res=>res.json())
.then(res=>{
   console.log(res)

   function loadQuestion(){
    
    let questions=res.results;
        let Ans=[];
        for(var i=0;i<questions[questionIndex].incorrect_answers.length;i++){
             Ans.push(questions[questionIndex].incorrect_answers[i]);
             console.log("incoorect complete",i,questions[questionIndex].incorrect_answers[i])
        }
        Ans.push(questions[questionIndex].correct_answer);

//ye array ese hi h  delete krna h .....
        for(var i=0;i<Ans.length;i++)
        {
            console.log("after insert coreect ans in wrong",Ans[i]);
        }
console.log("new valuesss shuffle")
        for(let i=Ans.length-1;i>0;i--){
            const j=Math.floor(Math.random()*(i+1));
            [Ans[i],Ans[j]]=[Ans[j],Ans[i]];
        }
        for(var k=0;k<Ans.length;k++)
        {
            console.log(Ans[k]);
        }
         
        ques.innerText="Ques :" + questions[questionIndex].question;
        optionA.innerText=Ans[0];
        optionB.innerText=Ans[1];
        optionC.innerText=Ans[2];
        optionD.innerText=Ans[3];

// questions.forEach(element => {
//          // optionA.innerText=questions[questionIndex].correct_answer;
//         // optionB.innerText=questions[questionIndex].incorrect_answers[0];
//         // optionC.innerText=questions[questionIndex].incorrect_answers[1];
//         // optionD.innerText=questions[questionIndex].incorrect_answers[2];
//     });
}

loadQuestion();


});
 function checkHandler(){
     console.log("clicked");
     
 }









    