export class TemperatureConverter {
    public temperatureType?: string;
    public value?: number;
    options: any;
    result: any;

    constructor(options: Partial<TemperatureConverter>) {
        this.options = Object.assign(this, options);
        this.result = 0
    }

    celcius() {
        switch(this.temperatureType) {
            case 'fahrenheit':
                this.result = (this.options?.value * 9 / 5) + 32;
                break;
            case 'kelvin':
                this.result = this.options?.value + 273.15;
                break;
            case 'reamur':
                this.result = (this.options?.value * 4) / 5;
                break;
        }
        return this.result.toFixed(2);
    }

    fahrenheit() {
        switch(this.temperatureType) {
            case 'celcius':
                this.result = (this.options?.value - 32) / 1.8;
                break;
            case 'kelvin':
                this.result = ((this.options?.value - 32) / 1.8) + 273.15;
                break;
            case 'reamur':
                this.result = (this.options?.value - 32) * (4 / 9);
                break;
        }
        return this.result.toFixed(2);
    }
    kelvin() {
        switch(this.temperatureType) {
            case 'celcius':
                this.result = this.options?.value - 273.15;
                break;
            case 'fahrenheit':
                this.result = ((this.options?.value - 273.15) * 1.8) + 32;
                break;
            case 'reamur':
                this.result = (this.options?.value - 273.15) * 0.8
                break;
        }
        return this.result.toFixed(2);
    }
    reamur() {
        switch(this.temperatureType) {
            case 'celcius':
                this.result = this.options?.value * (5 / 4);
                break;
            case 'fahrenheit':
                this.result = this.options?.value * 2.25 + 32;
                break;
            case 'kelvin':
                this.result = this.options?.value * (5/4) + 273.15;
                break;
        }
        return this.result.toFixed(2);
    }
}