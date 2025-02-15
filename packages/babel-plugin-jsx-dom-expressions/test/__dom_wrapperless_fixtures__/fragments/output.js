import { template as _$template } from "r-dom";
import { createComponent as _$createComponent } from "r-dom";
import { setAttribute as _$setAttribute } from "r-dom";

const _tmpl$ = /*#__PURE__*/ _$template(`<div>First</div>`, 2),
  _tmpl$2 = /*#__PURE__*/ _$template(`<div>Last</div>`, 2),
  _tmpl$3 = /*#__PURE__*/ _$template(`<div></div>`, 2);

const multiStatic = [_tmpl$(), _tmpl$2()];
const multiExpression = [_tmpl$(), inserted, _tmpl$2(), "After"];
const multiDynamic = [
  (() => {
    const _el$5 = _tmpl$();

    _$setAttribute(_el$5, "id", state.first);

    return _el$5;
  })(),
  () => state.inserted,
  (() => {
    const _el$6 = _tmpl$2();

    _$setAttribute(_el$6, "id", state.last);

    return _el$6;
  })(),
  "After"
];
const singleExpression = inserted;
const singleDynamic = inserted;
const firstStatic = [inserted, _tmpl$3()];
const firstDynamic = [inserted, _tmpl$3()];
const firstComponent = [_$createComponent(Component, {}), _tmpl$3()];
const lastStatic = [_tmpl$3(), inserted];
const lastDynamic = [_tmpl$3(), inserted];
const lastComponent = [_tmpl$3(), _$createComponent(Component, {})];
