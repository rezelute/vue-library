import "vue";
const s = Symbol("API_DOMAIN");
function o(e) {
  const { redirect: r, ...a } = e;
  if (!r) return null;
  const t = new URLSearchParams(a).toString();
  return t ? `${r}?${t}` : r;
}
export {
  s as A,
  o as g
};
