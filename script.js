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

//Node Mailer -- Contact Me Form //
var nodemailer = require('nodemailer');

// Create the transporter with the required configuration for Outlook
// change the user and pass !
var transport = nodemailer.createTransport("SMTP", {
    service: "hotmail",
    auth: {
        user: "nena_baby23@hotmail.com",
        pass: "password"
    }
});

// setup e-mail data, even with unicode symbols
var mailOptions = {
    from: '"Our Code World " <mymail@outlook.com>', // sender address (who sends)
    to: 'mymail@mail.com, mymail2@mail.com', // list of receivers (who receives)
    subject: 'Hello ', // Subject line
    text: 'Hello world ', // plaintext body
    html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});
