"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findOnDutyEmployees = (employees) => {
    const result = employees.filter((employee) => employee.onDuty === true);
    return result;
};
console.log(findOnDutyEmployees([{ name: "Lima", onDuty: true }, { name: "Karim", onDuty: false }]));
console.log(findOnDutyEmployees([{ name: "Nusrat", onDuty: false }]));
//# sourceMappingURL=problem-6.js.map