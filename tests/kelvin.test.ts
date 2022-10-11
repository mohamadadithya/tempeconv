import { TemperatureConverter } from "../app";
const tempeconv = new TemperatureConverter({ temperatureType: 'reamur', value: 100 });

// test('100 Kelvin equal to -173.15 Celcius', () => expect(tempeconv.kelvin()).toBe('-173.15'));
// test('100 Kelvin equal to -279.67 Fahrenheit', () => expect(tempeconv.kelvin()).toBe('-279.67'));
test('100 Kelvin equal to -138.52 Reamur', () => expect(tempeconv.kelvin()).toBe('-138.52'));