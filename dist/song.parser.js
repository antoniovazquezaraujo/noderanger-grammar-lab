"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNoteGroup = exports.parseTimedNote = exports.parseSimpleNote = exports.parseNote = exports.parseBlockContent = exports.parseBlock = void 0;
const note_1 = require("./note");
const parser_1 = require("./parser");
function parseBlock(block) {
    let soundBits = [];
    soundBits = soundBits.concat(parseBlockContent(block.head, 0));
    block.tail.forEach(t => {
        soundBits = soundBits.concat(parseBlock(t.content));
    });
    return soundBits;
}
exports.parseBlock = parseBlock;
function parseBlockContent(blockContent, duration) {
    if ((blockContent.kind === parser_1.ASTKinds.BLOCK_CONTENT_2)) {
        let soundBits = [];
        soundBits.push(parseNote(blockContent.value, duration));
        return soundBits;
    }
    else {
        return parseNoteGroup(blockContent.value);
    }
}
exports.parseBlockContent = parseBlockContent;
function parseNote(note, duration) {
    if (typeof note === typeof parser_1.ASTKinds.NOTE_2) {
        return parseSimpleNote(note.value, duration);
    }
    else {
        return parseTimedNote(note.value);
    }
}
exports.parseNote = parseNote;
function parseSimpleNote(simpleNote, duration) {
    if (simpleNote.kind === parser_1.ASTKinds.SIMPLE_NOTE_1) {
        return new note_1.Note({ note: parseInt(simpleNote.value.value), duration });
    }
    else {
        return new note_1.Rest(duration);
    }
}
exports.parseSimpleNote = parseSimpleNote;
function parseTimedNote(timedNote) {
    return parseSimpleNote(timedNote.value, timedNote.duration);
}
exports.parseTimedNote = parseTimedNote;
function parseNoteGroup(noteGroup) {
    let soundBits = [];
    noteGroup.block.forEach((t) => {
        soundBits = soundBits.concat(parseBlock(t));
    });
    return soundBits;
}
exports.parseNoteGroup = parseNoteGroup;
//# sourceMappingURL=song.parser.js.map