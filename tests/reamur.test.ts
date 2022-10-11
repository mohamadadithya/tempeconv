import { TemperatureConverter } from "../app";
const tempeconv = new TemperatureConverter({ temperatureType: 'kelvin', value: 50 });

// test('50 Reamur equal to 62.5 Celcius', () => expect(tempeconv.reamur()).toBe('62.50'));
// test('50 Reamur equal to 144.5 Fahrenheit', () => expect(tempeconv.reamur()).toBe('144.50'));
test('50 Reamur equal to 335.65 Kelvin', () => expect(tempeconv.reamur()).toBe('335.65'));