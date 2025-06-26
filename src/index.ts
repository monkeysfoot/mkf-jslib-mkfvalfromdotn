const valueFromDotNotation = (path: string, itm: Record<string, any>, delim: string = '.'): any | undefined => {

    const vals = path.split(delim)
    let ob: Record<string, any> = itm
    while (vals.length > 0) {

        const thename = vals.shift()
        if(vals.length === 0 && thename !== undefined) {

            if (ob[thename]) {

                return ob[thename]
            }
        }

        if(thename !== undefined && typeof ob[thename] === 'object') {

            ob = ob[thename]
        } else {

            return undefined
        }
    }
    return undefined
}

const valueToDotNotation = (path: string, itm: Record<string, any>, value: any, delim: string = '.'): boolean => {
    const vals = path.split(delim)
    let ob: Record<string, any> = itm
    while (vals.length > 0) {

        const thename = vals.shift()

        if (thename === undefined) {
            throw new Error('valueToDotnotation - expected: $expected')
        }

        if(vals.length === 0) {
            ob[thename] = value
            return true
        } else {
            if(ob[thename] === undefined) {
                ob[thename] = {}
            }
            if (typeof ob[thename] === 'object') {
                ob = ob[thename]
            }
        }
    }
    return false
}

const hasValue = (path: string, itm: Record<string, any>, delim: string = '.'): boolean => {
    const vals = path.split(delim)
    let ob: Record<string, any> = itm
    while (vals.length > 0) {

        const thename = vals.shift()
        if(vals.length === 0 && thename !== undefined) {

            if (ob[thename]) {

                return true
            }
        }

        if(thename !== undefined && typeof ob[thename] === 'object') {

            ob = ob[thename]
        } else {

            return false
        }
    }
    return false
}

export {valueFromDotNotation, valueFromDotNotation as vfdn, valueToDotNotation, valueToDotNotation as vtdn, hasValue, hasValue as has}
