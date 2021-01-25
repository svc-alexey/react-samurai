export const objectInArr = (obj, payloadItem, objPropName, newObjProp) => {
    obj.map(users => {
        if (users[objPropName] === payloadItem) {
            return {...users, ...newObjProp}
        }
        return users;
    })
}



