## valueFromDotNotation

Extremly simple library I use in multiple places to extract values from json objects.

`
valueFromDotNotation = (path: string, itm: Record<string, any>): any | undefined
`

The export is aliased as `vfdn`, and is the default export as well.

`valueToDotNotation = (path: string, itm: Record<string, any>, value: any, delim: string = '.'): boolean`

This export is aliased as `vtdn`.

`hasValue = (path: string, itm: Record<string, any>, delim: string = '.'): boolean`

This export is aliased as `has`.

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

vfdn with path param `info` returns `val i need`

vfdn with path param `test.deeperval` returns `100`

vfdn with path param `idontexist` returns `undefined`

after vtdn with path param `dollars.fordonuts` and value param `"combat rabbit"` the object is now:

has with path param `idontexist` returns false

has with path param `test.deeperval` returns true

```
{
    info: 'val i need',
    test: {
        deeperval: 100
    },
    dollars: {
        fordonuts: "combat rabbit"
    }    
}
```