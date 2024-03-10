const ages = [18, 20, 2, 1, 100, 90, 14];

const predicate = (age: number) => {
    return age > 90;
};

const oldAges = [100]; // >98

type CourseType = {
    title: string;
    price: number;
};

const courses = [
    { title: 'CSS', price: 100 },
    { title: 'JS', price: 200 },
    { title: 'REACT', price: 150 },
];

const cheapPredicate = (courses: CourseType) => {
    return courses.price < 160;
};

const chipCourses = [
    { title: 'CSS', price: 100 },
    { title: 'REACT', price: 150 },
];
