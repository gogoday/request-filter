import Filter from '../src/index'

const filter = new Filter();

test('add a key test_key: ', () => {
  filter.addKey('test_key');
  expect(filter.list).toContain('test_key');
})


let testObj = {test_key: ''}
test(`object: ${JSON.stringify(testObj)} has a key test_key: `, () => {
  expect(filter.hasKey(testObj)).toBe(true);
})

let testObj2 = {test_key2: ''};
test(`object: ${JSON.stringify(testObj2)} not has a key test_key: `, () => {
  expect(filter.hasKey(testObj2)).toBe(false);
})

let testObj3 = {Test_Key: ''};
test(`object: ${JSON.stringify(testObj3)} has a key test_key, test tolowercase: `, () => {
  expect(filter.hasKey(testObj2)).toBe(false);
})
