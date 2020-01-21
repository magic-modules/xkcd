export const View = () => [
  h1('@magic-modules/xkcd'),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' Xkcd component. It loads comic strips from imgs.xkcd.com.',
  ]),

  GitBadges('magic-modules/xkcd'),

  h2({ id: 'installation' }, 'installation'),
  Pre('npm install --save-exact @magic-modules/xkcd'),

  h2({ id: 'usage' }, 'usage'),

  p([
    'first, go to the ',
    Link({ to: 'https://xkcd.com/archive/' }, 'xkcd archive'),
    ' and find the strip you want to embed,',
    ' then use the name of the strip to load it.',
  ]),

  h3('magic words'),

  Pre(`Xkcd('magic words')`),

  Xkcd('magic words'),

  h3('magic tree'),

  p('full width images get loaded using the full: true prop'),

  Pre(`Xkcd({ name: 'magic_tree', full: true })`),

  Xkcd({ name: 'magic_tree', full: true }),

  h3('magic school bus'),

  Pre(`Xkcd({ name: 'magic school bus', full: true })`),

  Xkcd({ name: 'magic school bus', full: true }),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link({ to: 'https://github.com/magic-modules/xkcd/tree/master/example' }, 'example directory'),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
