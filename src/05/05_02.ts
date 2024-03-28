import { GovernmentBuildingsType, HouseType } from '../02/02_02';

export const getStreetsTitlesOfGovernmentBuildings = (
    governmentBuildings: GovernmentBuildingsType[]
) => {
    return governmentBuildings.map((a) => a.address.street.title);
};

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map((a) => a.address.street.title);
};

export function createMessage(houses: HouseType[]) {
    let callback = (houses: HouseType) => {
        return `Hello guys from ${houses.address.street.title}`;
    };
    return houses.map(callback);
}
