import { defineStore as o } from "pinia";
import { ref as n } from "vue";
const s = o("userStore", () => {
  const e = n(!1);
  function t(r) {
    e.value = r;
  }
  return {
    isSignedIn: e,
    updateAuth: t
  };
}), i = { useUserStore: s };
export {
  i as default,
  s as useUserStore
};
