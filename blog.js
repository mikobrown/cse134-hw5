export function init () {
    let blogPosts = localStorage.getItem('posts');
    if (blogPosts == null) {
        localStorage.setItem('posts', JSON.stringify(new Array()));
    }
}

export function createPost () {
    let form = document.getElementById('form');
    let dialogBox = document.getElementById('dialogBox');
    dialogBox.open = true;
    form.removeEventListener('submit', editPostSubmit);
    form.addEventListener('submit', appendPost);
}

export function getPosts () {
    let blogPosts = JSON.parse(localStorage.getItem('posts'));
    let postList = document.getElementById('postList');
    if (blogPosts.length == 0) {
        document.getElementById('noPostsText').innerText = "No posts";
    }
    else {
        document.getElementById('noPostsText').innerText = "";
    }
    let li, editBtn, deleteBtn;
    for (const post of blogPosts) {
        li = document.createElement('li');
        li.innerText = post.title + " (" + post.date + ") Summary: " + post.summary + " ";
        editBtn = document.createElement('button');
        editBtn.innerText = 'edit';
        deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'delete';
        postList.appendChild(li);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        editBtn.addEventListener('click', editPost);
        deleteBtn.addEventListener('click', deleteDialog);
    }
}

function deleteDialog () {
    document.getElementById('deleteDialog').open = true;
    localStorage.setItem('title', this.parentElement.innerText.split(' ')[0]);
    document.getElementById('ok').addEventListener('click', deletePost);
    document.getElementById('cancel').addEventListener('click', () => {
        document.getElementById('deleteDialog').open = false;
    })
}

export function deletePost () {
    document.getElementById('deleteDialog').open = false;
    let title = localStorage.getItem('title');
    let blogPosts = JSON.parse(localStorage.getItem('posts'));
    for (let i = 0; i < blogPosts.length; i++) {
        if (blogPosts[i].title == title) {
            blogPosts.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('posts', JSON.stringify(blogPosts));
    location.reload();
}

export function editPost () {
    let data = this.parentElement.innerText.split(' ');
    let title = data[0];
    localStorage.setItem('title', title);
    let date = data[1].slice(1,-1);
    let summary = data[3];
    let form = document.getElementById('form');
    let dialogBox = document.getElementById('dialogBox');
    document.getElementById('title').value = title;
    document.getElementById('date').value = date;
    document.getElementById('summary').value = summary;
    dialogBox.open = true;
    form.removeEventListener('submit', appendPost);
    form.addEventListener('submit', editPostSubmit);
}

function appendPost (e) {
    let blogPosts = JSON.parse(localStorage.getItem('posts'));
    let data = new FormData(e.target);
    let newPost = {
        "title" : data.get('title'),
        "date" : data.get('date'),
        "summary" : data.get('summary')
    };
    blogPosts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(blogPosts));
    location.reload();
}

function editPostSubmit (e) {
    let blogPosts = JSON.parse(localStorage.getItem('posts'));
    let data = new FormData(e.target);
    let title = localStorage.getItem('title');
    for (let i = 0; i < blogPosts.length; i++) {
        if (blogPosts[i].title == title) {
            blogPosts[i].title = data.get('title');
            blogPosts[i].date = data.get('date');
            blogPosts[i].summary = data.get('summary');
            break;
        }
    }
    localStorage.setItem('posts', JSON.stringify(blogPosts));
    location.reload();
}