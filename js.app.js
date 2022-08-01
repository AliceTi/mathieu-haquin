const navigation = document.querySelector('section')


// Anim click

window.addEventListener('click', (e) => {

    //console.log(e);

    const rond = document.createElement('div');
    rond.className = 'clicAnim';
    rond.style.top = `${e.pageY - 50}px`;
    rond.style.left = `${e.pageX - 50}px`;
    document.body.appendChild(rond);

    setTimeout(() => {
    rond.remove();
    }, 1500)
})