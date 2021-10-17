//ЗАДЧА №1
function cachingDecoratorNew(func) {
    let cache = []; //массив объектов {key, value}

    function wrapper(...args) {
        let key = args.join(','); //преобразуем массив параметров в строку 'a,b,c'
        const index = cache.findIndex(item => item.key === key);

        if (index !== -1) {
            console.log('Из кэша: ' + cache[index].value);
            return `Из кэша: ${cache[index].value}`;
        }

        let value = func.apply(this, args);
        cache.push({key, value});
        //кэш может хранить только 5 последних значений
        if (cache.length > 5 ) {
            cache.shift();
        }

        console.log('Вычисляем: ' + value);
        return `Вычисляем: ${value}`;
    }

    return wrapper;
}


//ЗАДАЧА №2
function debounceDecoratorNew(func, ms) {
    let timeout = null;
    let isFirstExeс = true; // флаг - первый ли это запуск?

    function wrapper(...args) {
        if (isFirstExeс) {
            isFirstExeс = false;
            func.apply(this, args);
            return;
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), ms);
    }

    return wrapper;
}


//ЗАДАЧА №3
function debounceDecorator2(func, ms) {
    let timeout = null;
    let isFirstExeс = true; // флаг -  самый первый ли это запуск?
    wrapper.count = 0;

    function wrapper(...args) {
        if (isFirstExeс) {
            isFirstExeс = false;
            func.apply(this, args);
            wrapper.count++;

            return;
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
            wrapper.count++;
        }, ms);
    }

    return wrapper;
}
