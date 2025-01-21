import { computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, G as useNuxtApp } from './server.mjs';
import { B as VCard, E as VImg, C as VCardTitle, D as VCardText, F as VBtn } from './VCard-CWQZhMAr.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "panier",
  __ssrInlineRender: true,
  setup(__props) {
    const { $cart } = useNuxtApp();
    const cartItems = computed(() => $cart.getCart());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-container" }, _attrs))} data-v-9ddd1fc7><h2 class="cart-title" data-v-9ddd1fc7>Mon Panier</h2>`);
      if (cartItems.value.length > 0) {
        _push(`<div class="cart-items" data-v-9ddd1fc7><!--[-->`);
        ssrRenderList(cartItems.value, (item, index) => {
          _push(ssrRenderComponent(VCard, {
            class: "cart-article",
            key: index
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(VImg, {
                  src: item.img,
                  "aspect-ratio": "1.5",
                  class: "cart-item-image"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(VCardTitle, { class: "cart-item-title" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.title)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.title), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(VCardText, { class: "cart-item-price" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(item.price)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(item.price), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(VImg, {
                    src: item.img,
                    "aspect-ratio": "1.5",
                    class: "cart-item-image"
                  }, null, 8, ["src"]),
                  createVNode(VCardTitle, { class: "cart-item-title" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.title), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(VCardText, { class: "cart-item-price" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.price), 1)
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div data-v-9ddd1fc7><p data-v-9ddd1fc7>Votre panier est vide.</p></div>`);
      }
      _push(`<div data-v-9ddd1fc7><h2 data-v-9ddd1fc7>Paiement</h2><div id="card-element" data-v-9ddd1fc7></div>`);
      _push(ssrRenderComponent(VBtn, {
        onClick: _ctx.handlePayment,
        color: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Payer`);
          } else {
            return [
              createTextVNode("Payer")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/panier.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const panier = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ddd1fc7"]]);

export { panier as default };
//# sourceMappingURL=panier-BXaEDJ0y.mjs.map
