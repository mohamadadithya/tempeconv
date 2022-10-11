import { TemperatureConverter } from "../app";
const tempeconv = new TemperatureConverter({ temperatureType: 'reamur', value: 100 });

// test('100 Celcius equal to 212 Fahrenheit', () => expect(tempeconv.celcius()).toBe('212.00'));
// test('100 Celcius equal to 373.15 Kelvin', () => expect(tempeconv.celcius()).toBe('373.15'));
test('100 Celcius equal to 80 Reamur', () => expect(tempeconv.celcius()).toBe('80.00'));