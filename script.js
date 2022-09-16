// prompt them for their name and insert it into the DOM (h1)

function insertName(){
    let name = prompt('What is your name, player?');
    document.querySelector('h1').innerText = `Welcome, ${name}!`;
}

insertName();

// picture of cookie you click, every time you click the total goes up

document.querySelector('img').addEventListener('click', function moreCookies(){
    let num = document.querySelector('#cookie-total').innerText++;
    document.querySelector('#cookie-total').style.color = '#E38B29 ';
    if( num % 12 === 0 ) {
        alert('Level up!')
    };
})

