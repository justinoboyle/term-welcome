import util from 'util';
import {exec} from 'child_process';

export default {
    getUsers: () => {
        console.log('hi');
        return new Promise((resolve, reject) => {
            exec(`awk -F'[/:]' '{if ($3 >= 1000 && $3 != 65534) print $1}' /etc/passwd`, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(stdout.trim().split('\n'));
            });
        })   
    }
}