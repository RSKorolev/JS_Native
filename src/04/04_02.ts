import { CityType, GovernmentBuildingsType } from '../02/02_02';
export function demolishHousesOnTheStreet(city: CityType, street: string) {
    return (city.houses = city.houses.filter(
        (houses) => houses.address.street.title !== street
    ));
}

export const getBuildingsWithStaffCountGreaterThen = (
    governmentBuildings: GovernmentBuildingsType[],
    staffCount: number
) => {
    return governmentBuildings.filter((g) => g.staffCount > staffCount);
};
