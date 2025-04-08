const getBlockColor = (blockName) => {
    switch (blockName) {
        case 'Control':
            return 'blue';
        case 'Events':
            return 'yellow';
        case 'Looks':
            return 'green';
        case 'Motion':
            return 'purple';

        default:
            return 'green';
    }
};

export default getBlockColor;
