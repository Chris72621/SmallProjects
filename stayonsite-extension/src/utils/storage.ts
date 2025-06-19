const CURRENT_URL_KEY = "currentTargetUrl";

export const saveCurrentUrl = async (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ [CURRENT_URL_KEY]: url }, () => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve();
      }
    });
  });
};

export const getCurrentUrl = async (): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([CURRENT_URL_KEY], (result) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(result[CURRENT_URL_KEY] || null);
      }
    });
  });
};

export const clearCurrentUrl = async (): Promise<void> => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.remove([CURRENT_URL_KEY], () => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve();
      }
    });
  });
};

export const setActivate = (value: boolean): void => {
  chrome.storage.local.set({ activate: value });
};

export const getActivate = (): Promise<boolean> => {
  return new Promise((resolve) => {
    chrome.storage.local.get(["activate"], (result) => {
      resolve(result.activate ?? false);
    });
  });
};
