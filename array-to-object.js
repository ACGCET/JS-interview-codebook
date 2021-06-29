const animals = ['dog', 'cat', 'dog', 'cat', 'cat', 'hen']

const obj = animals.reduce((obj, animal) => {
    if (!obj[animal]) {
        obj[animal] = 1;
    } else {
        obj[animal]++;
    }
    return obj;
}, {})

console.log(obj)