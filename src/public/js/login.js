"use strict";

const id = document.querySelector('#id'),
    psword = document.querySelector('#psword'),
    rememberId = document.querySelector('#rememberId'),
    loginBtn = document.querySelector('button'),
    result = document.querySelector('result');


loginBtn.addEventListener('click', login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value
    };
    
    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success === true) {
            alert(res.success);
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
		console.err(new Error("로그인 중 에러 발생"));
	});
};