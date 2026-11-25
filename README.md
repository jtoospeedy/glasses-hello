# Hello Glasses

A starter Web App for Meta Ray-Ban Display glasses: plain HTML, CSS and JS with no build step.

## Preview on the Mac

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173 in Chrome. For a 600x600 preview of the glasses' display, install the
"Meta Ray-Ban Display Simulator" Chrome extension and click its icon on the page.

## Put it on the glasses

1. Host this folder at a public HTTPS URL (GitHub Pages, Vercel, Netlify, Cloudflare Pages). Plain HTTP and localhost won't work.
2. You need glasses software v125+ and Meta AI app v272+.
3. In the Meta AI app, turn on Developer Mode: Settings > App Info, tap the app version 5 times, then Enable.
4. In the Meta AI app, go to App Settings > Apps > Web Apps > Connect Web App, enter the HTTPS URL, and Save.
   The app appears at the bottom of the glasses' app grid, marked "unverified".
5. After you push changes, middle-tap on the glasses and choose Restart to reload.

## How input works

- Swipes on the touchpad or Neural Band arrive as arrow keys and move focus between focusable elements.
- A pinch or a tap arrives as Enter and clicks the focused element.
- Black pixels give off no light, so a black background looks see-through.

Docs: https://wearables.developer.meta.com/docs/develop/webapps/
