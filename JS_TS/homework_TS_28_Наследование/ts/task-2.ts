class Tool{
    strengthTool:number = 100;
    wearTool:number = 10;
    nameTool:string = ''; 

    public action(): number { 
        return this.strengthTool -= this.wearTool;
    }
};


class Saw extends Tool {
    nameTool: string = 'Пила';

    public action(): number {
        if(this.strengthTool <= 0) {
            console.log(`Инструмент: ${this.nameTool} сломан!`);
            return 0;
        };
        super.action();
        console.log(`${this.nameTool}: ЗЫК-ЗЫК-ЗЫК-ЗЫК \nЗапас прочности: ${this.strengthTool}`);
        return this.strengthTool;
    }
};

class Axe extends Tool {
    nameTool: string = 'Топор';

    public action(): number {
        if(this.strengthTool <= 0) {
            console.log(`Инструмент: ${this.nameTool} сломан!`);
            return 0;
        };
        super.action();
        console.log(`${this.nameTool}: ТЫК-ТЫК-ТЫК-ТЫК \nЗапас прочности: ${this.strengthTool}`);
        return this.strengthTool;
    }
};


class Drill extends Tool {
    nameTool: string = 'Дрель';

    public action(): number {
        if(this.strengthTool <= 0) {
            console.log(`Инструмент: ${this.nameTool} сломан!`);
            return 0;
        };
        super.action();
        console.log(`${this.nameTool}: ЗЗЗЗЗЗЗЗЗЗЗЗЗ \nЗапас прочности: ${this.strengthTool}`);
        return this.strengthTool;
    }
};

class Hammer extends Tool {
    nameTool: string = 'Молоток';

    public action(): number {
        if(this.strengthTool <= 0) {
            console.log(`Инструмент: ${this.nameTool} сломан!`);
            return 0;
        };
        super.action();
        console.log(`${this.nameTool}: ДУФ-ДУФ-ДУФ-ДУФ \nЗапас прочности: ${this.strengthTool}`);
        return this.strengthTool;
    }    
};

class Screwdriver extends Tool {
    nameTool: string = 'Шуруповёрт';

    public action(): number {
        if(this.strengthTool <= 0) {
            console.log(`Инструмент: ${this.nameTool} сломан!`);
            return 0;
        };
        super.action();
        console.log(`${this.nameTool}: ВЗЗЗ-ВЗЗЗ-ВЗЗЗ\nЗапас прочности: ${this.strengthTool}`);
        return this.strengthTool;
    }
};

class Robot {
    tool:Tool | null;

    constructor() {
        this.tool = null;
    }

    public setup_tool(tool:Tool): void {
        if(this.tool) {
            console.log(`Инструмент: ${this.tool.nameTool} уже установлен`);
            return;
        };
        this.tool = tool;
        console.log(`Инструмент: ${this.tool.nameTool} установлен`);
    }

    public drop_tool(): void {
        if(!this.tool) {
            console.log('Все инструменты сняты');
            return;
        };
        console.log(`Инструмент: ${this.tool.nameTool} брошен`);
        this.tool = null;
    }

    public action(tool:Tool) {
        if(!this.tool) {
            console.log('Инструмент не установлен!');
            return;
        };
        if(tool.strengthTool <= 0) {
            console.log(`Инструмент сломан`);
            return 0;
        };   
        tool.action();
        return tool.strengthTool;
    }
};


const saw: Saw = new Saw();
const axe: Axe = new Axe();
const drill: Drill = new Drill();
const hammer: Hammer = new Hammer();
const screwdriver: Screwdriver = new Screwdriver();
const robot: Robot = new Robot();
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
