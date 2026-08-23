"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateWeeklySteps = (steps) => {
    const totalSteps = steps.reduce((accu, step) => {
        return accu + step;
    }, 0);
    return totalSteps;
};
console.log(calculateWeeklySteps([3000, 5200, 4100]));
console.log(calculateWeeklySteps([7000, 6500]));
console.log(calculateWeeklySteps([]));
//# sourceMappingURL=problem-3.js.map