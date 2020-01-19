const Student = (props) => {

    const {
        name,
        id
    } = props;

    return Object.freeze({
        name,
        id
    });
}

export default Student;