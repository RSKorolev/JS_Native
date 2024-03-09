import { StudentType } from '../02/02';
import { addSkill } from './03';
import { makeStudentActive } from './03';
import { doesStudentLiveIn } from './03';
let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Ruslan',
        age: 33,
        isActive: false,
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
});
test('new tech skill should be added to student', () => {
    addSkill(student, 'JS');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
});

test('student should be made active', () => {
    makeStudentActive(student);
    expect(student.isActive).toBe(true);
});

test('does student live in city?', () => {
    let result1 = doesStudentLiveIn(student, 'Tomsk');
    let result2 = doesStudentLiveIn(student, 'Moscow');

    expect(result1).toBe(true);
    expect(result2).toBe(false);
});
