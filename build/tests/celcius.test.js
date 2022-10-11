"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const tempeconv = new app_1.TemperatureConverter({ temperatureType: 'reamur', value: 100 });
// test('100 Celcius equal to 212 Fahrenheit', () => expect(tempeconv.celcius()).toBe('212.00'));
// test('100 Celcius equal to 373.15 Kelvin', () => expect(tempeconv.celcius()).toBe('373.15'));
test('100 Celcius equal to 80 Reamur', () => expect(tempeconv.celcius()).toBe('80.00'));
//# sourceMappingURL=celcius.test.js.map