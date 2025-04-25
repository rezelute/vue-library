export {};

declare global {
   interface EmitError {
      type: "unexpected" | unknown;
      summary: string;
      detail: string;
      error: any;
   }

   interface EmitSuccess {
      summary: string;
      detail: string;
   }
}
