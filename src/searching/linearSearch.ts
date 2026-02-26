import { readLine, ask } from "../utils/consoleInput.js";

export default async function linearSearch() {
    const values: number[] = [];
    console.log("Type `exit` to finalize the array values.");
    while (true) {
        const rawLine: string = (await ask(`Index ${values.length}: `)).trim();
        if (rawLine.length == 0) continue;
        if (rawLine == "exit") break;
        const num: number = parseFloat(rawLine); 
        if (isNaN(num)) {
            console.log("Not a number.");
            continue;
        }
        values.push(num);
    }
    if (values.length == 0) {
        console.log("No array values. Exiting...");
        return;
    } 
    const search: number = parseFloat((await ask(`Enter Search Key: `)).trim());
    if (isNaN(search)) {
        console.error("Search value not a number. Exiting...");
        return;
    }
    for (let i = 0; i < values.length; i++) {
        if (search == values[i]) {
            console.log(`Value Found on Index ${i}`);
            return;
        }
        
    }
    console.log("Search key not found on values list.");
}