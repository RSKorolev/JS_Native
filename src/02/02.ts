type StudentType = {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
    address: AddressType;
    technologies: TechType[];
};

type LocalCityType = {
    title: string;
    countryTitle: string;
};
type AddressType = {
    streetTitle: string;
    city: LocalCityType;
};

type TechType = {
    id: number;
    title: string;
};

const student = {
    id: 1,
    name: 'Ruslan',
    age: 33,
    isActiv: false,
    address: {
        streetTitle: 'Arhitectorov',
        city: {
            title: 'Tomsk',
            countryTitle: 'Russia',
        },
    },
    technologies: [
        { id: 1, title: 'HTML' },
        { id: 2, title: 'CSS' },
        { id: 3, title: 'React' },
    ],
};

console.log(student.address.streetTitle);
console.log(student.technologies[0].title);
