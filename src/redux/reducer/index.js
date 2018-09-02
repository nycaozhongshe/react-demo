/**
 * 数据处理
 */
import { type } from '../action/index'
const initState = {
    menuName: '首页'
}

export default (state = initState, action) => {
    switch (action) {
        case type.SWITCH_MENU:
            return {
                ...state,
                menuName: action.menuName
            }
        default:
            break;
    }
}