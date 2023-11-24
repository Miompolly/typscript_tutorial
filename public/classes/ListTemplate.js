export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        h4.classList.add('item-heading');
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        p.classList.add('item-description');
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
