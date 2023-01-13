function newPost() {
    let name = document.querySelector("#post-author").value;
    let content = document.querySelector("#post-text").value;

    let post = document.createElement("div");
    post.classList.add("post");
    document.querySelector(".forum").append(post);

    let span = document.createElement("span");
    span.innerHTML = name;
    post.append(span);

    let paragraph = document.createElement("p");
    paragraph.innerHTML = content;
    post.append(paragraph);

    ClearFields();
}

function ClearFields(){
    document.querySelector("#post-author").value = null;
    document.querySelector("#post-text").value = null;
    var name = document.forms[0].Name.value = null;
    var email = document.forms[0].Email.value = null;
    var option = document.forms[0].experience.value = null;
}

const form  = document.getElementById('signup-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(validate()) {
        form.submit();
    }
    ClearFields();
});

function validate(){
    const form  = document.getElementById('signup-form');

    var name = document.forms[0].Name.value;
    var email = document.forms[0].Email.value;
    var option = document.forms[0].experience.value;

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    var regName = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;                      // Javascript reGex for Name validation

    if(name == "" || !regName.test(name)){
        alert("Please enter your name properly.");
        return false;
    }

    if(option == ""){
        alert("Please choose your programming experience");
        return false;
    }

    if (email == "" || !regEmail) {
        alert("Please enter a valid e-mail address.");
        return false;
    }

    return true;
}

function showForum(){
    var forum = document.getElementById("dumb");
    var button = document.getElementById("visibilityButton");

    if(forum.style.visibility == "visible"){
        forum.style.visibility = "hidden";
        button.value = "Hide forum";
    } else {
        forum.style.visibility = "visible";
        button.value = "Show forum";
    }
}

$(document).ready(function(){
    $("#pinkButton").click(function(){
        $("*").css('color','#FF44CC');
    });
});
