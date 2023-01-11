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
}
