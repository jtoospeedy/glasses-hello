const $ = (id) => document.getElementById(id);

// Clock
function tick() {
  $('time').textContent = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}
tick();
setInterval(tick, 10_000);

// Battery, if the glasses expose it
if (navigator.getBattery) {
  navigator.getBattery().then((battery) => {
    const show = () => {
      $('battery').hidden = false;
      $('battery').textContent = `${Math.round(battery.level * 100)}%${battery.charging ? ' charging' : ''}`;
    };
    show();
    battery.addEventListener('levelchange', show);
    battery.addEventListener('chargingchange', show);
  }).catch(() => {});
}

// Swipes move focus between buttons on their own (spatial navigation).
// A pinch on the Neural Band, or a tap on the touchpad, arrives as Enter and clicks the focused button.
let count = 0;
$('count').addEventListener('click', () => {
  count += 1;
  $('count').textContent = `Count: ${count}`;
});

// Text to speech plays through the glasses' speakers.
$('speak').addEventListener('click', () => {
  if (!('speechSynthesis' in window)) {
    $('status').textContent = 'Speech not supported';
    return;
  }
  speechSynthesis.cancel();
  speechSynthesis.speak(new SpeechSynthesisUtterance('Hello from Claude'));
});

// Show each input as it arrives, so you can see the touchpad and Neural Band working.
const inputNames = { ArrowUp: 'Up', ArrowDown: 'Down', ArrowLeft: 'Left', ArrowRight: 'Right', Enter: 'Select' };
document.addEventListener('keydown', (event) => {
  if (inputNames[event.key]) $('status').textContent = `Last input: ${inputNames[event.key]}`;
});

if (document.activeElement === document.body) $('count').focus();
