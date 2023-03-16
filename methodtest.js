export function getEvent () {
    let output = document.getElementById('response');
    let id = document.getElementById('id').value;
    let name = document.getElementById('article_name').value;
    let body = document.getElementById('article_body').value;
    let date = new Date().toString();
    let url = 'https://httpbin.org/get?' + new URLSearchParams({
        id: id,
        name: name,
        body: body,
        date: date,
    });
    fetch(url)
    .then((response) => response.json())
    .then((result) => {
        output.innerHTML = JSON.stringify(result, undefined, 3);
    });
}

export function deleteEvent () {
    let output = document.getElementById('response');
    let id = document.getElementById('id').value;
    let name = document.getElementById('article_name').value;
    let body = document.getElementById('article_body').value;
    let date = new Date().toString();
    let url = 'https://httpbin.org/delete?' + new URLSearchParams({
        id: id,
        name: name,
        body: body,
        date: date,
    });
    fetch(url, {
        method: "DELETE"
    })
    .then((response) => response.json())
    .then((result) => {
        output.innerHTML = JSON.stringify(result, undefined, 3);
    });
}

export function postEvent () {
    let output = document.getElementById('response');
    let id = document.getElementById('id').value;
    let name = document.getElementById('article_name').value;
    let body = document.getElementById('article_body').value;
    let date = new Date().toString();
    let url = 'https://httpbin.org/post';
    let data = {
        id: id,
        name: name,
        body: body,
        date: date,
    };
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((result) => {
        result.data = JSON.parse(result.data);
        output.innerHTML = JSON.stringify(result, undefined, 3);
    });
}

export function putEvent () {
    let output = document.getElementById('response');
    let id = document.getElementById('id').value;
    let name = document.getElementById('article_name').value;
    let body = document.getElementById('article_body').value;
    let date = new Date().toString();
    let url = 'https://httpbin.org/put';
    let data = {
        id: id,
        name: name,
        body: body,
        date: date,
    };
    fetch(url, {
        method: "PUT",
        body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((result) => {
        result.data = JSON.parse(result.data);
        output.innerHTML = JSON.stringify(result, undefined, 3);
    });
}