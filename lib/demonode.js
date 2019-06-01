const demoNode = {
    add: (v1, v2) => {
        if (typeof(v1) !== 'number'){
            throw new Error('v1 is not a number');
        }
        if (typeof(v2) !== 'number'){
            throw new Error('v2 is not a number');
        }
        return v1 + v2;
    },
    sub: (v1, v2) => {
        if (typeof(v1) !== 'number'){
            throw new Error('v1 is not a number');
        }
        if (typeof(v2) !== 'number'){
            throw new Error('v2 is not a number');
        }
        return v1 - v2;
    }
}

module.exports = demoNode;