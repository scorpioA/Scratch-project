import toast from 'react-hot-toast';
import { makeRangeIterator, moveCat, sleepFor, turnCat, goToXY } from './utility';

export const controlCommands = async (cmd) => {
    const splitCmd = cmd.split(' ');
    switch (splitCmd[0]) {
        case 'Wait':
            await sleepFor(parseInt(splitCmd[2]), splitCmd[2]);
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
            const xIndex = splitCmd.findIndex((s) => s.startsWith('x:'));
            const yIndex = splitCmd.findIndex((s) => s.startsWith('y:'));

            if (xIndex !== -1 && yIndex !== -1) {
                const x = parseInt(splitCmd[3]);
                const y = parseInt(splitCmd[5]);

                goToXY(cat, x, y);
            }
            return;

        default:
            return;
    }
};

export const looksCommands = async (cmd) => {
    let splitCmd = cmd.split(' ');

    splitCmd = splitCmd.filter((cmdStr) => cmdStr.trim());

    const toastConfig = {
        duration: parseInt(splitCmd[3]) * 1000,
        position: 'bottom-left',
        icon: '🐱'
    };

    switch (splitCmd[0]) {
        case 'Say':
            const fullGreeting = splitCmd.slice(2).join(' ');
            toast('Hello ' + fullGreeting, toastConfig);
            return;

        case 'Think':
            const fullSentence = splitCmd.slice(1).join(' ');
            toast('Thinking... ' + fullSentence, toastConfig);
            return;

        case 'Ask':
            toast('Can you play with me?', toastConfig);
            return;

        default:
            return;
    }
};
