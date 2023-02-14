export default function arrayInfo(arr) {
    return {
        average: () => {
            const sum = arr.reduce((prev, cur) => prev + cur, 0);
            return sum / arr.length;
        },
        min: () => {
            let smallest = arr[0];
            arr.forEach(el => { 
                if (el < smallest) { 
                    smallest = el;
                }
            });
            return smallest;
        },
        max: () => {
            let largest = arr[0];
            arr.forEach(el => { 
                if (el > largest) { 
                    largest = el;
                }
            });
            return largest;
        },
        length: () => {
            return arr.length;
        }
    }   
}