export const add = (payload) => ({
    type: 'add',
    payload
});

export const remove = (payload) => ({
    type: 'remove',
    payload
})

export const reset = () => ({
    type: 'reset'
})