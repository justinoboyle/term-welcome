import os from 'os';
import userLogin from './userLogin';

export default {
    init: async function() {

    },
    render: async function(screen, blessed) {
        

        let box = blessed.box({
            top: 'center',
            left: 'center',
            content: os.hostname() + '\n' + users.length + ' active user' + (users.length == 1 ? '' : 's') + '.' + '\nPress any key to log in.',
            tags: true
        });

        screen.append(box);

        box.focus();

        return screen;
    },
    keypress: async function(key, changeScreen) {
        changeScreen(userLogin);
    }
} 