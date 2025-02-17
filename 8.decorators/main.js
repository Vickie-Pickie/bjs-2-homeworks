const addThree = (a, b, c) => (a + b + c); 
const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3); 
upgradedAddThree(1, 2, 3); 
upgradedAddThree(2, 2, 3); 
upgradedAddThree(3, 2, 3); 
upgradedAddThree(4, 2, 3); 
upgradedAddThree(5, 2, 3); 
upgradedAddThree(6, 2, 3); 
upgradedAddThree(1, 2, 3);

const sendSignal = () => console.log('Сигнал послан');
const upgradedSendSignal1 = debounceDecoratorNew(sendSignal,2000);
setTimeout(upgradedSendSignal1);
setTimeout(upgradedSendSignal1,300);
setTimeout(upgradedSendSignal1,900);
setTimeout(upgradedSendSignal1,1200);
setTimeout(upgradedSendSignal1,2300);
setTimeout(upgradedSendSignal1,4400);
setTimeout(upgradedSendSignal1,4500);

const sendSignal2 = () => console.log('Сигнал послан 2');
const upgradedSendSignal2 = debounceDecorator2(sendSignal2,2000);
setTimeout(upgradedSendSignal2);
setTimeout(upgradedSendSignal2,300);
setTimeout(upgradedSendSignal2,900);
setTimeout(upgradedSendSignal2,1200);
setTimeout(upgradedSendSignal2,2300);
setTimeout(upgradedSendSignal2,4400);
setTimeout(upgradedSendSignal2,4500);
setTimeout(() => console.log('count: ' + upgradedSendSignal2.count),4600);
setTimeout(() => console.log('count: ' + upgradedSendSignal2.count),6600);

