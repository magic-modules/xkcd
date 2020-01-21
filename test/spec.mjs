import { is } from '@magic/test'
import * as Xkcd from '../src/index.mjs'

export default [
  {
    fn: () => Xkcd.View,
    expect: is.function,
    info: 'expect Messages.View to be a function',
  },
  {
    fn: () => Xkcd.propTypes.Xkcd,
    expect: is.array,
    info: 'expect Xkcd.propTypes.Xkcd to be an array',
  },
]
