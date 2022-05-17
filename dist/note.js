"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = exports.Rest = exports.SoundBit = void 0;
class SoundBit {
    constructor(duration) {
        this.duration = duration;
    }
}
exports.SoundBit = SoundBit;
class Rest extends SoundBit {
    constructor(duration) {
        super(duration);
    }
}
exports.Rest = Rest;
class Note extends SoundBit {
    constructor(part) {
        if (part.duration) {
            super(part.duration);
        }
        else {
            super(0);
        }
        if (part.note) {
            this.note = part.note;
        }
    }
}
exports.Note = Note;
//# sourceMappingURL=note.js.map