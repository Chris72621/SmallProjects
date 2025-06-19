import { cleanTabs } from "./tabManager.js";
import { getActivate, getCurrentUrl } from "../utils/storage.js";

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action === "cleanTabs") {
    cleanTabs().then(() => sendResponse({ status: "done" }));
    return true;
  }

  if (message.action === "activateFiltering") {
    getCurrentUrl().then((targetUrl) => {
      if (!targetUrl) return sendResponse({ status: "no-url" });

      chrome.tabs.query({}, (tabs) => {
        for (const tab of tabs) {
          if (tab.url && !tab.url.startsWith(targetUrl)) {
            chrome.tabs.remove(tab.id!);
          }
        }
        sendResponse({ status: "done" });
      });
    });

    return true;
  }
});

// 🔁 Continuous check every 1 second if "Activate" is on
setInterval(async () => {
  const isActive = await getActivate();
  if (!isActive) return;

  const targetUrl = await getCurrentUrl();
  if (!targetUrl) return;

  chrome.tabs.query({}, (tabs) => {
    for (const tab of tabs) {
      if (tab.url && !tab.url.startsWith(targetUrl)) {
        chrome.tabs.remove(tab.id!);
      }
    }
  });
}, 1000);
