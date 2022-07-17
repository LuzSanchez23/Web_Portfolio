//Node Mailer -- Contact Me Form //
const { append } = require('express/lib/response');
var nodemailer = require('nodemailer');
//Side Nav Code
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");
// let body = document.querySelector("body");

menuBtn.onclick = function() {
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
    // body.style.overflow = "hidden";
}
cancelBtn.onclick = function() {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
    body.style.overflow = "auto";
}
//==========================================================//
//Sticky Nav Menu Code
let nav = document.querySelector("nav");
let val;
window.onscroll = function() {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky")
    }
}
//==========================================================//
//Funtion of Side Navigation when links are clicked//
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener ("click" , ()=> {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
    body.style.overflow = "auto";
    });
}

//==========================================================//
// Node Mailer
app.post('/#contact-me', function (req, res) { 
var transporter = nodemailer.createTransport("SMTP", {
    service: "hotmail",
    auth: {
        user: "nena_baby23@hotmail.com",
        pass: "password"
    }
})
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
    from: 'Luz Sanchez <nena_baby23@hotmail.com>', // sender address 
    to: 'nena_baby23@hotmail.com', // (who receives)
    subject: 'Hello ', // Subject line
    text: 'Thank you for reaching out! ', // plaintext body
    html: '<b>Hello  </b><br> This is the first email sent with Nodemailer in Node.js' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});
