import { isOpCodeWithArgs, OpCode } from "./opcodes.gen";

export function opcodeToString(op: OpCode): string {
    if (!isOpCodeWithArgs(op)) {
        return `${op.code}`;
    }
    if (op.code === 'SETCP') {
        return `SETCP${op.args[0]}`;
    }
    if (op.code === 'POPCTR') {
        return `c${op.args[0]} POP`;
    }
    if (op.code === 'PUSHCTR') {
        return `c${op.args[0]} PUSH`;
    }
    if (op.code === 'POP') {
        return `s${op.args[0]} POP`;
    }
    if (op.code === 'PUSH') {
        return `s${op.args[0]} PUSH`;
    }
    if (op.code === 'ADDCONST') {
        if (op.args[0] === 1) {
            return 'INC';
        } else {
            return `${op.args[0]} ADD`;
        }
    }
    if (op.code === 'GETPARAM') {
        if (op.args[0] === 3) {
            return 'NOW';
        }
        if (op.args[0] === 4) {
            return 'BLOCKLT';
        }
        if (op.args[0] === 5) {
            return 'LTIME';
        }
        if (op.args[0] === 6) {
            return 'RANDSEED';
        }
        if (op.args[0] === 7) {
            return 'BALANCE';
        }
        if (op.args[0] === 8) {
            return 'MYADDR';
        }
        if (op.args[0] === 9) {
            return 'CONFIGROOT';
        }

        return `${op.args[0]} GETPARAM`;
    }

    // OPCODE s(i) s(j)
    if (op.code === 'XCHG'
        || op.code === 'XCHG2'
        || op.code === 'XCPU'
        || op.code === 'PUXC'
        || op.code === 'PUSH2') {
        return `s${op.args[0]} s${op.args[1]} ${op.code}`;
    }

    // OPCODE s(i) s(j) s(k)
    if (op.code === 'XCHG3'
        || op.code === 'PUSH3'
        || op.code === 'XC2PU'
        || op.code === 'XCPUXC'
        || op.code === 'XCPU2'
        || op.code === 'PUXC2'
        || op.code === 'PUXCPU'
        || op.code === 'PU2XC'
    ) {
        return `s${op.args[0]} s${op.args[1]} s${op.args[2]} ${op.code}`;
    }

    return `${op.args.join(' ')} ${op.code}`;
}