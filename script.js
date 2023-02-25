const qvizDB=[
    {
        question:"Q1: What is the full form of HTML?",
        a:"HighText Machine Language",
        b: "HyperText Markup Language",
        c:"HyperText and links Markup Language",
        d: "None of these", 
        ans: "ans2"

    },
    {
        question:"Q2:The correct sequence of HTML tags for starting a webpage is - ?",
        a:"Head, Title, HTML, body",
        b:"HTML, Body, Title, Head",
        c:" HTML, Head, Title, Body",
        d:"Head ,  HTML, Title, Body",
        ans:"ans3"


    },
    {
        question:" Q3:Which of the following element is responsible for making the text bold in HTML?",
        a:" <pre>",
        b:"<a>",
        c:"<b>",
        d:"<br>",
        ans:"ans3"
    },
    {
        question:" Q4:Which character is used to represent the closing of a tag in HTML?",

        a:"/",
        b:"!",
        c:"/",
        d:".",
        ans:"ans3"

    },
    {
        question:"Q5 How to create an unordered list (a list with the list items in bullets) in HTML?",
        a:"<ul>",
        b:"<ol>",
        c:"<li>",
        d:"<i></i>",
        ans:"ans1"

    },
    {
        question:"Q6: What is the full form of HTML?",
        a:"HighText Machine Language",
        b: "HyperText Markup Language",
        c:"HyperText and links Markup Language",
        d: "None of these", 
        ans:"ans2"


    },
    {
        question:"Q7:The correct sequence of HTML tags for starting a webpage is - ?",
        a:"Head, Title, HTML, body",
        b:"HTML, Body, Title, Head",
        c:" HTML, Head, Title, Body",
        d:"Head ,  HTML, Title, Body",
        ans:"ans3"

    },
    {
        question:" Q8:Which of the following element is responsible for making the text bold in HTML?",
        a:" <pre>",
        b:"<a>",
        c:"<b>",
        d:"<br>",
        ans:"ans3"

    },
    {
        question:" Q9:Which character is used to represent the closing of a tag in HTML?",
        a:"/",
        b:"!",
        c:"/",
        d:".",
        ans: "ans3"

    },
    {
        question:"Q10 How to create an unordered list (a list with the list items in bullets) in HTML?",
        a:"<ul>",
        b:"<ol>",
        c:"<li>",
        d:"<i></i>",
        ans:"ans1"

    },
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const next = document.querySelector('#next');
const data = document.querySelector('.data');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');


let quescount=0;
let score=0;
var questionList =qvizDB[quescount];

const loadquestion =()=>{
    
     questionList =qvizDB[quescount];
    question.innerText=questionList.question;
    option1.innerText =questionList.a;
    option2.innerText =questionList.b;
    option3.innerText =questionList.c;
    option4.innerText =questionList.d;
    
}

loadquestion();

const getCheckAnswer = ()=>{
    let answer;
    
    answers.forEach((curAnsElement) => {
       
        if(curAnsElement.checked)
        {
            
            answer = curAnsElement.id;
        }
        
    });
   
    return answer;
}
function submitcall()
{
    const checkedAnswer =getCheckAnswer();
    
    
    if(checkedAnswer === questionList.ans)
    {
        score++;
        result1.innerText="correct";
        
    }
    else
    {
        if(checkedAnswer==undefined)
       {
        result1.innerText="you have skipped the question";
        
       }
       else
        result1.innerText="Incorrect";
    }

}

submit.addEventListener('click',()=>{
   
submitcall();
    
});

next.addEventListener('click',()=>{
    submitcall();
    
    
    result1.innerText=" ";
    const answ =getCheckAnswer();

    if(answ==undefined)
    {
        alert("you have skipped the question");
    }
    quescount++;
    
    if(quescount<qvizDB.length)
    {
        deselectall();
        loadquestion();
    }
    else{
        data.innerHTML='';

        let str='';
        quescount=0;
        while(quescount<qvizDB.length)
    {
        questionList =qvizDB[quescount];
        str +=` 
        <label class="ques">${questionList.question}<br><label>
        <label class="myans">${questionList.ans}<br></label>`

        quescount++;
    }
       

        data.innerHTML=str;

       
        
        showscore.innerHTML=`
        <h3> your score is ${score}/${qvizDB.length}</h3>
        <button class="btn" onclick="location.reload()">play again </button>
        `;
        showscore.classList.remove('scorearea');

    }
});

function deselectall()
{
    answers.forEach((curAnsElement) => 
    {
        curAnsElement.checked =false;
    });
}


