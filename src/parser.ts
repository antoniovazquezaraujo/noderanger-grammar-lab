/* AutoGenerated Code, changes may be overwritten
* INPUT GRAMMAR:
* BLOCK:=
*     head = BLOCK_CONTENT
*     tail = {NOTE_SEPARATOR content = BLOCK}*
* BLOCK_CONTENT:= noteGroup= {NOTE_GROUP} |  note={NOTE} 
* NOTE:= 
*     duration = {DURATION}? 
*     simpleNote= SIMPLE_NOTE 
* SIMPLE_NOTE:= silence={SILENCE_SIGN} | note={NOTE_VALUE} 
* NOTE_GROUP:= 
*     duration= DURATION 
*     GROUP_START 
*     block=BLOCK 
*     GROUP_END
* GROUP_START:= '\('
* GROUP_END:= '\)'
* DURATION:= value = '[0-9]+' DURATION_SIGN
* NOTE_VALUE:= '-?\d+'
* DURATION_SIGN:= ':'
* SILENCE_SIGN:= 's'
* NOTE_SEPARATOR:= ' '
*/
type Nullable<T> = T | null;
type $$RuleType<T> = () => Nullable<T>;
export interface ASTNodeIntf {
    kind: ASTKinds;
}
export enum ASTKinds {
    BLOCK = "BLOCK",
    BLOCK_$0 = "BLOCK_$0",
    BLOCK_CONTENT_1 = "BLOCK_CONTENT_1",
    BLOCK_CONTENT_2 = "BLOCK_CONTENT_2",
    BLOCK_CONTENT_$0 = "BLOCK_CONTENT_$0",
    BLOCK_CONTENT_$1 = "BLOCK_CONTENT_$1",
    NOTE = "NOTE",
    NOTE_$0 = "NOTE_$0",
    SIMPLE_NOTE_1 = "SIMPLE_NOTE_1",
    SIMPLE_NOTE_2 = "SIMPLE_NOTE_2",
    SIMPLE_NOTE_$0 = "SIMPLE_NOTE_$0",
    SIMPLE_NOTE_$1 = "SIMPLE_NOTE_$1",
    NOTE_GROUP = "NOTE_GROUP",
    GROUP_START = "GROUP_START",
    GROUP_END = "GROUP_END",
    DURATION = "DURATION",
    NOTE_VALUE = "NOTE_VALUE",
    DURATION_SIGN = "DURATION_SIGN",
    SILENCE_SIGN = "SILENCE_SIGN",
    NOTE_SEPARATOR = "NOTE_SEPARATOR",
}
export interface BLOCK {
    kind: ASTKinds.BLOCK;
    head: BLOCK_CONTENT;
    tail: BLOCK_$0[];
}
export interface BLOCK_$0 {
    kind: ASTKinds.BLOCK_$0;
    content: BLOCK;
}
export type BLOCK_CONTENT = BLOCK_CONTENT_1 | BLOCK_CONTENT_2;
export interface BLOCK_CONTENT_1 {
    kind: ASTKinds.BLOCK_CONTENT_1;
    noteGroup: BLOCK_CONTENT_$0;
}
export interface BLOCK_CONTENT_2 {
    kind: ASTKinds.BLOCK_CONTENT_2;
    note: BLOCK_CONTENT_$1;
}
export type BLOCK_CONTENT_$0 = NOTE_GROUP;
export type BLOCK_CONTENT_$1 = NOTE;
export interface NOTE {
    kind: ASTKinds.NOTE;
    duration: Nullable<NOTE_$0>;
    simpleNote: SIMPLE_NOTE;
}
export type NOTE_$0 = DURATION;
export type SIMPLE_NOTE = SIMPLE_NOTE_1 | SIMPLE_NOTE_2;
export interface SIMPLE_NOTE_1 {
    kind: ASTKinds.SIMPLE_NOTE_1;
    silence: SIMPLE_NOTE_$0;
}
export interface SIMPLE_NOTE_2 {
    kind: ASTKinds.SIMPLE_NOTE_2;
    note: SIMPLE_NOTE_$1;
}
export type SIMPLE_NOTE_$0 = SILENCE_SIGN;
export type SIMPLE_NOTE_$1 = NOTE_VALUE;
export interface NOTE_GROUP {
    kind: ASTKinds.NOTE_GROUP;
    duration: DURATION;
    block: BLOCK;
}
export type GROUP_START = string;
export type GROUP_END = string;
export interface DURATION {
    kind: ASTKinds.DURATION;
    value: string;
}
export type NOTE_VALUE = string;
export type DURATION_SIGN = string;
export type SILENCE_SIGN = string;
export type NOTE_SEPARATOR = string;
export class Parser {
    private readonly input: string;
    private pos: PosInfo;
    private negating: boolean = false;
    private memoSafe: boolean = true;
    constructor(input: string) {
        this.pos = {overallPos: 0, line: 1, offset: 0};
        this.input = input;
    }
    public reset(pos: PosInfo) {
        this.pos = pos;
    }
    public finished(): boolean {
        return this.pos.overallPos === this.input.length;
    }
    public clearMemos(): void {
    }
    public matchBLOCK($$dpth: number, $$cr?: ErrorTracker): Nullable<BLOCK> {
        return this.run<BLOCK>($$dpth,
            () => {
                let $scope$head: Nullable<BLOCK_CONTENT>;
                let $scope$tail: Nullable<BLOCK_$0[]>;
                let $$res: Nullable<BLOCK> = null;
                if (true
                    && ($scope$head = this.matchBLOCK_CONTENT($$dpth + 1, $$cr)) !== null
                    && ($scope$tail = this.loop<BLOCK_$0>(() => this.matchBLOCK_$0($$dpth + 1, $$cr), true)) !== null
                ) {
                    $$res = {kind: ASTKinds.BLOCK, head: $scope$head, tail: $scope$tail};
                }
                return $$res;
            });
    }
    public matchBLOCK_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<BLOCK_$0> {
        return this.run<BLOCK_$0>($$dpth,
            () => {
                let $scope$content: Nullable<BLOCK>;
                let $$res: Nullable<BLOCK_$0> = null;
                if (true
                    && this.matchNOTE_SEPARATOR($$dpth + 1, $$cr) !== null
                    && ($scope$content = this.matchBLOCK($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.BLOCK_$0, content: $scope$content};
                }
                return $$res;
            });
    }
    public matchBLOCK_CONTENT($$dpth: number, $$cr?: ErrorTracker): Nullable<BLOCK_CONTENT> {
        return this.choice<BLOCK_CONTENT>([
            () => this.matchBLOCK_CONTENT_1($$dpth + 1, $$cr),
            () => this.matchBLOCK_CONTENT_2($$dpth + 1, $$cr),
        ]);
    }
    public matchBLOCK_CONTENT_1($$dpth: number, $$cr?: ErrorTracker): Nullable<BLOCK_CONTENT_1> {
        return this.run<BLOCK_CONTENT_1>($$dpth,
            () => {
                let $scope$noteGroup: Nullable<BLOCK_CONTENT_$0>;
                let $$res: Nullable<BLOCK_CONTENT_1> = null;
                if (true
                    && ($scope$noteGroup = this.matchBLOCK_CONTENT_$0($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.BLOCK_CONTENT_1, noteGroup: $scope$noteGroup};
                }
                return $$res;
            });
    }
    public matchBLOCK_CONTENT_2($$dpth: number, $$cr?: ErrorTracker): Nullable<BLOCK_CONTENT_2> {
        return this.run<BLOCK_CONTENT_2>($$dpth,
            () => {
                let $scope$note: Nullable<BLOCK_CONTENT_$1>;
                let $$res: Nullable<BLOCK_CONTENT_2> = null;
                if (true
                    && ($scope$note = this.matchBLOCK_CONTENT_$1($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.BLOCK_CONTENT_2, note: $scope$note};
                }
                return $$res;
            });
    }
    public matchBLOCK_CONTENT_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<BLOCK_CONTENT_$0> {
        return this.matchNOTE_GROUP($$dpth + 1, $$cr);
    }
    public matchBLOCK_CONTENT_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<BLOCK_CONTENT_$1> {
        return this.matchNOTE($$dpth + 1, $$cr);
    }
    public matchNOTE($$dpth: number, $$cr?: ErrorTracker): Nullable<NOTE> {
        return this.run<NOTE>($$dpth,
            () => {
                let $scope$duration: Nullable<Nullable<NOTE_$0>>;
                let $scope$simpleNote: Nullable<SIMPLE_NOTE>;
                let $$res: Nullable<NOTE> = null;
                if (true
                    && (($scope$duration = this.matchNOTE_$0($$dpth + 1, $$cr)) || true)
                    && ($scope$simpleNote = this.matchSIMPLE_NOTE($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.NOTE, duration: $scope$duration, simpleNote: $scope$simpleNote};
                }
                return $$res;
            });
    }
    public matchNOTE_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<NOTE_$0> {
        return this.matchDURATION($$dpth + 1, $$cr);
    }
    public matchSIMPLE_NOTE($$dpth: number, $$cr?: ErrorTracker): Nullable<SIMPLE_NOTE> {
        return this.choice<SIMPLE_NOTE>([
            () => this.matchSIMPLE_NOTE_1($$dpth + 1, $$cr),
            () => this.matchSIMPLE_NOTE_2($$dpth + 1, $$cr),
        ]);
    }
    public matchSIMPLE_NOTE_1($$dpth: number, $$cr?: ErrorTracker): Nullable<SIMPLE_NOTE_1> {
        return this.run<SIMPLE_NOTE_1>($$dpth,
            () => {
                let $scope$silence: Nullable<SIMPLE_NOTE_$0>;
                let $$res: Nullable<SIMPLE_NOTE_1> = null;
                if (true
                    && ($scope$silence = this.matchSIMPLE_NOTE_$0($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.SIMPLE_NOTE_1, silence: $scope$silence};
                }
                return $$res;
            });
    }
    public matchSIMPLE_NOTE_2($$dpth: number, $$cr?: ErrorTracker): Nullable<SIMPLE_NOTE_2> {
        return this.run<SIMPLE_NOTE_2>($$dpth,
            () => {
                let $scope$note: Nullable<SIMPLE_NOTE_$1>;
                let $$res: Nullable<SIMPLE_NOTE_2> = null;
                if (true
                    && ($scope$note = this.matchSIMPLE_NOTE_$1($$dpth + 1, $$cr)) !== null
                ) {
                    $$res = {kind: ASTKinds.SIMPLE_NOTE_2, note: $scope$note};
                }
                return $$res;
            });
    }
    public matchSIMPLE_NOTE_$0($$dpth: number, $$cr?: ErrorTracker): Nullable<SIMPLE_NOTE_$0> {
        return this.matchSILENCE_SIGN($$dpth + 1, $$cr);
    }
    public matchSIMPLE_NOTE_$1($$dpth: number, $$cr?: ErrorTracker): Nullable<SIMPLE_NOTE_$1> {
        return this.matchNOTE_VALUE($$dpth + 1, $$cr);
    }
    public matchNOTE_GROUP($$dpth: number, $$cr?: ErrorTracker): Nullable<NOTE_GROUP> {
        return this.run<NOTE_GROUP>($$dpth,
            () => {
                let $scope$duration: Nullable<DURATION>;
                let $scope$block: Nullable<BLOCK>;
                let $$res: Nullable<NOTE_GROUP> = null;
                if (true
                    && ($scope$duration = this.matchDURATION($$dpth + 1, $$cr)) !== null
                    && this.matchGROUP_START($$dpth + 1, $$cr) !== null
                    && ($scope$block = this.matchBLOCK($$dpth + 1, $$cr)) !== null
                    && this.matchGROUP_END($$dpth + 1, $$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.NOTE_GROUP, duration: $scope$duration, block: $scope$block};
                }
                return $$res;
            });
    }
    public matchGROUP_START($$dpth: number, $$cr?: ErrorTracker): Nullable<GROUP_START> {
        return this.regexAccept(String.raw`(?:\()`, $$dpth + 1, $$cr);
    }
    public matchGROUP_END($$dpth: number, $$cr?: ErrorTracker): Nullable<GROUP_END> {
        return this.regexAccept(String.raw`(?:\))`, $$dpth + 1, $$cr);
    }
    public matchDURATION($$dpth: number, $$cr?: ErrorTracker): Nullable<DURATION> {
        return this.run<DURATION>($$dpth,
            () => {
                let $scope$value: Nullable<string>;
                let $$res: Nullable<DURATION> = null;
                if (true
                    && ($scope$value = this.regexAccept(String.raw`(?:[0-9]+)`, $$dpth + 1, $$cr)) !== null
                    && this.matchDURATION_SIGN($$dpth + 1, $$cr) !== null
                ) {
                    $$res = {kind: ASTKinds.DURATION, value: $scope$value};
                }
                return $$res;
            });
    }
    public matchNOTE_VALUE($$dpth: number, $$cr?: ErrorTracker): Nullable<NOTE_VALUE> {
        return this.regexAccept(String.raw`(?:-?\d+)`, $$dpth + 1, $$cr);
    }
    public matchDURATION_SIGN($$dpth: number, $$cr?: ErrorTracker): Nullable<DURATION_SIGN> {
        return this.regexAccept(String.raw`(?::)`, $$dpth + 1, $$cr);
    }
    public matchSILENCE_SIGN($$dpth: number, $$cr?: ErrorTracker): Nullable<SILENCE_SIGN> {
        return this.regexAccept(String.raw`(?:s)`, $$dpth + 1, $$cr);
    }
    public matchNOTE_SEPARATOR($$dpth: number, $$cr?: ErrorTracker): Nullable<NOTE_SEPARATOR> {
        return this.regexAccept(String.raw`(?: )`, $$dpth + 1, $$cr);
    }
    public test(): boolean {
        const mrk = this.mark();
        const res = this.matchBLOCK(0);
        const ans = res !== null;
        this.reset(mrk);
        return ans;
    }
    public parse(): ParseResult {
        const mrk = this.mark();
        const res = this.matchBLOCK(0);
        if (res)
            return {ast: res, errs: []};
        this.reset(mrk);
        const rec = new ErrorTracker();
        this.clearMemos();
        this.matchBLOCK(0, rec);
        const err = rec.getErr()
        return {ast: res, errs: err !== null ? [err] : []}
    }
    public mark(): PosInfo {
        return this.pos;
    }
    private loop<T>(func: $$RuleType<T>, star: boolean = false): Nullable<T[]> {
        const mrk = this.mark();
        const res: T[] = [];
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
    private run<T>($$dpth: number, fn: $$RuleType<T>): Nullable<T> {
        const mrk = this.mark();
        const res = fn()
        if (res !== null)
            return res;
        this.reset(mrk);
        return null;
    }
    private choice<T>(fns: Array<$$RuleType<T>>): Nullable<T> {
        for (const f of fns) {
            const res = f();
            if (res !== null) {
                return res;
            }
        }
        return null;
    }
    private regexAccept(match: string, dpth: number, cr?: ErrorTracker): Nullable<string> {
        return this.run<string>(dpth,
            () => {
                const reg = new RegExp(match, "y");
                const mrk = this.mark();
                reg.lastIndex = mrk.overallPos;
                const res = this.tryConsume(reg);
                if(cr) {
                    cr.record(mrk, res, {
                        kind: "RegexMatch",
                        // We substring from 3 to len - 1 to strip off the
                        // non-capture group syntax added as a WebKit workaround
                        literal: match.substring(3, match.length - 1),
                        negated: this.negating,
                    });
                }
                return res;
            });
    }
    private tryConsume(reg: RegExp): Nullable<string> {
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
    private noConsume<T>(fn: $$RuleType<T>): Nullable<T> {
        const mrk = this.mark();
        const res = fn();
        this.reset(mrk);
        return res;
    }
    private negate<T>(fn: $$RuleType<T>): Nullable<boolean> {
        const mrk = this.mark();
        const oneg = this.negating;
        this.negating = !oneg;
        const res = fn();
        this.negating = oneg;
        this.reset(mrk);
        return res === null ? true : null;
    }
    private memoise<K>(rule: $$RuleType<K>, memo: Map<number, [Nullable<K>, PosInfo]>): Nullable<K> {
        const $scope$pos = this.mark();
        const $scope$memoRes = memo.get($scope$pos.overallPos);
        if(this.memoSafe && $scope$memoRes !== undefined) {
        this.reset($scope$memoRes[1]);
        return $scope$memoRes[0];
        }
        const $scope$result = rule();
        if(this.memoSafe)
        memo.set($scope$pos.overallPos, [$scope$result, this.mark()]);
        return $scope$result;
    }
}
export function parse(s: string): ParseResult {
    const p = new Parser(s);
    return p.parse();
}
export interface ParseResult {
    ast: Nullable<BLOCK>;
    errs: SyntaxErr[];
}
export interface PosInfo {
    readonly overallPos: number;
    readonly line: number;
    readonly offset: number;
}
export interface RegexMatch {
    readonly kind: "RegexMatch";
    readonly negated: boolean;
    readonly literal: string;
}
export type EOFMatch = { kind: "EOF"; negated: boolean };
export type MatchAttempt = RegexMatch | EOFMatch;
export class SyntaxErr {
    public pos: PosInfo;
    public expmatches: MatchAttempt[];
    constructor(pos: PosInfo, expmatches: MatchAttempt[]) {
        this.pos = pos;
        this.expmatches = [...expmatches];
    }
    public toString(): string {
        return `Syntax Error at line ${this.pos.line}:${this.pos.offset}. Expected one of ${this.expmatches.map(x => x.kind === "EOF" ? " EOF" : ` ${x.negated ? 'not ': ''}'${x.literal}'`)}`;
    }
}
class ErrorTracker {
    private mxpos: PosInfo = {overallPos: -1, line: -1, offset: -1};
    private regexset: Set<string> = new Set();
    private pmatches: MatchAttempt[] = [];
    public record(pos: PosInfo, result: any, att: MatchAttempt) {
        if ((result === null) === att.negated)
            return;
        if (pos.overallPos > this.mxpos.overallPos) {
            this.mxpos = pos;
            this.pmatches = [];
            this.regexset.clear()
        }
        if (this.mxpos.overallPos === pos.overallPos) {
            if(att.kind === "RegexMatch") {
                if(!this.regexset.has(att.literal))
                    this.pmatches.push(att);
                this.regexset.add(att.literal);
            } else {
                this.pmatches.push(att);
            }
        }
    }
    public getErr(): SyntaxErr | null {
        if (this.mxpos.overallPos !== -1)
            return new SyntaxErr(this.mxpos, this.pmatches);
        return null;
    }
}