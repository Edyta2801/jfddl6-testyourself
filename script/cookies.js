if(localStorage.getItem('person', 'visited')){
    document.getElementById('cookies').classList.add('cookies__hidden');
}

function buttonClick(){
    localStorage.setItem('person', 'visited');
    document.getElementById('cookies').classList.add('cookies__hidden');
}

document.getElementById('cookies__button').addEventListener('click', buttonClick);