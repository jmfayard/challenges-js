(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'challenges-js'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'challenges-js'.");
    }
    root['challenges-js'] = factory(typeof this['challenges-js'] === 'undefined' ? {} : this['challenges-js'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var listOf = kotlin_kotlin.$_$.h;
  var println = kotlin_kotlin.$_$.j;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.b;
  var Unit_getInstance = kotlin_kotlin.$_$.d;
  var charSequenceGet = kotlin_kotlin.$_$.k;
  var Char = kotlin_kotlin.$_$.q;
  var equals = kotlin_kotlin.$_$.m;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c;
  var to = kotlin_kotlin.$_$.s;
  var mapOf = kotlin_kotlin.$_$.i;
  var objectMeta = kotlin_kotlin.$_$.p;
  var lastOrNull = kotlin_kotlin.$_$.g;
  var joinToString$default = kotlin_kotlin.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.f;
  var getValue = kotlin_kotlin.$_$.e;
  var getStringHashCode = kotlin_kotlin.$_$.n;
  var hashCode = kotlin_kotlin.$_$.o;
  var THROW_CCE = kotlin_kotlin.$_$.r;
  var classMeta = kotlin_kotlin.$_$.l;
  //endregion
  //region block: pre-declaration
  //endregion
  function main() {
    var cases = listOf(['(([{}][]))', '(()))']);
    {
      var tmp0_iterator = cases.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        {
          println('input=' + element + ' isValid=' + isValid(element));
        }
      }
    }
  }
  function isValid(input) {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    var stack = new Stack(input, tmp$ret$0);
    {
      var index = 0;
      var indexedObject = input;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = charSequenceGet(indexedObject, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var tmp0__anonymous__q1qw7t = tmp1;
          if (Companion_getInstance().isOpen_bmfy7c_k$(item))
            stack.addOpenParenthesis_cwhvm_k$(item);
          else {
            var tmp = new Char(item);
            var tmp_0 = stack.latest_fucgmv_k$();
            if (equals(tmp, tmp_0 == null ? null : new Char(tmp_0)))
              stack.pop_6ofvgg_k$();
            else {
              stack.invalidate_iswa3_k$(tmp0__anonymous__q1qw7t);
            }
          }
        }
      }
    }
    var tmp_1 = stack.latest_fucgmv_k$();
    if (!((tmp_1 == null ? null : new Char(tmp_1)) == null))
      stack.invalidate_iswa3_k$(input.length);
    return stack.isValid_yafoqa_k$();
  }
  function Companion() {
    Companion_instance = this;
    this.parenthesis_1 = mapOf([to(new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41))), to(new Char(_Char___init__impl__6a9atx(123)), new Char(_Char___init__impl__6a9atx(125))), to(new Char(_Char___init__impl__6a9atx(91)), new Char(_Char___init__impl__6a9atx(93)))]);
  }
  Companion.prototype.get_parenthesis_utbh7x_k$ = function () {
    return this.parenthesis_1;
  };
  Companion.prototype.isOpen_bmfy7c_k$ = function (c) {
    return this.parenthesis_1.get_keys_wop4xp_k$().contains_2ehdt1_k$(new Char(c));
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _set_errorMessage__ss46zc($this, _set____db54di) {
    $this.errorMessage_1 = _set____db54di;
  }
  function _get_errorMessage__qp94fo($this) {
    return $this.errorMessage_1;
  }
  function Stack(input, expected) {
    Companion_getInstance();
    this.input_1 = input;
    this.expected_1 = expected;
    this.errorMessage_1 = null;
  }
  Stack.prototype.get_input_it4gip_k$ = function () {
    return this.input_1;
  };
  Stack.prototype.get_expected_77p56p_k$ = function () {
    return this.expected_1;
  };
  Stack.prototype.latest_fucgmv_k$ = function () {
    var tmp = lastOrNull(this.expected_1);
    return tmp == null ? null : tmp.value_1;
  };
  Stack.prototype.format_kzec5l_k$ = function () {
    return joinToString$default(this.expected_1, null, null, null, 0, null, null, 63, null);
  };
  Stack.prototype.pop_6ofvgg_k$ = function () {
    this.expected_1.removeAt_qvpkxi_k$(get_lastIndex(this.expected_1));
  };
  Stack.prototype.invalidate_iswa3_k$ = function (index) {
    if (this.errorMessage_1 == null) {
      var tmp = this;
      var tmp_0 = new Char(charSequenceGet(this.input_1, index));
      var tmp_1 = this.latest_fucgmv_k$();
      tmp.errorMessage_1 = '\u274C invalid character=' + tmp_0 + ' at index=' + index + ' with latest=' + (tmp_1 == null ? null : new Char(tmp_1)) + ' for input=' + this.input_1;
    }
  };
  Stack.prototype.isValid_yafoqa_k$ = function () {
    var tmp;
    if (this.errorMessage_1 == null) {
      println('\u2705 valid parenthesis for input=' + this.input_1);
      tmp = true;
    } else {
      println(this.errorMessage_1);
      tmp = false;
    }
    return tmp;
  };
  Stack.prototype.addOpenParenthesis_cwhvm_k$ = function (c) {
    var tmp0_this = this;
    {
      var tmp0_plusAssign = tmp0_this.expected_1;
      var tmp1_plusAssign = getValue(Companion_getInstance().parenthesis_1, new Char(c)).value_1;
      tmp0_plusAssign.add_1j60pz_k$(new Char(tmp1_plusAssign));
    }
  };
  Stack.prototype.component1_7eebsc_k$ = function () {
    return this.input_1;
  };
  Stack.prototype.component2_7eebsb_k$ = function () {
    return this.expected_1;
  };
  Stack.prototype.copy_ps7s36_k$ = function (input, expected) {
    return new Stack(input, expected);
  };
  Stack.prototype.copy$default_qn3cnv_k$ = function (input, expected, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      input = this.input_1;
    if (!(($mask0 & 2) === 0))
      expected = this.expected_1;
    return this.copy_ps7s36_k$(input, expected);
  };
  Stack.prototype.toString = function () {
    return 'Stack(input=' + this.input_1 + ', expected=' + this.expected_1 + ')';
  };
  Stack.prototype.hashCode = function () {
    var result = getStringHashCode(this.input_1);
    result = imul(result, 31) + hashCode(this.expected_1) | 0;
    return result;
  };
  Stack.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Stack))
      return false;
    var tmp0_other_with_cast = other instanceof Stack ? other : THROW_CCE();
    if (!(this.input_1 === tmp0_other_with_cast.input_1))
      return false;
    if (!equals(this.expected_1, tmp0_other_with_cast.expected_1))
      return false;
    return true;
  };
  Stack.$metadata$ = classMeta('Stack');
  main();
  return _;
}));

//# sourceMappingURL=challenges-js.js.map