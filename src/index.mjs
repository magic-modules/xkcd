export const View = props => {
  CHECK_PROPS(props, propTypes, 'Xkcd')

  if (!props.name) {
    props = {
      name: props,
      full: false,
    }
  }

  props.name = props.name.replace(/( |-)/g, '_')

  return Img({
    src: `https://imgs.xkcd.com/comics/${props.name}.png`,
    class: {
      Xkcd: true,
      full: props.full,
    },
  })
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
