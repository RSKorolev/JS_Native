import { StudentType, student } from '../02/02';
import { CityType, HouseType, GovernmentBuildingsType } from '../02/02_02';
export const sum = (a: number, b: number) => {
    return a + b;
};

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill,
    });
};

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export function doesStudentLiveIn(s: StudentType, c: string) {
    return s.address.city.title === c;
}

export function addMoneyToBudget(
    Buildings: GovernmentBuildingsType,
    m: number
) {
    Buildings.budget += m;
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
};

export function toFireStaff(
    GovernmentBuildings: GovernmentBuildingsType,
    St: number
) {
    GovernmentBuildings.staffCount -= St;
}

export const toHireStaff = (Building: GovernmentBuildingsType, St: number) => {
    Building.staffCount += St;
};
