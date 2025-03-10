const resFn = (status, message, data = null) => {
    return {
        status,
        message,
        data
    };
};

export default resFn