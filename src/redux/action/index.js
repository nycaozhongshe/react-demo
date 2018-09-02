export const type = {
    SWITCH_MENU:'SWITCH_MENU'
}

export function switchMenu(name) {
    return {
        type: type.SWITCH_MENU,
        menuName: name
    }
}