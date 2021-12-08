import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@chiper/navbar",
  app: () => System.import("@chiper/navbar"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
