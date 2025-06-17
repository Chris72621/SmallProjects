document.addEventListener("DOMContentLoaded", () => {
  const urlInput = document.getElementById("targetUrl");
  const saveBtn = document.getElementById("saveBtn");
  const enableToggle = document.getElementById("enableToggle");
  const currentTarget = document.getElementById("currentTarget");
  const toggleTarget = document.getElementById("toggleTarget");
  const currentTargetBox = document.getElementById("currentTargetBox");
  const infoBtn = document.getElementById("infoBtn");
  const saveStatus = document.getElementById("saveStatus");

  // Load saved values
  chrome.storage.local.get(["targetUrl", "enabled"], (data) => {
    if (data.targetUrl) {
      urlInput.value = data.targetUrl;
      currentTarget.textContent = data.targetUrl;
    }
    enableToggle.checked = data.enabled ?? false;
  });

  function isValidBaseUrl(url) {
    try {
      const parsed = new URL(url);
      return (
        (parsed.protocol === "http:" || parsed.protocol === "https:") &&
        parsed.hostname &&
        parsed.hostname.includes(".")
      );
    } catch {
      return false;
    }
  }

  // Save and show confirmation
  saveBtn.addEventListener("click", () => {
    const newUrl = urlInput.value.trim();

    if (!isValidBaseUrl(newUrl)) {
      alert("Invalid URL. Please enter a full link like https://example.com.");
      return;
    }

    chrome.storage.local.set({ targetUrl: newUrl }, () => {
      currentTarget.textContent = newUrl;

      saveStatus.style.display = "block";
      saveStatus.classList.remove("save-status");
      void saveStatus.offsetWidth; // reflow to restart animation
      saveStatus.classList.add("save-status");

      setTimeout(() => {
        saveStatus.style.display = "none";
      }, 2000);
    });
  });

  // Enable control toggle
  enableToggle.addEventListener("change", () => {
    chrome.storage.local.set({ enabled: enableToggle.checked });
  });

  // View target toggle
  toggleTarget.addEventListener("change", () => {
    currentTargetBox.style.display = toggleTarget.checked ? "block" : "none";
  });

  // Info popup
  infoBtn.addEventListener("click", () => {
    alert("This extension automatically closes all tabs except the one you specify. Save your target URL and toggle activation to keep that tab open while blocking distractions.");
  });

  // Link buttons
  document.getElementById("streamEastBtn").addEventListener("click", () => {
    const newUrl = "https://the.streameast.app";
  
    if (!isValidBaseUrl(newUrl)) {
      alert("Invalid target URL for StreamEast.");
      return;
    }
  
    chrome.storage.local.set({ targetUrl: newUrl }, () => {
      chrome.tabs.create({ url: newUrl });
  
      urlInput.value = newUrl;
      currentTarget.textContent = newUrl;
      currentTargetBox.style.display = toggleTarget.checked ? "block" : "none";
    });
  });
  
  document.getElementById("tvAppBtn").addEventListener("click", () => {
    const newUrl = "https://thetvapp.to";
  
    if (!isValidBaseUrl(newUrl)) {
      alert("Invalid target URL for TV App.");
      return;
    }
  
    chrome.storage.local.set({ targetUrl: newUrl }, () => {
      chrome.tabs.create({ url: newUrl });
  
      urlInput.value = newUrl;
      currentTarget.textContent = newUrl;
      currentTargetBox.style.display = toggleTarget.checked ? "block" : "none";
    });
  });
  
});
