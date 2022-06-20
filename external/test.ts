const filterString = (value: string) => value.replace(/[^0-9a-zA-Z]/g, "").toLowerCase()
console.log(filterString("A man, a plan, a canal: Panama"))
test("", () => {
  expect(filterString("A man, a plan, a canal: Panama")).toBe("adc");
});
