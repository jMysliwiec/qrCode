function generateTable() {
    // alert("hello");
    let container = document.getElementById("container")
    for (let i = 0; i < 29 * 13; i++) {
        let div = document.createElement('div')
        div.onclick = () => changeColor(div)
        div.classList.add('square')
        container.appendChild(div)
    }
}

function changeColor(element) {
    let color = ''
    switch (element.style.backgroundColor) {
        case '':
            color = '#000000';
            break;
        case 'rgb(0, 0, 0)':
            color = '#FFFFFF';
            break;
        case '#FFFFFF':
            color = '';
            break;
    }
    element.style.backgroundColor = color
}

window.onload = generateTable;