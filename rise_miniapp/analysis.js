var landingPage = document.getElementById("landing=page");
var contactPage = document.getElementById("email-page");
var detectBSButton = document.getElementById("detect-bs-button");
var post = "";

var emailButton = document.getElementById("email-button");
landingPage.style.display = "flex";
contactPage.style.display = "none";
var button = document.getElementById("email-button").disabled = true;

function checkInput() {
    event.preventDefault();
    post = document.getElementById("input-textarea").value;
    if (post == "") {
        alert("Please provide some text!");
    } else {
        landingPage.style.display = "none";
        contactPage.style.display = "flex";
        results();
    }
}

function validateEmail() {
    event.preventDefault();
    var email = document.getElementById("email-text").value;

    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

    if(regx.test(email)) {
        return true;
    } else {
        return false;
    }
}
function validateLinkedIn() {
    event.preventDefault();
    var linkedin = document.getElementById("linkedin-text").value;

    var regx = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

    if(regx.test(linkedin)) {
        return true;
    } else {
        return false;
    }
}
function doClick() {
    event.preventDefault();
    var button = document.getElementById("email-button");
    if (validateEmail() || validateLinkedIn()) {
        button.disabled = false; 
    }
        
}



function results() {
    var returnValue = "";
    let count = 0;

    if (post.includes("to announce") || post.includes("to finally announce") || post.includes("to share")) {
        returnValue += "\nWow &#128525 What an original way to make an announcement! &#128528 "
        count ++;
    } 
    if (count < 3 && post.includes("humbled")) {
        returnValue += "This post has truly humbled me &#128553"
        count ++;
    } 
    if (count < 3 && post.includes("storytime") || post.includes("story time") || post.includes("tell you a story")) {
        returnValue += "Save your stories for a different platform..."
        count ++;
    } 
    if (count < 3 && post.includes("NFT")) {
        returnValue += "No but really, what is a NFT?!?"
        count ++;
    } 
    if (count < 3 && post.includes("Bitcoin")) {
        returnValue += "No but really, what is a bit coin?!?"
        count ++;
    } 
    if (count < 3 && post.includes("Crypto")) {
        returnValue += "No but really, what is a crypto?!?"
        count ++;
    } 
    if (count < 3 && post.includes("thought leader") || post.includes("thoughtleader") || post.includes("Thought Leader")) {
        returnValue += "Hey, my mom once told me I was a thought leader too!"
        count ++;
    } 
    if (count < 3 && post.includes("#careeradvice")) {
        returnValue += "#tHanKsfOrthEcAreeRadVice!"
        count ++;
    } 
    if (count < 3 && numHashtags(post) > 3) {
        returnValue += "This isn't a phone book, why so many pound signs(#) ?"
        count++
    }
    if (count == 0) {
        returnValue += "\nA bit boring don't you think?!😓"
    }
    localStorage.setItem("output", returnValue);
    post = returnValue;
}

function numHashtags(s) {
    let res = 0;
    let c = '#'
 
        for (let i = 0; i < s.length; i++)
        {
            if (s.charAt(i) == c)
            res++;
        }
        return res;
}