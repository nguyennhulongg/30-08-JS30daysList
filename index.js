const addItems = document.querySelector('.add-items');
const itemList = document.querySelector('.plates')
const items = [];

function addItem(e) {
    const text = document.getElementById('dish').value;
    e.preventDefault();
    const item = {
        text: text,
        done: false
    };

    items.push(item);
    populateList(items, itemList)
    addItems.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" name="check" id="checkbox">
            <label>${plate.text}</label>
        </li>
        `
    }).join('')
}

addItems.addEventListener('submit', addItem);