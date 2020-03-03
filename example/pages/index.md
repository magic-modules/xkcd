
  # ${state.title},

this is the
[@magic-modules](https://github.com/magic-modules)
Xkcd component. It loads comic strips from imgs.xkcd.com.

<GitBadges>magic-modules/xkcd</GitBadges>

## installation

<Pre>npm install --save-exact @magic-modules/xkcd</Pre>
## usage

first, go to the
[xkcd archive](https://xkcd.com/archive/),
and find the strip you want to embed,
then use the name of the strip to load it.

### magic words

<Pre>&lt;Xkcd>magic words&lt;Xkcd></Pre>

<Xkcd>magic words</Xkcd>

### magic tree

full width images get loaded using the full: true prop

<Pre>
&lt;Xkcd name="magic_tree" full="true">&lt;/Xkcd>
</Pre>

<Xkcd name="magic_tree" full="true"></Xkcd>

### magic school bus

<Pre>
&lt;Xkcd name="magic school bus" full="true">&lt;/Xkcd>
</Pre>

<Xkcd name="magic school bus" full="true"></Xkcd>

## source

the source for this page is in the
[example directory](https://github.com/magic-modules/xkcd/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)