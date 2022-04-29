import { registerApplication, start } from "single-spa";


registerApplication({
  name: "@nsrtmContainerApp/nsrtm-header",
  app: () => System.import("@nsrtmContainerApp/nsrtm-header"),
  activeWhen: ["/"],
  customProps: { domElement: document.getElementById("header-container") },
});

registerApplication({
  name: "@nsrtmContainerApp/nsrtm-main",
  app: () => System.import("@nsrtmContainerApp/nsrtm-main"),
  activeWhen: ["/"],
  customProps: { domElement: document.getElementById("sidenav-container") },
});

registerApplication({
  name: "@nsrtmContainerApp/nsrtm-rate-payer",
  app: () => System.import("@nsrtmContainerApp/nsrtm-rate-payer"),
  activeWhen: ["/nsrtm-rate-payer-app"],
  customProps: { domElement: document.getElementById("main-container") },
});

registerApplication({
  name: "@nsrtmContainerApp/mf-nsrtm-reminder",
  app: () => System.import("@nsrtmContainerApp/mf-nsrtm-reminder"),
  activeWhen: ["/nsrtm-notificacion-app"],
  customProps: { domElement: document.getElementById("main-container") },
});
start({
  urlRerouteOnly: true,
});
