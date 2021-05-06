import hotkeys from "hotkeys-js";

const observerMap = {}

export function addKeyObserver(key, callback) {
    if(!observerMap[key]) { // 없다면 초기화, 핫키에 등록이 된적이 없으므로 핫키를 등록해주고 callback 함수를 넣어줌
        observerMap[key] = [];
        hotkeys(key, () => excuteCallbacks(key));
    }
    observerMap[key].push(callback);
}

export function removeKeyObserver(key, callback) {
    observerMap[key] = observerMap[key].filter(item => item !== callback);
}

export function excuteCallbacks(key) {
    for(const ob of observerMap[key]) {
        ob();
    }
}