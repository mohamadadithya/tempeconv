"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const tempeconv = new app_1.TemperatureConverter({ temperatureType: 'kelvin', value: 50 });
// test('50 Reamur equal to 62.5 Celcius', () => expect(tempeconv.reamur()).toBe('62.50'));
// test('50 Reamur equal to 144.5 Fahrenheit', () => expect(tempeconv.reamur()).toBe('144.50'));
test('50 Reamur equal to 335.65 Kelvin', () => expect(tempeconv.reamur()).toBe('335.65'));
//# sourceMappingURL=reamur.test.js.map