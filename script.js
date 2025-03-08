function fix() {
    //Write your code here!
    let coconut = document.getElementById('coconut');
    coconut.remove();

    let coast = document.getElementById('coast');
    coast.remove();

    let watermelon = document.getElementById('watermelon');
    watermelon.remove();

    let sunflowers = document.getElementById('sunflowers');
    sunflowers.remove();

    let gallery = document.getElementById('photos');

    let tree = document.createElement('img');
    tree.id = 'tree';
    tree.src = 'to-add/christmasTree.jpg';
    gallery.appendChild(tree);

    let snowmen = document.createElement('img');
    snowmen.id = 'snowmen';
    snowmen.src = 'to-add/snowmen.jpg';
    gallery.appendChild(snowmen);

    let stockings = document.createElement('img');
    stockings.id = 'stockings';
    stockings.src = 'to-add/stockings.jpg';
    gallery.appendChild(stockings);

    let holidaygifts = document.createElement('img');
    holidaygifts.id = 'holidaygifts';
    holidaygifts.src = 'to-add/holiday-gifts.jpg';
    gallery.appendChild(holidaygifts);
}