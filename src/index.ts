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

export {valueFromDotNotation, valueFromDotNotation as vfdn, valueFromDotNotation as default}
