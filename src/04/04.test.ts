export {};
test('should take old men older 90', () => {
    const ages = [18, 20, 2, 1, 100, 90, 14];

    const oldAges = ages.filter((age) => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
});

test('should take chipper 160', () => {
    const courses = [
        { title: 'CSS', price: 100 },
        { title: 'JS', price: 200 },
        { title: 'REACT', price: 150 },
    ];
    const chipCourses = courses.filter((course) => course.price < 160);
    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('CSS');
});

test('get only complied tasks', () => {
    const tasks = [
        { id: 1, title: 'Bread', isDone: false },
        { id: 2, title: 'Milk', isDone: true },
        { id: 3, title: 'Salt', isDone: false },
        { id: 4, title: 'Sugar', isDone: true },
    ];

    const compliedTasks = tasks.filter((task) => task.isDone === true);
    expect(compliedTasks.length).toBe(2);
    expect(compliedTasks[0].id).toBe(2);
    expect(compliedTasks[1].id).toBe(4);
});
