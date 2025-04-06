import toast from 'react-hot-toast';
import { makeRangeIterator, moveCat, sleepFor, turnCat, goToXY } from './utility';

export const controlCommands = async (cmd) => {
    const splitCmd = cmd.split(' ');
    switch (splitCmd[0]) {
        case 'Wait':
            await sleepFor(parseInt(splitCmd[1]), splitCmd[2]);
            return;

        case 'Repeat':
            if (splitCmd[2]) return makeRangeIterator(parseInt(splitCmd[1]));

        default:
            return;
    }
};

export const motionCommands = async (cmd) => {
    let splitCmd = cmd.split(' ');
    splitCmd = splitCmd.filter((cmdStr) => cmdStr.trim());

    const cat = document.querySelector('#movingCat');

    switch (splitCmd[0]) {
        case 'Move':
            moveCat(cat, parseInt(splitCmd[1]));
            return;

        case 'Turn':
            turnCat(cat, parseInt(splitCmd[2]), splitCmd[1]);
            return;

        case 'Go':
            const xIndex = splitCmd.findIndex((word) => word.includes('x:'));
            const yIndex = splitCmd.findIndex((word) => word.includes('y:'));

            const x = Number(splitCmd[xIndex]);
            const y = Number(splitCmd[yIndex]);

            if (!isNaN(x) && !isNaN(y)) {
                cat.style.transform = `translate(${x}px, ${-y}px)`;
            }
            return;

        default:
            return;
    }
};

