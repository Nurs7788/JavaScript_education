"use strict";
class Tool {
    constructor() {
        this.strengthTool = 100;
        this.wearTool = 10;
        this.nameTool = '';
    }
    action() {
        return this.strengthTool -= this.wearTool;
    }
}
;
class Saw extends Tool {
    constructor() {
        super(...arguments);
        this.nameTool = 'Пила';
    }
    action() {
        if (this.strengthTool <= 0) {
            console.log(`Инструмент: ${this.nameTool} сломан!`);
            return 0;
        }
        ;
        super.action();
        console.log(`${this.nameTool}: ЗЫК-ЗЫК-ЗЫК-ЗЫК \nЗапас прочности: ${this.strengthTool}`);
        return this.strengthTool;
    }
}
;
class Axe extends Tool {
    constructor() {
        super(...arguments);
        this.nameTool = 'Топор';
    }
    action() {
        if (this.strengthTool <= 0) {
            console.log(`Инструмент: ${this.nameTool} сломан!`);
            return 0;
        }
        ;
        super.action();
        console.log(`${this.nameTool}: ТЫК-ТЫК-ТЫК-ТЫК \nЗапас прочности: ${this.strengthTool}`);
        return this.strengthTool;
    }
}
;
class Drill extends Tool {
    constructor() {
        super(...arguments);
        this.nameTool = 'Дрель';
    }
    action() {
        if (this.strengthTool <= 0) {
            console.log(`Инструмент: ${this.nameTool} сломан!`);
            return 0;
        }
        ;
        super.action();
        console.log(`${this.nameTool}: ЗЗЗЗЗЗЗЗЗЗЗЗЗ \nЗапас прочности: ${this.strengthTool}`);
        return this.strengthTool;
    }
}
;
class Hammer extends Tool {
    constructor() {
        super(...arguments);
        this.nameTool = 'Молоток';
    }
    action() {
        if (this.strengthTool <= 0) {
            console.log(`Инструмент: ${this.nameTool} сломан!`);
            return 0;
        }
        ;
        super.action();
        console.log(`${this.nameTool}: ДУФ-ДУФ-ДУФ-ДУФ \nЗапас прочности: ${this.strengthTool}`);
        return this.strengthTool;
    }
}
;
class Screwdriver extends Tool {
    constructor() {
        super(...arguments);
        this.nameTool = 'Шуруповёрт';
    }
    action() {
        if (this.strengthTool <= 0) {
            console.log(`Инструмент: ${this.nameTool} сломан!`);
            return 0;
        }
        ;
        super.action();
        console.log(`${this.nameTool}: ВЗЗЗ-ВЗЗЗ-ВЗЗЗ\nЗапас прочности: ${this.strengthTool}`);
        return this.strengthTool;
    }
}
;
class Robot {
    constructor() {
        this.tool = null;
    }
    setup_tool(tool) {
        if (this.tool) {
            console.log(`Инструмент: ${this.tool.nameTool} уже установлен`);
            return;
        }
        ;
        this.tool = tool;
        console.log(`Инструмент: ${this.tool.nameTool} установлен`);
    }
    drop_tool() {
        if (!this.tool) {
            console.log('Все инструменты сняты');
            return;
        }
        ;
        console.log(`Инструмент: ${this.tool.nameTool} брошен`);
        this.tool = null;
    }
    action(tool) {
        if (!this.tool) {
            console.log('Инструмент не установлен!');
            return;
        }
        ;
        if (tool.strengthTool <= 0) {
            console.log(`Инструмент сломан`);
            return 0;
        }
        ;
        tool.action();
        return tool.strengthTool;
    }
}
;
const saw = new Saw();
const axe = new Axe();
const drill = new Drill();
const hammer = new Hammer();
const screwdriver = new Screwdriver();
const robot = new Robot();
robot.setup_tool(saw);
robot.action(saw);
robot.action(saw);
robot.action(saw);
robot.action(saw);
robot.action(saw);
robot.action(saw);
robot.action(saw);
robot.action(saw);
robot.action(saw);
robot.action(saw);
robot.action(saw);
robot.drop_tool();
robot.setup_tool(axe);
robot.action(axe);
robot.action(axe);
robot.action(axe);
robot.action(axe);
robot.action(axe);
robot.action(axe);
robot.action(axe);
robot.action(axe);
robot.action(axe);
robot.action(axe);
robot.action(axe);
robot.drop_tool();
