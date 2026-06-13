import e from "primevue/config";
//#region src/utils/primeThemePresets.ts
function t(t, n) {
	t.use(e, { theme: {
		preset: n,
		options: { darkModeSelector: ".dark" }
	} });
}
//#endregion
export { t as setupPrimeVue };
