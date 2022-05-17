"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntaxErr = exports.parse = exports.Parser = exports.ASTKinds = void 0;
var ASTKinds;
(function (ASTKinds) {
    ASTKinds["BLOCK"] = "BLOCK";
    ASTKinds["BLOCK_$0"] = "BLOCK_$0";
    ASTKinds["BLOCK_CONTENT_1"] = "BLOCK_CONTENT_1";
    ASTKinds["BLOCK_CONTENT_2"] = "BLOCK_CONTENT_2";
    ASTKinds["BLOCK_CONTENT_$0"] = "BLOCK_CONTENT_$0";
    ASTKinds["BLOCK_CONTENT_$1"] = "BLOCK_CONTENT_$1";
    ASTKinds["NOTE"] = "NOTE";
    ASTKinds["NOTE_$0"] = "NOTE_$0";
    ASTKinds["SIMPLE_NOTE_1"] = "SIMPLE_NOTE_1";
    ASTKinds["SIMPLE_NOTE_2"] = "SIMPLE_NOTE_2";
    ASTKinds["SIMPLE_NOTE_$0"] = "SIMPLE_NOTE_$0";
    ASTKinds["SIMPLE_NOTE_$1"] = "SIMPLE_NOTE_$1";
    ASTKinds["NOTE_GROUP"] = "NOTE_GROUP";
    ASTKinds["GROUP_START"] = "GROUP_START";
    ASTKinds["GROUP_END"] = "GROUP_END";
    ASTKinds["DURATION"] = "DURATION";
    ASTKinds["NOTE_VALUE"] = "NOTE_VALUE";
    ASTKinds["DURATION_SIGN"] = "DURATION_SIGN";
    ASTKinds["SILENCE_SIGN"] = "SILENCE_SIGN";
    ASTKinds["NOTE_SEPARATOR"] = "NOTE_SEPARATOR";
})(ASTKinds = exports.ASTKinds || (exports.ASTKinds = {}));
class Parser {
    constructor(input) {
        this.negating = false;
        this.memoSafe = true;
        this.pos = { overallPos: 0, line: 1, offset: 0 };
        this.input = input;
    }
    reset(pos) {
        this.pos = pos;
    }
    finished() {
        return this.pos.overallPos === this.input.length;
    }
    clearMemos() {
    }
    matchBLOCK($$dpth, $$cr) {
        return this.run($$dpth, () => {
            let $scope$head;
            let $scope$tail;
            let $$res = null;
            if (true
                && ($scope$head = this.matchBLOCK_CONTENT($$dpth + 1, $$cr)) !== null
                && ($scope$tail = this.loop(() => this.matchBLOCK_$0($$dpth + 1, $$cr), true)) !== null) {
                $$res = { kind: ASTKinds.BLOCK, head: $scope$head, tail: $scope$tail };
            }
            return $$res;
        });
    }
    matchBLOCK_$0($$dpth, $$cr) {
        return this.run($$dpth, () => {
            let $scope$content;
            let $$res = null;
            if (true
                && this.matchNOTE_SEPARATOR($$dpth + 1, $$cr) !== null
                && ($scope$content = this.matchBLOCK($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.BLOCK_$0, content: $scope$content };
            }
            return $$res;
        });
    }
    matchBLOCK_CONTENT($$dpth, $$cr) {
        return this.choice([
            () => this.matchBLOCK_CONTENT_1($$dpth + 1, $$cr),
            () => this.matchBLOCK_CONTENT_2($$dpth + 1, $$cr),
        ]);
    }
    matchBLOCK_CONTENT_1($$dpth, $$cr) {
        return this.run($$dpth, () => {
            let $scope$noteGroup;
            let $$res = null;
            if (true
                && ($scope$noteGroup = this.matchBLOCK_CONTENT_$0($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.BLOCK_CONTENT_1, noteGroup: $scope$noteGroup };
            }
            return $$res;
        });
    }
    matchBLOCK_CONTENT_2($$dpth, $$cr) {
        return this.run($$dpth, () => {
            let $scope$note;
            let $$res = null;
            if (true
                && ($scope$note = this.matchBLOCK_CONTENT_$1($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.BLOCK_CONTENT_2, note: $scope$note };
            }
            return $$res;
        });
    }
    matchBLOCK_CONTENT_$0($$dpth, $$cr) {
        return this.matchNOTE_GROUP($$dpth + 1, $$cr);
    }
    matchBLOCK_CONTENT_$1($$dpth, $$cr) {
        return this.matchNOTE($$dpth + 1, $$cr);
    }
    matchNOTE($$dpth, $$cr) {
        return this.run($$dpth, () => {
            let $scope$duration;
            let $scope$simpleNote;
            let $$res = null;
            if (true
                && (($scope$duration = this.matchNOTE_$0($$dpth + 1, $$cr)) || true)
                && ($scope$simpleNote = this.matchSIMPLE_NOTE($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.NOTE, duration: $scope$duration, simpleNote: $scope$simpleNote };
            }
            return $$res;
        });
    }
    matchNOTE_$0($$dpth, $$cr) {
        return this.matchDURATION($$dpth + 1, $$cr);
    }
    matchSIMPLE_NOTE($$dpth, $$cr) {
        return this.choice([
            () => this.matchSIMPLE_NOTE_1($$dpth + 1, $$cr),
            () => this.matchSIMPLE_NOTE_2($$dpth + 1, $$cr),
        ]);
    }
    matchSIMPLE_NOTE_1($$dpth, $$cr) {
        return this.run($$dpth, () => {
            let $scope$silence;
            let $$res = null;
            if (true
                && ($scope$silence = this.matchSIMPLE_NOTE_$0($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.SIMPLE_NOTE_1, silence: $scope$silence };
            }
            return $$res;
        });
    }
    matchSIMPLE_NOTE_2($$dpth, $$cr) {
        return this.run($$dpth, () => {
            let $scope$note;
            let $$res = null;
            if (true
                && ($scope$note = this.matchSIMPLE_NOTE_$1($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.SIMPLE_NOTE_2, note: $scope$note };
            }
            return $$res;
        });
    }
    matchSIMPLE_NOTE_$0($$dpth, $$cr) {
        return this.matchSILENCE_SIGN($$dpth + 1, $$cr);
    }
    matchSIMPLE_NOTE_$1($$dpth, $$cr) {
        return this.matchNOTE_VALUE($$dpth + 1, $$cr);
    }
    matchNOTE_GROUP($$dpth, $$cr) {
        return this.run($$dpth, () => {
            let $scope$duration;
            let $scope$block;
            let $$res = null;
            if (true
                && ($scope$duration = this.matchDURATION($$dpth + 1, $$cr)) !== null
                && this.matchGROUP_START($$dpth + 1, $$cr) !== null
                && ($scope$block = this.matchBLOCK($$dpth + 1, $$cr)) !== null
                && this.matchGROUP_END($$dpth + 1, $$cr) !== null) {
                $$res = { kind: ASTKinds.NOTE_GROUP, duration: $scope$duration, block: $scope$block };
            }
            return $$res;
        });
    }
    matchGROUP_START($$dpth, $$cr) {
        return this.regexAccept(String.raw `(?:\()`, $$dpth + 1, $$cr);
    }
    matchGROUP_END($$dpth, $$cr) {
        return this.regexAccept(String.raw `(?:\))`, $$dpth + 1, $$cr);
    }
    matchDURATION($$dpth, $$cr) {
        return this.run($$dpth, () => {
            let $scope$value;
            let $$res = null;
            if (true
                && ($scope$value = this.regexAccept(String.raw `(?:[0-9]+)`, $$dpth + 1, $$cr)) !== null
                && this.matchDURATION_SIGN($$dpth + 1, $$cr) !== null) {
                $$res = { kind: ASTKinds.DURATION, value: $scope$value };
            }
            return $$res;
        });
    }
    matchNOTE_VALUE($$dpth, $$cr) {
        return this.regexAccept(String.raw `(?:-?\d+)`, $$dpth + 1, $$cr);
    }
    matchDURATION_SIGN($$dpth, $$cr) {
        return this.regexAccept(String.raw `(?::)`, $$dpth + 1, $$cr);
    }
    matchSILENCE_SIGN($$dpth, $$cr) {
        return this.regexAccept(String.raw `(?:s)`, $$dpth + 1, $$cr);
    }
    matchNOTE_SEPARATOR($$dpth, $$cr) {
        return this.regexAccept(String.raw `(?: )`, $$dpth + 1, $$cr);
    }
    test() {
        const mrk = this.mark();
        const res = this.matchBLOCK(0);
        const ans = res !== null;
        this.reset(mrk);
        return ans;
    }
    parse() {
        const mrk = this.mark();
        const res = this.matchBLOCK(0);
        if (res)
            return { ast: res, errs: [] };
        this.reset(mrk);
        const rec = new ErrorTracker();
        this.clearMemos();
        this.matchBLOCK(0, rec);
        const err = rec.getErr();
        return { ast: res, errs: err !== null ? [err] : [] };
    }
    mark() {
        return this.pos;
    }
    loop(func, star = false) {
        const mrk = this.mark();
        const res = [];
        for (;;) {
            const t = func();
            if (t === null) {
                break;
            }
            res.push(t);
        }
        if (star || res.length > 0) {
            return res;
        }
        this.reset(mrk);
        return null;
    }
    run($$dpth, fn) {
        const mrk = this.mark();
        const res = fn();
        if (res !== null)
            return res;
        this.reset(mrk);
        return null;
    }
    choice(fns) {
        for (const f of fns) {
            const res = f();
            if (res !== null) {
                return res;
            }
        }
        return null;
    }
    regexAccept(match, dpth, cr) {
        return this.run(dpth, () => {
            const reg = new RegExp(match, "y");
            const mrk = this.mark();
            reg.lastIndex = mrk.overallPos;
            const res = this.tryConsume(reg);
            if (cr) {
                cr.record(mrk, res, {
                    kind: "RegexMatch",
                    literal: match.substring(3, match.length - 1),
                    negated: this.negating,
                });
            }
            return res;
        });
    }
    tryConsume(reg) {
        const res = reg.exec(this.input);
        if (res) {
            let lineJmp = 0;
            let lind = -1;
            for (let i = 0; i < res[0].length; ++i) {
                if (res[0][i] === "\n") {
                    ++lineJmp;
                    lind = i;
                }
            }
            this.pos = {
                overallPos: reg.lastIndex,
                line: this.pos.line + lineJmp,
                offset: lind === -1 ? this.pos.offset + res[0].length : (res[0].length - lind - 1)
            };
            return res[0];
        }
        return null;
    }
    noConsume(fn) {
        const mrk = this.mark();
        const res = fn();
        this.reset(mrk);
        return res;
    }
    negate(fn) {
        const mrk = this.mark();
        const oneg = this.negating;
        this.negating = !oneg;
        const res = fn();
        this.negating = oneg;
        this.reset(mrk);
        return res === null ? true : null;
    }
    memoise(rule, memo) {
        const $scope$pos = this.mark();
        const $scope$memoRes = memo.get($scope$pos.overallPos);
        if (this.memoSafe && $scope$memoRes !== undefined) {
            this.reset($scope$memoRes[1]);
            return $scope$memoRes[0];
        }
        const $scope$result = rule();
        if (this.memoSafe)
            memo.set($scope$pos.overallPos, [$scope$result, this.mark()]);
        return $scope$result;
    }
}
exports.Parser = Parser;
function parse(s) {
    const p = new Parser(s);
    return p.parse();
}
exports.parse = parse;
class SyntaxErr {
    constructor(pos, expmatches) {
        this.pos = pos;
        this.expmatches = [...expmatches];
    }
    toString() {
        return `Syntax Error at line ${this.pos.line}:${this.pos.offset}. Expected one of ${this.expmatches.map(x => x.kind === "EOF" ? " EOF" : ` ${x.negated ? 'not ' : ''}'${x.literal}'`)}`;
    }
}
exports.SyntaxErr = SyntaxErr;
class ErrorTracker {
    constructor() {
        this.mxpos = { overallPos: -1, line: -1, offset: -1 };
        this.regexset = new Set();
        this.pmatches = [];
    }
    record(pos, result, att) {
        if ((result === null) === att.negated)
            return;
        if (pos.overallPos > this.mxpos.overallPos) {
            this.mxpos = pos;
            this.pmatches = [];
            this.regexset.clear();
        }
        if (this.mxpos.overallPos === pos.overallPos) {
            if (att.kind === "RegexMatch") {
                if (!this.regexset.has(att.literal))
                    this.pmatches.push(att);
                this.regexset.add(att.literal);
            }
            else {
                this.pmatches.push(att);
            }
        }
    }
    getErr() {
        if (this.mxpos.overallPos !== -1)
            return new SyntaxErr(this.mxpos, this.pmatches);
        return null;
    }
}
//# sourceMappingURL=parser.js.map