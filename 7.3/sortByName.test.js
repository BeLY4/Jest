const sorting = require("../app");
const input = ["Гарри Поттер", "гарри поттер"]

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  it("Should maintain order for identical names (different cases)", () => {
    expect(sorting.sortByName(input)).toEqual(input);
  });
})