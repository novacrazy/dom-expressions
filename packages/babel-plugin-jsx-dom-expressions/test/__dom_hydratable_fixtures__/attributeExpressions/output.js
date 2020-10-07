import { template as _$template } from "r-dom";
import { style as _$style } from "r-dom";
import { setAttribute as _$setAttribute } from "r-dom";
import { effect as _$effect } from "r-dom";
import { getNextElement as _$getNextElement } from "r-dom";
import { runHydrationEvents as _$runHydrationEvents } from "r-dom";
import { classList as _$classList } from "r-dom";
import { spread as _$spread } from "r-dom";

const _tmpl$ = _$template(`<div id="main"><h1 disabled=""><a href="/">Welcome</a></h1></div>`, 6),
  _tmpl$2 = _$template(`<div><div></div><div></div></div>`, 6),
  _tmpl$3 = _$template(`<div></div>`, 2);

const template = (() => {
  const _el$ = _$getNextElement(_tmpl$),
    _el$2 = _el$.firstChild,
    _el$3 = _el$2.firstChild;

  _$spread(_el$, results, false, true);

  _$classList(_el$, {
    selected: selected
  });

  _el$.style.setProperty("color", color);

  _$spread(_el$2, () => results(), false, true);

  _el$2.style.setProperty("margin-right", "40px");

  const _ref$ = link;
  typeof _ref$ === "function" ? _ref$(_el$3) : (link = _el$3);

  _$effect(
    _p$ => {
      const _v$ = welcoming(),
        _v$2 = color(),
        _v$3 = {
          selected: selected()
        };

      _v$ !== _p$._v$ && _$setAttribute(_el$2, "title", (_p$._v$ = _v$));
      _v$2 !== _p$._v$2 && _el$2.style.setProperty("background-color", (_p$._v$2 = _v$2));
      _p$._v$3 = _$classList(_el$2, _v$3, _p$._v$3);
      return _p$;
    },
    {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    }
  );

  _$runHydrationEvents();

  return _el$;
})();

const template2 = (() => {
  const _el$4 = _$getNextElement(_tmpl$2),
    _el$5 = _el$4.firstChild,
    _el$6 = _el$5.nextSibling;

  _el$5.textContent = rowId;
  _el$6.textContent = row.label;
  const _el$7 = _el$6.firstChild;

  _$effect(() => (_el$7.data = row.label));

  return _el$4;
})();

const template3 = (() => {
  const _el$8 = _$getNextElement(_tmpl$3);

  _$setAttribute(_el$8, "id", state.id);

  _el$8.style.setProperty("background-color", state.color);

  _el$8.textContent = state.content;

  _$effect(() => _$setAttribute(_el$8, "name", state.name));

  return _el$8;
})();

const template4 = (() => {
  const _el$9 = _$getNextElement(_tmpl$3);

  _$effect(() => (_el$9.className = `hi ${state.class}`));

  return _el$9;
})();

const template5 = (() => {
  const _el$10 = _$getNextElement(_tmpl$3);

  _$effect(_$p => _$style(_el$10, someStyle(), _$p));

  return _el$10;
})();

const template6 = (() => {
  const _el$11 = _$getNextElement(_tmpl$3);

  _$effect(_$p =>
    _$style(
      _el$11,
      {
        "background-color": color(),
        "margin-right": "40px",
        ...props.style
      },
      _$p
    )
  );

  return _el$11;
})();

let refTarget;

const template7 = (() => {
  const _el$12 = _$getNextElement(_tmpl$3);

  const _ref$2 = refTarget;
  typeof _ref$2 === "function" ? _ref$2(_el$12) : (refTarget = _el$12);
  return _el$12;
})();

const template8 = (() => {
  const _el$13 = _$getNextElement(_tmpl$3);

  (e => console.log(e))(_el$13);

  return _el$13;
})();

const template9 = (() => {
  const _el$14 = _$getNextElement(_tmpl$3);

  const _ref$3 = refFactory();

  typeof _ref$3 === "function" && _ref$3(_el$14);
  return _el$14;
})();
