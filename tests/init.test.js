function sum(a, b) {
    return a + b;
}

const flings = (sum);

describe("Teste da função sum", () => {
    test("Soma de 1 + 2 igual a 3", () => {
        expect(flings(1, 2)).toBe(3);
    });
})