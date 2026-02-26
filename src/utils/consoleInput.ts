import * as rl from "node:readline";

rl.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
} else {
    process.exit("Not TTY");
}
const rlInterface: rl.Interface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const readLine = () => new Promise<string>((resolve) =>
    rlInterface.once("line", (line) => resolve(line))
);

export const readKey = () => new Promise<rl.Key>((resolve) => 
    process.stdin.once("keypress", (str: string, key: rl.Key) => 
        resolve(key)
    )
);

export const ask = async (question: string): Promise<string> => {
    process.stdout.write(question);
    return await readLine();
}

export const closeInput = () => {
    rlInterface.close();
}