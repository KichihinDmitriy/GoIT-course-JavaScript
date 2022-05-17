// Task 1 promisification

const onSuccess = time => console.log(`Resolved after ${time}ms`);
const onError = error => console.error(`Error - ${error}`);

const delay = ms => {
    const promise = new Promise((resolve, reject) => {
        setTimeout( () => {
            if (ms < 1999) {
                resolve(ms);
            } else {
                reject('Promise rejected!');
            }
        }, ms);
    });

    promise.then(onSuccess).catch(onError);
};

delay(2000);
delay(1000);
delay(1500);

// Task 2 promisification

