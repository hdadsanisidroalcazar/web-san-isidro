---
title: Añadir galería a una publicación o página
---

En vez de crear una galería, que aparecerá en el listado de galerías, se puede crear una carpeta igual que para hacer una galería y mostrarla dentro de una publicación o página.

Para ello, editando la página donde quieras mostrarla, pulsa en el botón de markdown:

![](/images/manual-usuario/seleccionar-markdown.webp)

Al principio del archivo, añadir:

`import Gallery from '~/components/ui/Gallery.astro';`

Después, en la parte del texto donde quieres mostrar la galería:

`<Gallery folder="nombre-de-la-carpeta" />`

`Ejemplo:`

```markdown
import Gallery from '~/components/ui/Gallery.astro';

Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam commodo velit eu mi vehicula faucibus.Cras dapibus ut est eget ultrices.Aenean semper, dui eget placerat iaculis, ligula arcu rhoncus elit, non posuere erat dolor ut diam.Phasellus id fermentum lectus, eu facilisis nibh.

<Gallery folder="nombre-de-la-carpeta" />

Vestibulum et tortor fermentum, vehicula lectus volutpat, posuere arcu.Donec faucibus quam sit amet mi accumsan vulputate.Ut vel odio nec sapien laoreet interdum.Quisque vitae ultrices erat.Praesent ac tortor eget nulla tincidunt consectetur.Vestibulum non vestibulum ipsum, suscipit posuere lorem.Nulla facilisi.Cras metus odio, placerat ut vulputate quis, luctus quis sem.Morbi eu magna rhoncus, vulputate nibh eget, ornare turpis.Mauris in turpis hendrerit, interdum augue et, bibendum dolor.
```
