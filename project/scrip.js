// Make mobile navigation work
const btnNavEl = document.querySelector('.mobile-nav-btn');
const headerEl = document.querySelector('.nav-bar');
const header2El = document.querySelector('.section-header-about')


btnNavEl.addEventListener('click', function(){
    headerEl.classList.toggle('nav-open');
})
// ('nav-open')

// btnNavEl.addEventListener('click', function(){
//     ;
// })


// var userFirst = document.getElementById('name');
// var userLastName = document.getElementById('lName');
// // var userEmail = document.getElementById('email');
// var userNumber = document.getElementById('number');
// var userMessage = document.getElementById('message');
// var clickBtn = document.getElementById('saveButton');


// clickBtn.addEventListener("click", function(){
//     var userFirstInput = userFirst.value;
//     var userNameDisplay = document.createElement("div");
//     userNameDisplay.innerHTML = userFirst;

//     userNameDisplay.classList.add("name")
//     document.querySelector('.profile').appendChild(userNameDisplay);

//     console.log(userFirstInput);
// });



var UserEmailInput = document.getElementById("email");
var saveButton = document.getElementById("cta-btn");

saveButton.addEventListener('click', function(){
    var userEmail = UserEmailInput.value;
    var userEmailDisplay = document.createElement('div');
    userEmailDisplay.innerHTML = userEmail;
    userEmailDisplay.classList.add("userEmail");
    document.querySelector('.email-text').appendChild(userEmailDisplay);
});
