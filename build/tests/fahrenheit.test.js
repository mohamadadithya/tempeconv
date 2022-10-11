"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const tempeconv = new app_1.TemperatureConverter({ temperatureType: 'reamur', value: 50 });
// test('50 Fahrenheit equal to 10 Celcius', () => expect(tempeconv.fahrenheit()).toBe('10.00'));
// test('50 Fahrenheit equal to 283.15 Kelvin', () => expect(tempeconv.fahrenheit()).toBe('283.15'));
test('50 Fahrenheit equal to 8 Reamur', () => expect(tempeconv.fahrenheit()).toBe('8.00'));
//# sourceMappingURL=fahrenheit.test.js.map