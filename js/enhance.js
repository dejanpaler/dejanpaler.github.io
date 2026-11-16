import { enhance as emailAddress } from "./email-address.js";

for (const enhancement of [emailAddress]) {
    try {
        enhancement();
    } catch (cause) {
        console.error(new Error(`enhancement failed: ${enhancement.name}`, { cause }));
    }
}
