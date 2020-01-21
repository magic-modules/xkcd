export const View = props => {
  CHECK_PROPS(props, propTypes, 'Xkcd')

  if (typeof props === 'string') {
    props = {
      name: props,
    }
  }

  props.class = {
    Xkcd: true,
    full: props.full,
  }

  const name = props.name.replace(/( |-)/g, '_')

  return Img({ class: props.class, src: `https://imgs.xkcd.com/comics/${name}.png` })
}

export const style = {
  maxHeight: '100%',
  maxWidth: '100%',

  '&.full': {
    width: '100%',
  },
}

export const propTypes = {
  Xkcd: [
    {
      name: 'class',
      type: 'string',
    },
    {
      name: 'name',
      type: 'string',
    },
  ],
}
