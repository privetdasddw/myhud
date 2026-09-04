/* Browser-only preview: fake night scene, radar placeholder, mock data.
   Loaded by main.js ONLY outside FiveM. */
(function () {
  document.body.classList.add('dev');

  const style = document.createElement('style');
  style.textContent = 'body.dev #hud{position:fixed}';
  document.head.appendChild(style);

  const scene = document.createElement('div');
  scene.id = 'devscene';
  scene.innerHTML = `
    <div class="base"></div>
    <span class="bokeh" style="left:66%;top:20%;width:8px;height:8px;background:#5a6a85;"></span>
    <span class="bokeh" style="left:74%;top:29%;width:6px;height:6px;background:#6a7fa8;"></span>
    <span class="bokeh" style="left:58%;top:33%;width:4px;height:4px;background:#7a8db5;"></span>
    <span class="bokeh" style="left:83%;top:38%;width:7px;height:7px;background:#5f729c;"></span>
    <span class="bokeh" style="left:51%;top:24%;width:5px;height:5px;background:#6a7fa8;"></span>
    <span class="bokeh" style="left:31%;top:22%;width:5px;height:5px;background:#4f628a;"></span>
    <span class="bokeh" style="left:88%;top:24%;width:4px;height:4px;background:#5a6a85;"></span>
    <div class="road"></div>
    <div class="lane"></div>
    <div class="vignette"></div>
    <div class="radar">
      <span class="st h1"></span><span class="st h2"></span>
      <span class="st v1"></span><span class="st v2"></span>
      <span class="player"></span>
    </div>`;
  document.body.prepend(scene);

  /* Preview использует тот же accent, что стоит в config.lua
     (Config.Accent = '#f2b13c') — единственный функциональный цвет HUD. */
  window.HUD.config({ accent: '#f2b13c', lowFuel: 15 });

  const veh = new URLSearchParams(location.search).has('veh');

  window.HUD.apply({
    visible: true,
    time: '8:56 PM',
    night: true,
    weather: 'cloud',
    temperature: '70°F',
    street: 'Innocence Blvd.',
    postal: '9146',
    direction: 'В',
    unit: 'MPH',
    mic: veh ? 'idle' : 'talking',
    radioChannel: 2,
    radioTalking: false
  });

  if (veh) {
    /* Штатное состояние: скорость ниже лимита, знак не инвертирован.
       Чтобы посмотреть превышение — speed 58, delta 8. */
    window.HUD.apply({
      drive: true,
      speed: 41,
      gear: 'S',
      fuel: 62,
      limit: 50,
      delta: 0,
      seatbelt: false
    });
  } else {
    window.HUD.apply({ drive: false, seatbelt: null, limit: 0, delta: 0 });
  }
})();
