type Employee = {
    name: string,
    onDuty: boolean
}

const findOnDutyEmployees = (employees: Employee[]): Employee[] => {
    const result = employees.filter((employee) => employee.onDuty === true);
    return result;
}

console.log(findOnDutyEmployees([{ name: "Lima", onDuty: true }, { name: "Karim", onDuty: false }]));
console.log(findOnDutyEmployees([{ name: "Nusrat", onDuty: false }]));
