# Day 1- Node.js Event Loop Experiment

This repo contains a simple experiment to understand Node.js **Event Loop**, **microtasks**, and **macrotasks**.

## Experiment File
- `event-loop-test.js`: Tests execution order of
  - `process.nextTick`
  - `Promise`
  - `setTimeout`
  - `setImmediate`

## Expected Output
Event loop phase 1
end
Highest priority - nextTick
Promise
setTimeout 1
setImmediate
setTimeout 2


## Key Notes
- `process.nextTick` runs before promises
- Microtasks run before timers and I/O callbacks
