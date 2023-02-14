export default function capitalize(input) {
    let output = input.split("");
    if (typeof output[0] == 'string') {output[0] = output[0].toUpperCase()};
    output = output.join("")
    return output;
}

