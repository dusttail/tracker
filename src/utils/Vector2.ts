export type Vector2 = [number, number];

export function vector2(e?: any): Vector2 {
    const vector2: Vector2 = [0, 0];
    if (!e) return vector2;
    if (
        e.type == 'touchstart' ||
        e.type == 'touchmove' ||
        e.type == 'touchend' ||
        e.type == 'touchcancel'
    ) {
        const evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
        const touch = evt.touches[0] || evt.changedTouches[0];
        vector2[0] = touch.pageX;
        vector2[1] = touch.pageY;
    }
    if (
        e.type == 'mousedown' ||
        e.type == 'mouseup' ||
        e.type == 'mousemove' ||
        e.type == 'mouseover' ||
        e.type == 'mouseout' ||
        e.type == 'mouseenter' ||
        e.type == 'mouseleave'
    ) {
        vector2[0] = e.clientX;
        vector2[1] = e.clientY;
    }
    return vector2;
}

export function vector2diff(first: Vector2, second: Vector2): Vector2 {
    return [first[0] - second[0], first[1] - second[1]];
}

export function getX(vector2: Vector2) {
    return vector2[0];
}

export function getY(vector2: Vector2) {
    return vector2[1];
}

export function normalize(position: number, maxDelta: number) {
    if (position > maxDelta) return maxDelta;
    if (position < -maxDelta) return -maxDelta;
    return position;
}
