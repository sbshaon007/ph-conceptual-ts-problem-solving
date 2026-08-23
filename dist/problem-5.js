"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getWeatherAdvice = (weather) => {
    if (weather === `sunny`) {
        return `Wear sunscreen`;
    }
    else if (weather === `rainy`) {
        return `Carry an umbrella`;
    }
    else {
        return `Bring a light jacket`;
    }
};
console.log(getWeatherAdvice("sunny"));
console.log(getWeatherAdvice("rainy"));
console.log(getWeatherAdvice("cloudy"));
console.log(getWeatherAdvice("snowy"));
//# sourceMappingURL=problem-5.js.map