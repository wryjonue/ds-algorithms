import { ask } from "../utils/consoleInput.js";

export default async function stringMatching(verbose: boolean = true): Promise<void> {
    console.log("Selection Sort")

    const base: string = await ask("Enter Base String: ");
    const search: string = await ask("Enter Search String: ");
    if (search.length > base.length) {
        console.log("Search String length must be higher than or equal to Base String length.");
        return;
    }
    if (verbose) {
        console.log(`Base String Length: ${base.length}`);
        console.log(`Search String Length: ${search.length}`);
    }
    const success: number[] = [];
    const unsuccess: number[] = [];
    for (let i: number = 0; i < base.length - search.length + 1; i++) {
        const sub: string = base.substring(i, i + search.length);
        if (verbose) {
            console.log(`Iteration ${i + 1}`);
            console.log(`  String: ${sub}`)
        }
        if (sub == search) {
            success.push(i);
            if (verbose) console.log(`  isSuccess: true`);
        } else {
            unsuccess.push(i);
            if (verbose) console.log(`  isSuccess: false`);
        }
    }
    if (verbose) {
        console.log(`Matched Indeces(${success.length}): `, ...success);
        console.log(`Unmatched Indeces(${unsuccess.length}): `, ...unsuccess);
    } else {
        console.log(`Matched Indeces: `, ...success);
    }
}