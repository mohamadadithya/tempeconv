"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemperatureConverter = void 0;
class TemperatureConverter {
    constructor(options) {
        this.options = Object.assign(this, options);
        this.result = 0;
    }
    celcius() {
        var _a, _b, _c;
        switch (this.temperatureType) {
            case 'fahrenheit':
                this.result = (((_a = this.options) === null || _a === void 0 ? void 0 : _a.value) * 9 / 5) + 32;
                break;
            case 'kelvin':
                this.result = ((_b = this.options) === null || _b === void 0 ? void 0 : _b.value) + 273.15;
                break;
            case 'reamur':
                this.result = (((_c = this.options) === null || _c === void 0 ? void 0 : _c.value) * 4) / 5;
                break;
        }
        return this.result.toFixed(2);
    }
    fahrenheit() {
        var _a, _b, _c;
        switch (this.temperatureType) {
            case 'celcius':
                this.result = (((_a = this.options) === null || _a === void 0 ? void 0 : _a.value) - 32) / 1.8;
                break;
            case 'kelvin':
                this.result = ((((_b = this.options) === null || _b === void 0 ? void 0 : _b.value) - 32) / 1.8) + 273.15;
                break;
            case 'reamur':
                this.result = (((_c = this.options) === null || _c === void 0 ? void 0 : _c.value) - 32) * (4 / 9);
                break;
        }
        return this.result.toFixed(2);
    }
    kelvin() {
        var _a, _b, _c;
        switch (this.temperatureType) {
            case 'celcius':
                this.result = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.value) - 273.15;
                break;
            case 'fahrenheit':
                this.result = ((((_b = this.options) === null || _b === void 0 ? void 0 : _b.value) - 273.15) * 1.8) + 32;
                break;
            case 'reamur':
                this.result = (((_c = this.options) === null || _c === void 0 ? void 0 : _c.value) - 273.15) * 0.8;
                break;
        }
        return this.result.toFixed(2);
    }
    reamur() {
        var _a, _b, _c;
        switch (this.temperatureType) {
            case 'celcius':
                this.result = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.value) * (5 / 4);
                break;
            case 'fahrenheit':
                this.result = ((_b = this.options) === null || _b === void 0 ? void 0 : _b.value) * 2.25 + 32;
                break;
            case 'kelvin':
                this.result = ((_c = this.options) === null || _c === void 0 ? void 0 : _c.value) * (5 / 4) + 273.15;
                break;
        }
        return this.result.toFixed(2);
    }
}
exports.TemperatureConverter = TemperatureConverter;
//# sourceMappingURL=app.js.map