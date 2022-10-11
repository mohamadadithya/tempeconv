"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const tempeconv = new app_1.TemperatureConverter({ temperatureType: 'reamur', value: 100 });
// test('100 Kelvin equal to -173.15 Celcius', () => expect(tempeconv.kelvin()).toBe('-173.15'));
// test('100 Kelvin equal to -279.67 Fahrenheit', () => expect(tempeconv.kelvin()).toBe('-279.67'));
test('100 Kelvin equal to -138.52 Reamur', () => expect(tempeconv.kelvin()).toBe('-138.52'));
//# sourceMappingURL=kelvin.test.js.map