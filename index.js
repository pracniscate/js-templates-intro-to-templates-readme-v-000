function addComment() {
    // prevent from submitting and reloading the page
    event.preventDefault();
    let bodyText = document.getElementById("commentText").value;
    let commenter = document.getElementById("commenterName").value;

    let commentBody = createCommentBody(bodyText);
    let commenterLabel = createCommenterLabel(commenter);
    postNewComment(commentBody, commenterLabel);
};

function createCommentBody(comment) {
    let bodyDiv = document.createElement("div");
    let bodyPara = document.createElement("p");
    bodyPara.innerHTML = comment;
    bodyDiv.appendChild(bodyPara);
    return bodyDiv;
};

function createCommenterLabel(commenter) {
    let commenterDiv = document.createElement("div");
    let commenterLabel = document.createElement("p");
    commenterLabel.innerHTML = "posted by: ";
    let commenterName = document.createElement("span");
    commenterName.innerHTML = commenter;
    commenterLabel.appendChild(commenterName);
    commenterDiv.appendChild(commenterLabel);
    return commenterDiv;
};

function postNewComment(body, commenter) {
    let commentsDiv = document.getElementById("comments");
    let newCommentDiv = document.createElement("div");
    newCommentDiv.appendChild(body);
    newCommentDiv.appendChild(commenter);
    commentsDiv.appendChild(newCommentDiv);
};