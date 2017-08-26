
/**
 * Semantics: final, immutable. Not enforced for performance.
 *
 * @property {!number} codepoint
 * @final
 */
export class Char {
    /**
     * @param {!number} codepoint
     * @return {!Char}
     */
    static fromCodepoint(codepoint) {
        return new Char(codepoint);
    }

    /**
     * @param {!number} codepoint
     * @private
     */
    constructor(codepoint) {
        this.codepoint = codepoint;
    }

    equals(v) {
        return equals(v);
    }

    eqv(v) {
        return this === v;
    }

    valueOf() {
        return this;
    }

}

/**
 * @param {*} char
 * @return {!boolean}
 */
export function isChar(char) {
    // Because Char is final, we can compare the constructor directly
    // instead of using the much slower `instanceof` operator.
    return char.constructor === Char;
}

/**
 * @param {!Char} a
 * @param {!Char} b
 * @return {!boolean}
 */
export function charEq(a, b) {
    return a.codepoint === b.codepoint;
}

/**
 * @param {!Char} a
 * @param {!Char} b
 * @return {!boolean}
 */
export function charGt(a, b) {
    return a.codepoint > b.codepoint;
}

/**
 * @param {!Char} a
 * @param {!Char} b
 * @return {!boolean}
 */
export function charGte(a, b) {
    return a.codepoint >= b.codepoint;
}

/**
 * @param {!Char} a
 * @param {!Char} b
 * @return {!boolean}
 */
export function charLt(a, b) {
    return a.codepoint < b.codepoint;
}

/**
 * @param {!Char} a
 * @param {!Char} b
 * @return {!boolean}
 */
export function charLte(a, b) {
    return a.codepoint <= b.codepoint;
}

/**
 * @param {!Char} c
 * @return {!number}
 */
export function charToInteger(c) {
    return c.codepoint;
}

/**
 * @param {!integer} n
 * @return {!Char}
 */
export function integerToChar(n) {
    return Char.fromCodepoint(n);
}

/**
 * @param {!Char} c
 * @return {!integer}
 */
export function charUtf8Length(c) {
    if (c < 0x80) {
        return 1;
    } else if (c < 0x800) {
        return 2;
    } else if (c < 0x10000) {
        return 3;
    } else if (c < 0x200000) {
        return 4;
    } else if (c < 0x4000000) {
        return 5;
    } else {
        return 6;
    }
}
