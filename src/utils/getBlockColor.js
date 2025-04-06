const getBlockColor = (blockName) => {
    switch (blockName) {
        case 'Control':
            return 'red';
        case 'Events':
            return 'yellow';
        case 'Motion':
            return 'blue';

        default:
            return 'green';
    }
};

export default getBlockColor;
