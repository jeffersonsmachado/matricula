export const add = (student) => ({
    type: 'add',
    payload: student
});

export const remove = (student) => ({
    type: 'remove',
    payload: student
})