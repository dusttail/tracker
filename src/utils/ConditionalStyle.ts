export function conditionalStyle(predicate: boolean, style: string, otherStyle?: string) {
    return predicate ? style : otherStyle ?? '';
}
