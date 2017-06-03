let lastDown = 0;

export default async function backspaceHandler() {
    if(lastDown !== 0 && (Date.now() - lastDown) < 10) {
        return false;
    }
    lastDown = Date.now();
    return true;
}