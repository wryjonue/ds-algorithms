import { Key } from "node:readline";
import stringMatching from "./searching/stringMatching.js";
import selectionSort from "./sorting/selectionSort.js";
import { readKey, closeInput } from "./utils/consoleInput.js";
import linearSearch from "./searching/linearSearch.js";

console.log(`
Sorting Algorithms
  [0] Selection Sort
Searching Algoritm
  [1] Linear Search
  [2] String Matching
`);

async function main(): Promise<void> {
    console.log("Enter the Key of your chosen Algorithm");
    process.stdout.write("> ");
    const key: Key = await readKey();
    console.log("\n" + JSON.stringify(key, null, 2));
    switch (key.name) {
        case "1":
            await linearSearch();
            break;
        case "2":
            await stringMatching();
            break;
    }
    closeInput();
    return;
}

main();