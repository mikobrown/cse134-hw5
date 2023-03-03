export function alertDialog () {
    hideEls();
    document.getElementById('result').innerText = "";
    let okBtn = document.getElementById('okAlert');

    document.getElementById('dialogText').innerText = "Alert Pressed";
    document.getElementById('dialogBox').open = true;
    okBtn.style.display = "inline";

    okBtn.addEventListener('click', okAlertDialog);
}

export function confirmDialog () {
    hideEls();
    let cancelBtn = document.getElementById('cancelConfirm');
    let okBtn = document.getElementById('okConfirm');

    document.getElementById('dialogText').innerText = "Do you confirm?";
    cancelBtn.style.display = "inline";
    okBtn.style.display = "inline";
    document.getElementById('dialogBox').open = true;

    cancelBtn.addEventListener('click', cancelConfirmDialog);
    okBtn.addEventListener('click', okConfirmDialog);
}

export function promptDialog () {
    hideEls();
    let cancelBtn = document.getElementById('cancelPrompt');
    let okBtn = document.getElementById('submit');
    let form = document.getElementById('form');

    document.getElementById('dialogText').innerText = "What is your name?";
    cancelBtn.style.display = "inline";
    okBtn.style.display = "inline";
    form.style.display = "inline";
    document.getElementById('dialogBox').open = true;

    cancelBtn.addEventListener('click', cancelPromptDialog);
    form.addEventListener('submit', submitPromptEvent);
}

function hideEls () {
    let dialogEls = document.querySelectorAll('#dialogBox > *');
    for (const el of dialogEls) {
        el.style.display = "none";
    }
    document.getElementById('dialogText').style.display = "inline";
}

function okAlertDialog () {
    console.log('okAlert');
    document.getElementById('dialogBox').open = false;
}

function cancelConfirmDialog () {
    console.log('cancelConf');
    document.getElementById('dialogBox').open = false;
    document.getElementById('result').innerText = `confirm value: false`;
}

function okConfirmDialog () {
    console.log('okConf');
    document.getElementById('dialogBox').open = false;
    document.getElementById('result').innerText = `confirm value: true`;
}

function cancelPromptDialog () {
    console.log('cancelPrompt');
    document.getElementById('dialogBox').open = false;
    document.getElementById('result').innerText = `User didn't enter anything`;
    document.getElementById('promptInput').value = '';
}

function submitPromptEvent (e) {
    console.log('okPrompt');
    console.log('submitPrompt');
    document.getElementById('dialogBox').open = false;
    let formEntry = DOMPurify.sanitize(new FormData(e.target).get('promptInput'));
    let resultEl = document.getElementById('result');
    if (formEntry.length == 0) {
        resultEl.innerText = "User didn't enter anything";
    }
    else {
        resultEl.innerText = 'Hello ' + formEntry;
    }
    document.getElementById('promptInput').value = '';
    e.preventDefault();
}