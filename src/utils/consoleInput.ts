import * as rl from "node:readline";

const rlInterface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const readLine = () => new Promise<string>((resolve) =>
    rlInterface.once("line", (line) => resolve(line))
);
export const ask = async (question: string): Promise<string> => {
    process.stdout.write(question);
    return await readLine();
}