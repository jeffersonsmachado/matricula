export const add = (student, classId) => ({
    type: 'add',
    payload: { student, classId }
});

export const remove = (student, classId) => ({
    type: 'remove',
    payload: { student, classId }
})