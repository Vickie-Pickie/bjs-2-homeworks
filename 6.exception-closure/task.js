function parseCount(str) {
    const parsed = parseInt(str,10);
    if ( isNaN(parsed) ) {
        throw new Error('Невалидное значение');
    }
    return parsed;
}

function validateCount(str) {
    let result;
    try {
        result = parseCount(str);
    }
    catch(error) {
        return error;
    }
    return result;
}


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ( (this.a + this.b <= this.c) || (this.a + this.c <= this.b) || (this.b + this.c <= this.a) ) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch(error) {
        return {
            getArea() {
                return 'Ошибка! Треугольник не существует';
            },
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}