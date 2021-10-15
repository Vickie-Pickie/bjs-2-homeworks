//ЗАДЧА №1
function cachingDecoratorNew(func) {
    let cache = []; //массив объектов {key, value}

    function wrapper(...args) {
        let key = args.join(','); //преобразуем массив параметров в строку 'a,b,c'
        const index = cache.findIndex(item => item.key === key);

        if (index !== -1) {
            console.log('Из кэша: ' + cache[index].value);
            return `Из кэша: ${cache[index].value}`;
        } else {
            let value = func.apply(this, args);
            cache.push({key, value});
            //кэш может хранить только 5 последних значений
            if (cache.length > 5 ) {
                cache.shift();
            }

            console.log('Вычисляем: ' + value);
            return `Вычисляем: ${value}`;
        }
    }

    return wrapper;
}


//ЗАДАЧА №2
function debounceDecoratorNew(func, ms) {
    //для немедленного самого первого вызова флаг = false
    let isCooldown = false; //функция готова к выполнению, т.е. "остыла"

    function wrapper(...args) {
        console.log(isCooldown);
        //если true - то ф-я ожидает окончания тайм-аута "остывает", другие вызовы игнорируются
        if (isCooldown) return;

        func.apply(this, args);
        // ф-я вызвана и теперь будет ждать "остывать" окончания заданного времени ms, все ост-ые вызовы игнорируются
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    }

    return wrapper;
}


//ЗАДАЧА №3
function debounceDecorator2(func, ms) {
    let isCooldown = false;
    wrapper.count = 0;
    function wrapper(...args) {
        wrapper.count++;
        if (isCooldown) return;

        func.apply(this, args);
        isCooldown = true;
        setTimeout(() =>  isCooldown = false, ms);
    }

    return wrapper;
}
