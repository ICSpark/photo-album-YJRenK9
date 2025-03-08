function fix() {
    // gets the image elements and removes those elements
    let coconut = document.getElementById('coconut');
    coconut.remove();
    let coast = document.getElementById('coast');
    coast.remove();
    let watermelon = document.getElementById('watermelon');
    watermelon.remove();
    let sunflowers = document.getElementById('sunflowers');
    sunflowers.remove();

    // gets the div element that stores image elements
    let gallery = document.getElementById('photos');

    // create an image element
    let tree = document.createElement('img');
    // sets its id
    tree.id = 'tree';
    // add the image source
    tree.src = 'to-add/christmasTree.jpg';
    // used in case if image is not shown (not required for this assignment)
    tree.alt = 'christmas tree';
    // append it to the parent element
    gallery.appendChild(tree);

    let snowmen = document.createElement('img');
    snowmen.id = 'snowmen';
    snowmen.src = 'to-add/snowmen.jpg';
    snowmen.alt = 'snowman';
    gallery.appendChild(snowmen);

    let stockings = document.createElement('img');
    stockings.id = 'stockings';
    stockings.src = 'to-add/stockings.jpg';
    stockings.alt = 'stockings';
    gallery.appendChild(stockings);

    let holidaygifts = document.createElement('img');
    holidaygifts.id = 'holidaygifts';
    holidaygifts.src = 'to-add/holiday-gifts.jpg';
    holidaygifts.alt = 'chirstmad presents';
    gallery.appendChild(holidaygifts);
}