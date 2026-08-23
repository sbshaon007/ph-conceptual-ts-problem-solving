const calculateWeeklySteps = (steps:number[]):number => {
    const totalSteps = steps.reduce((accu:number, step:number) => {
        return accu + step;
    }, 0);

    return totalSteps;
}

console.log(calculateWeeklySteps([3000, 5200, 4100]));
console.log(calculateWeeklySteps([7000, 6500]));
console.log(calculateWeeklySteps([]));
