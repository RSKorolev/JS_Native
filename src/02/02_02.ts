export type HouseType = {
    id?: number;
    buildedAt: number;
    repaired: boolean;
    address: AddressType;
};

type AddressType = {
    number: number;
    street: StreetType;
};

type StreetType = {
    title: string;
};
export type GovernmentBuildingsType = {
    type: string;
    budget: number;
    staffCount: number;
    address: AddressShotType;
};

type AddressShotType = {
    street: StreetType;
};

export type CityType = {
    title: string;
    houses: HouseType[];
    governmentBuildings: GovernmentBuildingsType[];
    citizensNumber: number;
};
