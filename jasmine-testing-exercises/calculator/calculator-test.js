
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 10000, years: 20, rate: 4.5 })).toEqual('63.26');
  expect(calculateMonthlyPayment({ amount: 0, years: 0, rate: 0 })).toEqual('NaN')
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({ amount : 633, years : 20, rate:4.5})).toEqual('4.00')
});

it("should accept loan amounts with decimals", function () {
  expect(calculateMonthlyPayment({ amount: 10000.98, years: 20, rate: 4.5 })).toEqual('63.27')
})

/// etc
