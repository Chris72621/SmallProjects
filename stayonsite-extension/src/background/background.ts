import { cleanTabs } from "./tabManager.js";
import { getActivate, getShowSite, getCurrentUrl } from "../utils/storage.js";

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action === "cleanTabs") {
    cleanTabs().then(() => sendResponse({ status: "done" }));
    return true;
  }

  if (message.action === "activateFiltering") {
    Promise.all([getActivate(), getShowSite(), getCurrentUrl()])
      .then(([isActive, showSite, rawUrl]) => {
        if (!isActive || !showSite) {
          sendResponse({ status: "inactive" });
          return;
        }

        if (!rawUrl) {
          sendResponse({ status: "no-url" });
          return;
        }

        // ensure trailing slash for prefix matching
        const targetUrl = rawUrl.endsWith("/") ? rawUrl : rawUrl + "/";

        chrome.tabs.query({}, (tabs) => {
          for (const tab of tabs) {
            if (tab.url && !tab.url.startsWith(targetUrl) && tab.id != null) {
              chrome.tabs.remove(tab.id);
            }
          }
          sendResponse({ status: "done" });
        });
      });

    return true;
  }
});

// periodic enforcement
setInterval(async () => {
  const [isActive, showSite] = await Promise.all([
    getActivate(),
    getShowSite(),
  ]);

  if (!isActive) return;

  const rawUrl = await getCurrentUrl();
  if (!rawUrl) return;
  const targetUrl = rawUrl.endsWith("/") ? rawUrl : rawUrl + "/";

  chrome.tabs.query({}, (tabs) => {
    if (tabs.length === 1) return;

    // NEW: skip if none of the tabs match the target
    const hasTargetTab = tabs.some(
      (tab) => tab.url && tab.url.startsWith(targetUrl)
    );
    if (!hasTargetTab) return;

    for (const tab of tabs) {
      if (tab.url && !tab.url.startsWith(targetUrl) && tab.id != null) {
        chrome.tabs.remove(tab.id);
      }
    }
  });
}, 100);

