export abstract class BaseService {
  private readonly serviceName: string;
  protected readonly API_URL: string;

  protected constructor(serviceName: string, API_URL: string) {
    this.serviceName = serviceName;
    this.API_URL = API_URL;
  }

  log(msg: string, type: "info" | "warning" | "error" | "success" = "info") {
    console.log("[" + type.toUpperCase() +  " | " + this.serviceName +  "]: > " + msg);
  }
}
