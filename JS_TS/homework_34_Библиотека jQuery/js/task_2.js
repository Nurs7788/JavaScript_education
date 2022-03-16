class FigureDrawer {
    colorFigure = '';
    arrColor = ['red', 'blue', 'raspberry', 'pink', 'gold', 'silver', 'gray', 'purple', 'green', 'indian red', 'crimson', 'lightpink', 'palevioletred', 'hotpink'];
    size = 0;
    figureAmount = 0;

    constructor(amount) {
        this.figureAmount = amount;
    }
    
    randomColor() {
        this.colorFigure = this.arrColor[Math.floor(Math.random() * this.arrColor.length)];
        return this.colorFigure;
    };

    getRandomSize(min, max) {
        return this.size = Math.floor(Math.random() * (max - min)) + min;
    };

    getRandomPosition(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    drawCircles() {
        const container = $('body');
        const _height = document.documentElement.clientHeight;
        const _width = document.documentElement.clientWidth;
        container.css({
            margin: '0',
            height: _height,
            width: _width,
            overflow:  'hidden',
            position: 'relative'
        });
        for(let i = 0; i < this.figureAmount; i ++) {
            this.randomColor();
            this.getRandomSize(50, 200);
            const el = $('<div></div>');
            el.css({
                borderRadius: '50%',
                width: this.size,
                height: this.size,
                background: this.colorFigure,
                position: 'absolute',
                top: this.getRandomPosition(1, _height),
                right: this.getRandomPosition(1, _width),
                bottom: this.getRandomPosition(1, _height),
                left: this.getRandomPosition(1, _width)
            });

            $('body').append(el);
        };
    }; 
};

