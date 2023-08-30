import calculate  from '../logic/calculate';
describe('Testing calculate function', () => {
    test('testing AC', () => {
        expect(calculate({total: "10", next: "5", operation: "+"}, "AC")).toEqual({total: null, next: null, operation: null});
    });
    test('testing +/-', () => {
        const obj = {
            total: null,
            next: "5",
            operation: "+/-"
        }
        const  result  =  calculate(obj, "+/-")
        expect( result.next).toEqual( "-5");
    });
    test('testing .', () => {
        expect(calculate({total: "10", next: "5", operation: "+"}, ".")).toEqual({total: "10", next: "5.", operation: "+"});
    });
    test('testing 0', () => {
        expect(calculate({total: "10", next: "5", operation: "+"}, "0")).toEqual({total: "10", next: "50", operation: "+"});
    });
    test('testing =',()=>{
        expect(calculate({total: "10", next: "5", operation: "+"}, "=")).toEqual({total: "15", next: null, operation: null});
    })
})