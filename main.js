var userName=document.getElementById('userName');
var userMail  = document.getElementById('userMailInp');
var userPass = document.getElementById('userPassInp');

var loginMail = document.getElementById('userMail');
var loginPass = document.getElementById('userPass');

var incorrectPass= document.getElementById('incorrectPass');
var success=document.getElementById('success');
var login=document.getElementById('login');
var logout=document.getElementById('logout');
var signup=document.getElementById('signup');
var signBtn=document.getElementById('signBtn');
var homePage=  document.querySelector('.home-page');
var loginPage= document.querySelector('.login-page');
var signUpPage= document.querySelector('.sign-up-page');

var wel = document.getElementById('w-name');

var personData=[];

if (JSON.parse(localStorage.getItem('info')) != null)
{
    personData=JSON.parse(localStorage.getItem('info'));
}

function addNewPerson()
{
    var  person = {
        name:userName.value,
        mail:userMail.value,
        pass:userPass.value

    }
    personData.push(person)
    localStorage.setItem('info' , JSON.stringify(personData))
   
   clearForm()
}
/////////////////////////////////////////////////////////
  function   clearForm()
{
    userMail.value='';
    userPass.value='';
}
//////////////////////////////////////////////////////////
login.addEventListener('click' , function()
{
    var flag = false ;
    for(var i =0 ; i < personData.length ; i++)
    {
        if( personData[i].mail ==  loginMail.value && personData[i].pass == loginPass.value)
        {
        homePage.classList.add('d-none');
        loginPage.classList.replace('d-none', 'd-block') ;
            flag = true ;
            wel.innerHTML = `welcome ${personData[i].name}` ;
            break ;
        }
       
    }

    if (flag == false)
    {
        incorrectPass.classList.replace('d-none' , 'd-block');
    }
    
}) 
//////////////////////////////////////////////////////
signBtn.addEventListener('click' , function()
{
  addNewPerson();
 
})
//////////////////////////////////////////////////
logout.addEventListener('click' , function()
{
   homePage.classList.replace('d-none' , 'd-flex')
  loginPage.classList.replace('d-block' , 'd-none')
})
//////////////////////////////////////////////
signup.addEventListener('click', function()
{
  signUpPage.classList.replace('d-none','d-flex')
  homePage.classList.add('d-none')
})
