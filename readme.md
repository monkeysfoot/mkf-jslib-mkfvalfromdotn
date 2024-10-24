## valueFromDotNotation

Extremly simple library I use in multiple places to extract values from json objects.

`
valueFromDotNotation = (path: string, itm: Record<string, any>): any | undefined
`

The export is aliased as `vfdn`, and is the default export as well.

### Usage

given object

```
{
    info: 'val i need',
    test: {
        deeperval: 100
    }    
}
```

path param `info` returns `val i need`

path param `test.deeperval` returns `100`

path param `idontexist` returns `undefined`
