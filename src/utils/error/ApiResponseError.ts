export class ApiResponseError extends Error {
   response: Response;
   data: any;

   constructor(message: string, response: Response, data: any) {
      super(message);
      this.name = "ApiResponseError";
      this.response = response;
      this.data = data;
   }
}
