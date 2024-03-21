import { GovernmentBuildingsType, HouseType } from '../02/02_02';

export const getStreetsTitlesOfGovernmentBuildings = (
    governmentBuildings: GovernmentBuildingsType[]
) => {
    return governmentBuildings.map((a) => a.address.street.title);
};

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map((a) => a.address.street.title);
};
