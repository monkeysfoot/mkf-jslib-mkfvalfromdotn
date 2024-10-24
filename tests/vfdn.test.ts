import { describe, test, expect } from 'vitest'

import { vfdn } from '../src'

describe('valueFromDotNotation tests', ()=> {

    test.each([
        {input: {doggos: 'are awesome'}, path: 'doggos', expected: 'are awesome', error: undefined},
        {input: {doggos: 'are awesome'}, path: '', expected: undefined, error: undefined},
        {input: {doggos: 'are awesome', butcats: 'rule the world'}, path: 'butcats', expected: 'rule the world', error: undefined},
        {input: {doggos: 'are awesome', actions: { poop: 'anywhere', stealfood: true }}, path: 'actions.stealfood', expected: true, error: undefined},
        {input: {doggos: 'are awesome', actions: { poop: 'anywhere', stealfood: true }, specs: {agemultiplier: 7}}, path: 'specs.agemultiplier', expected: 7, error: undefined},
        {input: {doggos: 'are awesome', actions: { poop: 'anywhere', stealfood: true }}, path: 'actions.heedcommands', expected: undefined, error: undefined},
    ])('valFromDotNotation tests expected: $expected, error: $error', ({ input, path, expected, error }) => {

        if(error !== undefined && error !== null && error !== '') {

            expect(vfdn(path, input)).toThrow(error)

        } else {

            if(expected === undefined) {

                expect(vfdn(path, input)).toBeUndefined
            } else {

                expect(vfdn(path, input)).to.deep.equal(expected)
            }
        }

    })

})
