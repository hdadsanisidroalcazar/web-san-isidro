---
title: Crear un botón
---

Pulsa en el botón de markdown:

![](/images/manual-usuario/seleccionar-markdown.webp)

Al principio del archivo, añadir:

`import Button from '~/components/ui/Button.astro';`

Después, en la parte del texto donde quieres mostrar el botón:

`<Button icon="tabler:map-pin" variant="link" text='Texto del enlace' prevIcon href='http://mienlace.com' target="\_blank" />`

`Ejemplo:`

```markdown
import Button from '~/components/ui/Button.astro';

Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam commodo velit eu mi vehicula faucibus.Cras dapibus ut est eget ultrices.Aenean semper, dui eget placerat iaculis, ligula arcu rhoncus elit, non posuere erat dolor ut diam.Phasellus id fermentum lectus, eu facilisis nibh.

<Button icon = "tabler:map-pin" variant = "link" text = 'Entra aquí' prevIcon href = 'http://mipagina.com/hola' target = "\_blank" />

Vestibulum et tortor fermentum, vehicula lectus volutpat, posuere arcu.Donec faucibus quam sit amet mi accumsan vulputate.Ut vel odio nec sapien laoreet interdum.Quisque vitae ultrices erat.Praesent ac tortor eget nulla tincidunt consectetur.Vestibulum non vestibulum ipsum, suscipit posuere lorem.Nulla facilisi.Cras metus odio, placerat ut vulputate quis, luctus quis sem.Morbi eu magna rhoncus, vulputate nibh eget, ornare turpis.Mauris in turpis hendrerit, interdum augue et, bibendum dolor.
```
