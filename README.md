## @magic-modules/xkcd

this is the [@magic-modules](https://github.com/magic-modules)
[Xkcd](https://xckd.com) component. It loads comic strips from imgs.xkcd.com.

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

#### install:
```bash
npm install --save-exact @magic-modules/xkcd
```

#### usage:
first, go to the
[xkcd archive](https://xkcd.com/archive/)
and find the strip you want to embed.

then use the name of any comic strip to load it

```javascript
Xkcd('magic words')
```

```javascript
Xkcd({ name: 'magic_tree', full: true })
```

```javascript
Xkcd({ name: 'magic school bus', full: true })
```

#### changelog

##### 0.0.1
first release.

##### 0.0.2
bump required node version to 14.2.0

##### 0.0.3 
bump required node version to 14.15.4

##### 0.0.4 - unreleased
...

[npm-image]: https://img.shields.io/npm/v/@magic-modules/xkcd.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/xkcd
[travis-image]: https://img.shields.io/travis/com/magic-modules/xkcd/master
[travis-url]: https://travis-ci.com/magic-modules/xkcd
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/xkcd/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/xkcd/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/xkcd/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/xkcd
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/xkcd.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/xkcd.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/xkcd/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/xkcd
