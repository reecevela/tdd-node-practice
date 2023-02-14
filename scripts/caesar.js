export default function caesar(string = '', shift = 0) {
    shift = shift % 26;

    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    string = string.split("").map( char => {
        if (lower.indexOf(char) != -1) {
            let initPosition = lower.indexOf(char);
            return (initPosition + shift >= 26) ? lower[initPosition + shift - 26] : lower[initPosition + shift];
        }
        if (upper.indexOf(char) != -1) {
            let initPosition = upper.indexOf(char);
            return (initPosition + shift >= 26) ? upper[initPosition + shift - 26] : upper[initPosition + shift];
        }
        return char;
    })
    .join("");

    return string;
}