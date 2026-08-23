"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDistanceSummary = (distances) => {
    if (distances.length === 0) {
        return { total: 0, average: 0 };
    }
    let total = 0;
    for (const distance of distances) {
        total = total + distance;
    }
    let average = total / distances.length;
    return { total, average };
};
console.log(getDistanceSummary([4, 6, 5, 9]));
console.log(getDistanceSummary([10, 10]));
console.log(getDistanceSummary([]));
//# sourceMappingURL=problem-7.js.map