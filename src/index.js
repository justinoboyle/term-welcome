import 'babel-polyfill';
import 'babel-regenerator-runtime';
import blessed from 'blessed';
import os from 'os';
import systemutil from './util/systemutil'
import indexScreen from './screens/indexScreen';
import userLogin from './screens/userLogin';
import backspaceHandler from './util/backspaceHandler';

global.screen = blessed.screen()
global.users = [];

let currentScreen = userLogin;

process.stdin.on('data', async function(chunk) { 
    await currentScreen.keypress(chunk, changeScreen);
    await render();
 });

async function changeScreen(ns) {
    currentScreen = ns;
    await ns.init();
}


async function start() {
    users = await systemutil.getUsers();
    await render();
}

async function render() {
    
    await currentScreen.render(screen, blessed);

    screen.key(['escape', 'q', 'C-c'], async function(ch, key) {
            // await currentScreen.keypress(key, changeScreen);
            // await render();
            process.exit(0);
    });

    screen.key(['backspace', 'delete'], async function(ch, key) {
            if(!(await backspaceHandler())) return;
            await currentScreen.keypress('DEL', changeScreen);
            await render();
    });

    screen.key(['C-d'], async function(ch, key) {
        process.exit(-1);
    });

    screen.render(); 
}

start();