type ManType = {
    name: string;
    age: number;
    lessons: Array<{ title: string }>;
    address: {
        street: {
            title: string;
        };
    };
};

let props: ManType;
beforeEach(() => {
    props = {
        name: 'rus',
        age: 33,
        lessons: [{ title: 1 }, { title: 2 }],
        address: {
            street: {
                title: 'Novaia',
            },
        },
    };
});

test(' ', () => {
    // const age = props.age;
    // const lessons = props.lessons;
    const { age, lessons } = props;
    const { title } = props.address.street;

    expect(age).toBe(33);
    expect(lessons.length).toBe(2);
    expect(title).toBe('Novaia');
});
