// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution");

describe("Substitution", () => {

    it("Should return false if input was not provided", () => {
        const expected = false;
        const actual = substitutionModule("message");
        expect(actual).to.equal(expected);
    });

    it("Should return false if alphabet was not provided", () => {
        const expected = false;
        const actual = substitutionModule("message");
        expect(actual).to.equal(expected);
    });

    it("Should return false if alphabet is not exactly 26 characters long", () => {
        const expected = false;
        const actual = substitutionModule("message", "plmoknijbuhvygctfxrdzeswaqaaaaa");
        expect(actual).to.equal(expected);
    });

    it("Should return false if alphabet is not exactly 26 characters long", () => {
        const expected = false;
        const actual = substitutionModule("message", "plmoknij");
        expect(actual).to.equal(expected);
    });

    it("should return false if duplicate values found in the given alphabet", () => {
        const expected = false;
        const actual = substitutionModule("message", "abcdefghijklmnopqrstuvwxyy");
        expect(actual).to.equal(expected);
    });

    it("Encoding: should maintain spaces in the message", () => {
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitutionModule("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it("Decoding", () => {
        const expected = "message";
        const actual = substitutionModule("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    });

});