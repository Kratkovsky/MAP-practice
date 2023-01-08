'use strict'

/*
Даны несколько обьектов клиентов банка со следующими данными:
- fullName - ФИО клента;
- clientLevel - уровень договора с банком от которого зависят тарифы на определенные услуги.

Также есть обьект банка содержащий следующие данные:
- bankName - название банка
- clientLevels - обьекты со свойствами, являющимися уровнями договора с банком (например basic, pro, platinum, ...).

Каждый уровень договора содержит внутри себя свойство discount которое хранит размер скидки в процентах
clientLevel должен быть связан с обьектом уровня договора через Map
Реализовать функцию расчета стоимости покупки пользователем торвара, которая принимает пользователя и цену товара и возвращает стоимость товара с учетом скидки.
Скидку доставать из хранящихся в мапе данных
В случае если в мапе с уровнем клиента нет своязанного уровня в банке (например там решили убрать этот уровень договора) то можно считать что скидки нет

* Bonus tasks:
У обьектов клиентов должно быть свойство, показывающее деньги на их счету
При покупке количество денег на счету должно уменьшится на сумму покупки со скидкой
При попытке купить товар, на который у пользователя не хватит денег ему должно выкидывать ошибку, в которой указано сколько ему не хватает денег до покупки
*/

const client1 = {
  fullName: 'Keaton Branch',
  clientLevel: 'basic',
}

const client2 = {
  fullName: 'Shaun Forbes',
  clientLevel: 'pro',
}

const client3 = {
  fullName: 'Tess GoodmanK',
  clientLevel: 'platimun',
}


const bank = {
  bankName: 'Random',
  clientLevels: {
    basic:
  }
}