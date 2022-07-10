
var email_label = document.querySelector(".email-label");
var pswdLabel = document.querySelector(".password-label");

//  Converting Email string to an array .

  var e_Label = email_label.textContent;
  email_label.innerHTML = "";
  for (var i = 0; i < e_Label.length; i++) {
   email_label.innerHTML +="<span>" + (e_Label.charAt(i)) +"<span>"
  }

  //  Converting Password string to an array .
var pswd = pswdLabel.textContent;
pswdLabel.innerHTML = "";
for ( var i = 0; i < pswd.length ; i++ ) {
 pswdLabel.innerHTML +="<span>" + (pswd.charAt(i)) +"<span>";
}

// Email label animation 
var e_letters = document.querySelectorAll(".email-label > span");
var emailBox = document.querySelector(".email-textbox");

for( let i = 0 ; i < e_letters.length ; i++ ) {
 e_letters[i].style.transition = i*.2 + 's';
}

emailBox.addEventListener('click', function() {
 for( let i=0 ; i<e_letters.length ; i++ ) {
   e_letters[i].classList.toggle("active");
 }
});

emailBox.addEventListener('focusout', function() {
 if(emailBox.value == "") {
     for( let i=0 ; i<e_letters.length ; i++ ) {
       e_letters[i].classList.toggle("inactive");
     }
 }
});

// Password label animation
var pass_letters = document.querySelectorAll(".password-label > span");
var pswdBox = document.querySelector(".pswd-textbox");

for(let i=0 ; i < pass_letters.length ; i++ ) {
 pass_letters[i].style.transition = i*.1 + 's';
}

pswdBox.addEventListener ('click', function() {
 for( let i = 0 ; i < pass_letters.length ; i++ ) {
   pass_letters[i].classList.toggle("active");
 }
});

pswdBox.addEventListener('focusout', function() {
 if(pswdBox.value == "") { 
     for(let i = 0 ;i < pass_letters.length ; i++) { 
       pass_letters[i].classList.toggle("inactive");
     }
 }
});

// login button click animation effect

var loginBtn = document.querySelector(".login-btn");
loginBtn.addEventListener('click', function(event) {
 for( let i=0 ; i<e_letters.length ; i++ ) {
   e_letters[i].classList.toggle("active");
 }
 event.preventDefault();
});

loginBtn.addEventListener('focusout', function() {
 for( let i=0 ; i<e_letters.length ; i++ ) {
   e_letters[i].classList.toggle("inactive");
 }
});




































