
# Lazy load

A technique that defers image loads until they are needed and thus, improves website performance 🚀.

## Components

- `.lazy`: the class which will be added/removed by the event listener.

- `data-src`: an attribute inside the `<img>` tag for the soon-to-be lazy loaded images

- NB: only set the image source to this data attribute  if you want it to be lazy loaded. All other images that should appear on the page as usual should be referenced in a normal `img src=""` tag.

## Basic usage

- Add `lazyload.js` to `raw/js/vendor/`.

- Add `import { lazyLoader } from './vendor/lazyload.js';` *and* `( () => { lazyLoader(); } )();` to `raw/js/main.js`.

- Uncomment `img.classList.add( 'lazy-fade' );` if you want pretty, lazyloaded image transitions.

- Add `lazy-fade-in.css` file, or the code inside it, to your project's CSS/SASS files.

-----
```diff
! Anything below this line is only applicable to PHP's twig syntax / Yii framework.
```
-----

- Add `macro imageLazy` (from `addons/lazyload/example.twig`) to your project's `templates/_macros.twig` file.

## Example

At the top of your template, add
```
{% from '_macros' import image %}
{% from '_macros' import imageLazy %}
```
Add a conditional operator to use `imageLazy` and `image macros`. E.g:
```
{% if useLazy is defined and useLazy %}
	{{ imageLazy( item.image[0], transformSize ?? 'listingImage', null, 'lazy card__image' ) }}
{% else %}
	{{ image( item.image[0], transformSize ?? 'listingImage', null, 'card__image' ) }}
{% endif %}
```
Add `useLazy` variable in your included partial
```
{% include '_components/_project-card' with {
	'useLazy': loop.index > 3
} %}
```
-----
More info: `example.twig`
