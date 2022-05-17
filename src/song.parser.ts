// import * as Parser from './parser';
import { Note, Rest, SoundBit } from './note';
import { BLOCK, Parser, BLOCK_CONTENT, NOTE, ASTKinds, SIMPLE_NOTE, NOTE_GROUP, SILENCE_SIGN, NOTE_VALUE, DURATION } from './parser';

export function parseBlock(block: BLOCK, duration: number, soundBits: SoundBit[]): SoundBit[] {
    soundBits = parseBlockContent(block.head, duration, soundBits);
    block.tail.forEach(t => {
        soundBits = parseBlock(t.content, duration, soundBits);
    });
    return soundBits;
}

export function parseBlockContent(blockContent: BLOCK_CONTENT, duration:number soundBits: SoundBit[]): SoundBit[] {
    if ((blockContent.kind === ASTKinds.BLOCK_CONTENT_2)) { //note
        soundBits.push(parseNote(blockContent.note, duration));
        return soundBits;
    } else { //note_group
        return parseNoteGroup(blockContent.noteGroup, duration, soundBits);
    }
}
export function parseNote(note: NOTE, duration:number): SoundBit {
    let finalDuration = duration;
    if(note.duration !== null){
        finalDuration = parseInt(note.duration.value);
    }
    return parseSimpleNote(note.simpleNote, finalDuration!);
}
export function parseSimpleNote(simpleNote: SIMPLE_NOTE, duration: number): SoundBit {
    if (simpleNote.kind === ASTKinds.SIMPLE_NOTE_2) {
        return new Note({ note: parseInt(simpleNote.note), duration:duration });
    } else { //silence
        return new Rest(duration);
    }
}
export function parseNoteGroup(noteGroup: NOTE_GROUP, duration:number, soundBits: SoundBit[]): SoundBit[] {
    return parseBlock(noteGroup.block, parseInt((noteGroup.duration ?? '0').value), soundBits);
}
