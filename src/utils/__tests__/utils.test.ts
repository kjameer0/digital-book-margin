import { useState } from "react"
function sum() {
  return 1 + 2
}
test('1 plus 2 equals 3', () => {
  expect(sum()).toBe(3);
})
