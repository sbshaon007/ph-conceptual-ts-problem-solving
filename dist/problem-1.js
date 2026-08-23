"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getSignalStatus = (percentage) => {
    if (percentage >= 0 && percentage <= 25) {
        return `Poor`;
    }
    else if (percentage >= 26 && percentage <= 55) {
        return `Fair`;
    }
    else if (percentage >= 56 && percentage <= 85) {
        return `Good`;
    }
    else {
        return `Excellent`;
    }
};
console.log(getSignalStatus(15));
console.log(getSignalStatus(40));
console.log(getSignalStatus(70));
console.log(getSignalStatus(95));
//# sourceMappingURL=problem-1.js.map