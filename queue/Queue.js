// Queue Implementation
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    peek() {
        return this.isEmpty() ? null : this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Simulate an asynchronous processing function
async function processData(batch) {
    // Mock delay for processing (simulate an async task)
    return new Promise((resolve) => setTimeout(() => resolve(batch), 1000));
}

// Function to process data in batches
async function processBatch(queue, batchSize) {
    while (!queue.isEmpty()) {
        const batch = [];

        // Dequeue up to `batchSize` items (e.g., 1,000 items at a time)
        for (let i = 0; i < batchSize && !queue.isEmpty(); i++) {
            batch.push(queue.dequeue()); // Dequeue 1 item at a time
        }
        console.log(queue)
            // Log current batch being processed
        console.log(`Processing batch of size: ${batch.length}`);

        // Simulate async processing of the batch
        await processData(batch);
    }
}

// Main function to run the queue processing
async function main() {
    // Mock dataset of 50,000 items (could be products, orders, etc.)
    const dataset = Array.from({ length: 5000 }, (_, i) => i + 1);

    const queue = new Queue();

    // Enqueue all data into the queue (50,000 items)
    dataset.forEach((data) => queue.enqueue(data));
    // Log the total number of items in the queue
    console.log(`Total items in queue: ${queue.size()}`); // Outputs: 50,000

    const batchSize = 100; // Define the batch size for processing (1,000 items per batch)

    // Process the queue in batches of `batchSize`
    await processBatch(queue, batchSize);

    // Final message indicating that all items have been processed
    console.log('All tasks processed.');
}

// Run the main function
main();