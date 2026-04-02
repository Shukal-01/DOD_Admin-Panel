const hookObj = {
    navigate: null,
}


export const setHookObj = (hookName, hookValue) => {
    hookObj[hookName] = hookValue;
}

export const getHookObj = (hookName) => {
    return hookObj[hookName];
}


// ------------- named hooks exports --------------------------------
// -------------------- navigate 
export const setNavigateHook = (navigate) => {
    hookObj.navigate = navigate;
}
export const getNavigateHook = () => {
    return hookObj.navigate;
}
// -------------------- navigate 