import { TemperatureConverter } from "../app";
const tempeconv = new TemperatureConverter({ temperatureType: 'reamur', value: 50 });

// test('50 Fahrenheit equal to 10 Celcius', () => expect(tempeconv.fahrenheit()).toBe('10.00'));
// test('50 Fahrenheit equal to 283.15 Kelvin', () => expect(tempeconv.fahrenheit()).toBe('283.15'));
test('50 Fahrenheit equal to 8 Reamur', () => expect(tempeconv.fahrenheit()).toBe('8.00'));