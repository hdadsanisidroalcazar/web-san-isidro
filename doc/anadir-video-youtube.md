---
title: Añadir video de YouTube
---

Pulsa en la botón M:

![](/images/manual-usuario/seleccionar-markdown.webp)

Ve a la página de YouTube del video y dale a Compartir:

![](/images/manual-usuario/compartir-video-youtube.webp)

Y ahí, en insertar:

![](</images/manual-usuario/Captura desde 2023-10-13 16-00-53.webp>)

Copia el código que aparece y pégalo en la publicación:

![](</images/manual-usuario/Captura desde 2023-10-13 16-03-09.webp>)

Te dará un código parecido a este:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/gCslrWiLsc8?si=atGsusuDcogx0IDJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
```

Ahora, elimina los campos width y height, añade el campo class y méte todo dentro de un div, el vídeo anterior debería quedar así:

```html
<div class="w-full h-96 relative">
  <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/  gCslrWiLsc8?si=Fs2Hfk-vBuefovJx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
</div>
```
