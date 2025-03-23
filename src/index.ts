// import ThemeToggle from "./components/themeToggle/ThemeToggle.vue";
// import { useCounterStore } from "./stores/counter";

// export { ThemeToggle, useCounterStore };

// export { default as ThemeToggle } from "./src/components/themeToggle/ThemeToggle.vue";
// export { useCounterStore } from "./src/stores/counter";

import ThemeToggle from "./components/themeToggle/ThemeToggle.vue";
import Toaster from "./components/toaster/Toaster.vue";
// import { useCounterStore } from "./stores/counter";

export { ThemeToggle, Toaster };

export default {
   install: (app: any) => {
      app.component("ThemeToggle", ThemeToggle);
      app.component("Toaster", Toaster);
   },
};
