import os from 'os';
import indexScreen from './indexScreen';

global.curUser = "";

let passwordBuffer = "";
let didRenderSwitch = false;

export default {
    init: async function() {
        if(curUser == "")
            curUser = global.users[0] || "root";
        passwordBuffer = "";
        didRenderSwitch = false;
        global.loginBuffer = {};
    },
    render: async function(screen, blessed) {

        let box = blessed.box({
            top: 'center',
            left: 'center',
            content: "Sign in: " + curUser + "\n\nPassword:  " + new Array(passwordBuffer.length + 1).join('*'),
            tags: true
        });

        screen.append(box);

        box.focus();

        if(!didRenderSwitch)
            process.stdout.write("^C Switch User");
        didRenderSwitch = true;

        return screen;
    },
    keypress: async function(key, changeScreen) {
        let code = (key + "").charCodeAt(0);
        if(code == 13) {
            // then sign in
            global.loginBuffer = {
                user: global.curUser,
                password: passwordBuffer
            };
            passwordBuffer = "";
        }
        if(key == 'DEL')
            passwordBuffer = passwordBuffer.substring(0, passwordBuffer.length - 2);
        else
            passwordBuffer += key;
    }
} 