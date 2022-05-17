"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNoteGroup = exports.parseSimpleNote = exports.parseNote = exports.parseBlockContent = exports.parseBlock = void 0;
const note_1 = require("./note");
const parser_1 = require("./parser");
function parseBlock(block, duration, soundBits) {
    soundBits = parseBlockContent(block.head, duration, soundBits);
    block.tail.forEach(t => {
        soundBits = parseBlock(t.content, duration, soundBits);
    });
    return soundBits;
}
exports.parseBlock = parseBlock;
function parseBlockContent(blockContent, duration, soundBits) {
    if ((blockContent.kind === parser_1.ASTKinds.BLOCK_CONTENT_2)) {
        soundBits.push(parseNote(blockContent.note, duration));
        return soundBits;
    }
    else {
        return parseNoteGroup(blockContent.noteGroup, duration, soundBits);
    }
}
exports.parseBlockContent = parseBlockContent;
function parseNote(note, duration) {
    let finalDuration = duration;
    if (note.duration !== null) {
        finalDuration = parseInt(note.duration.value);
    }
    return parseSimpleNote(note.simpleNote, finalDuration);
}
exports.parseNote = parseNote;
function parseSimpleNote(simpleNote, duration) {
    if (simpleNote.kind === parser_1.ASTKinds.SIMPLE_NOTE_2) {
        return new note_1.Note({ note: parseInt(simpleNote.note), duration: duration });
    }
    else {
        return new note_1.Rest(duration);
    }
}
exports.parseSimpleNote = parseSimpleNote;
function parseNoteGroup(noteGroup, duration, soundBits) {
    var _a;
    return parseBlock(noteGroup.block, parseInt(((_a = noteGroup.duration) !== null && _a !== void 0 ? _a : '0').value), soundBits);
}
exports.parseNoteGroup = parseNoteGroup;
//# sourceMappingURL=song.parser.js.map