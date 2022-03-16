$(() => {
    const container = $('#container');
    const startAdd = $('#start');
    const stopAdd = $('#stop');
    const btn = $('a');
    let interval = null;

    let colorFigure = '';
    
    const arrColor = ['red', 'blue', 'raspberry', 'pink', 'gold', 'silver', 'gray', 'purple', 'green', 'indian red', 'crimson', 'lightpink', 'palevioletred', 'hotpink'];

    function randomColor() {
        colorFigure = arrColor[Math.floor(Math.random() * arrColor.length)];
        return colorFigure;
    };



    btn.css({
        border: "none",
        color: "white",
        padding: "10px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "60px"
    });

    startAdd.css({
        backgroundColor: "#4CAF50"
    });

    stopAdd.css({
        backgroundColor: "#f44336"
    });

    const createElement = (item, itemClass, itemText, callback) => {
        randomColor();
        const newDiv = $(item).text(itemText).addClass(itemClass);
        callback(newDiv);

        newDiv.css({
            fontSize: "50px",
            color: colorFigure
        });

        return newDiv;
    };

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };


    interval = setInterval(() => {
        createElement('<div></div>', 'element', getRandomInt(20),newDiv => {
            container.append(newDiv);
        });
    }, 5000);


    startAdd.on('click', () => {
        if(interval) return;
        
        interval = setInterval(() => {
            createElement('<div></div>', 'element', getRandomInt(20),newDiv => {
                container.append(newDiv);
            });
        }, 5000);
    });

    stopAdd.on('click', () => {
        clearInterval(interval);
        interval = null;
    });
});

