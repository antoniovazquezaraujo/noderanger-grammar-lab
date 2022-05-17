// import * as Parser from './parser';
import { Note, Rest, SoundBit } from './note';
import { BLOCK, Parser, BLOCK_CONTENT, NOTE, ASTKinds, SIMPLE_NOTE} from './parser';

export function parseBlock(block: BLOCK): SoundBit[] {
    let soundBits: SoundBit[] = [];
    soundBits = soundBits.concat(parseBlockContent(block.head, 0));
    block.tail.forEach(t => {
        soundBits = soundBits.concat(parseBlock(t.content));
    });
    return soundBits;
}
   
export function parseBlockContent(blockContent: BLOCK_CONTENT, duration: number): SoundBit[] {
    if (( blockContent.kind  === ASTKinds.BLOCK_CONTENT_2) ) { //note
        let soundBits: SoundBit[] = [];
        soundBits.push(parseNote(blockContent.value, duration));
        return soundBits;
    } else { //NOTE_GROUP
        return parseNoteGroup(blockContent.value);
    }
} 
export function parseNote(note: NOTE, duration: number): SoundBit {
    if (typeof note  === typeof ASTKinds.NOTE_2) { //simple_note
        return parseSimpleNote(note.value as SIMPLE_NOTE, duration);
    } else { //timed_note
        return parseTimedNote(note.value );
    }
}

export function parseSimpleNote(simpleNote: SIMPLE_NOTE, duration: number): SoundBit {
    if (simpleNote.kind === ASTKinds.SIMPLE_NOTE_1) {
        return new Note({ note: parseInt(simpleNote.value.value), duration });
    } else { // SILENCE SIGN
        return new Rest( duration );
    }
}
export function parseTimedNote(timedNote: any): SoundBit {
    return parseSimpleNote(timedNote.value, timedNote.duration);
}
export function parseNoteGroup(noteGroup: any): SoundBit[] {
    let soundBits: SoundBit[] = [];
    noteGroup.block.forEach((t: BLOCK) => {
        soundBits = soundBits.concat(parseBlock(t));
    });
    return soundBits;
}
