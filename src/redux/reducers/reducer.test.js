import counter from './reducer.js'

describe("Counter reducer", () => {

    test("when incremented from 0, display 1", () => {
        expect(counter(0, { type: "INCREMENT" })).toEqual(1);
     });
});


// expect(counter(0, { type: "INCREMENT" })).toEqual(1);

// expect(counter(1, { type: "INCREMENT" })).toEqual(2);

// expect(counter(2, { type: "DECREMENT" })).toEqual(1);

// expect(counter(1, { type: "DECREMENT" })).toEqual(0);

// expect(counter(1, { type: "SOMETHING_ELSE" })).toEqual(1);

// expect(counter(undefined, {})).toEqual(0);

