import { defineComponent as r, onMounted as l, createElementBlock as i, openBlock as u, createElementVNode as o, toDisplayString as s } from "vue";
import { useRouter as d } from "vue-router";
const t = 5e3, f = /* @__PURE__ */ r({
  __name: "GoodbyePage",
  setup(p) {
    const n = d();
    return l(() => {
      setTimeout(() => {
        n.push("/");
      }, t);
    }), (a, e) => (u(), i("div", null, [
      e[0] || (e[0] = o("h1", null, "Goodbye", -1)),
      e[1] || (e[1] = o("p", null, "Your account has been deleted, thank you for visiting!", -1)),
      o("p", null, "You will be redirected to the landing page in " + s(t) + " seconds automatically.")
    ]));
  }
});
export {
  f as _
};
