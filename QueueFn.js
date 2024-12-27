const queue = []

async function processData(batch) {
    // Mock delay for processing (simulate an async task)
    return new Promise((resolve) => setTimeout(() => resolve(batch), 1000));
}

const processQueue = async(queueData, numberOfRequest) => {
    while (queue.length !== 0) {
        for (let i = 0; i < numberOfRequest && queue.length !== 0; i++) {
            queueData.shift()
        }
        console.log(queue)
        console.log(`Processing batch of size: $`)
        await processData()
    }
}


const main = async() => {

    const dataset = Array.from({ length: 5000 }, (_, i) => i + 1);
    dataset.forEach(data => queue.push(data))

    await processQueue(queue, 500)
    console.log("All data processed")
}

main()