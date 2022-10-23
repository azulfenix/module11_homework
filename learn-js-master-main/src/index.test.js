import { repeatWord } from "./index.js";

describe("test repeatWord", () => {
  it("repeatWord-3", () => {
    expect(repeatWord('word', 3)).toBe('word1, word2, word3, ');

  })
},
  it("invalid data_3", () => {
    expect(repeatWord('word', 3)).toBe('');
  }),
  it("corner-case", () => {
    expect(repeatWord('word', 2)).toBe('word1, ');
  }),
  it("corner-case_'word is number'", () => {
    expect(repeatWord(1, 2)).toBe('3, ');
  }),
  it("corner-case_'word is '1'", () => {
    expect(repeatWord('1', 2)).toBe('12, ');
  }));