console.log("Welcome to Employee Wage Simulation")

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }    
}
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();

while(totalEmpHrs < 160 && totalWorkingDays < 20) {
    let empCheck = Math.floor(Math.random() * 100) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
    totalWorkingDays++;
}
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("Daily Wage Array: " + empDailyWageArray.join(", "));
    console.log("Total Hours: " + totalEmpHrs);
    console.log("Employee Wage: " + empWage);
    console.log("Total Working Days: " + totalWorkingDays);
    console.log("---------------------------------------");


    // UC7a : totalEmpWage using reduce
    {
        console.log("UC7a : TotEmpWage using reduce on empDailyWageArray")
    
        function totalWages(totWages, dailyWage) {
            return totWages + dailyWage;
        }

        console.log("Daily Wage Array: " + empDailyWageArray.join(", "));
        console.log("Total Hours: " + totalEmpHrs);
        console.log("Employee Wage: " + empDailyWageArray.reduce(totalWages, 0));
        console.log("Total Working Days: " + totalWorkingDays);
        console.log("---------------------------------------");
    }

    // UC7b : Show (day, dailyWage) using Array map helper function
    console.log("UC7b : Daily Wage Map");

    let dailyCntr = 0;
    function mapDayWithWage(dailyWage) {
        dailyCntr++;
        return dailyCntr + " = " + dailyWage;
    } 

    let mapDayWithWageArray = empDailyWageArray.map(mapDayWithWage);
    console.log("Daily Wage Map: " + mapDayWithWageArray.join(", "));
    console.log("---------------------------------------");
    
    // UC7c : Show days when full time wage of 160
    console.log("UC7c : Daily Wage Filter When Full Time Wage Earned");

    function fullTimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    
    let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
    console.log("Full Day Wage Array: " + fullDayWageArray.join(", "));
    console.log("---------------------------------------");
    
    // UC7d : Find the first occurence when full time wage was earned using find function
    console.log("UC7d : First Day When Full Time Wage Was Earned");

    function findFullTimeWage(dailyWage) {
        return dailyWage.includes("160");
    }

    console.log("First Full Time Wage Day: " + mapDayWithWageArray.find(findFullTimeWage));
    console.log("---------------------------------------");
    
    // UC7e : Check if every element of fullDayWageMap is truely holding full time wage
    console.log("UC7e : Verify All Elements Of FullDayWageMap Using Every");

    function isAllFullTimeWage(dailyWage) {
        return dailyWage.includes("160");
    }

    console.log("FullDayWageMap contains full day wage elements: " + fullDayWageArray.every(isAllFullTimeWage));
    console.log("---------------------------------------");
    
    // UC7f : Check if mapDayWithWage contains any part time wage using some function
    console.log("UC7f : Verify If MapDayWithWage Contains Part Time Wage");

    function isSomePartTimeWage(dailyWage) {
        return dailyWage.includes("80");
    }

    console.log("MapDayWithWage contains any part time wage elements: " + mapDayWithWageArray.some(isSomePartTimeWage));
    console.log("---------------------------------------");
    
    // UC7g : Number of days employee actually worked using reduce function
    console.log("UC7g : Number Of Days Employee Actually Worked");

    function totalDaysWorked(totalDays, dailyWage) {
        if(dailyWage > 0)
            return totalDays + 1;
        return totalDays;
    }

    console.log("Total days worked: " + empDailyWageArray.reduce(totalDaysWorked, 0));