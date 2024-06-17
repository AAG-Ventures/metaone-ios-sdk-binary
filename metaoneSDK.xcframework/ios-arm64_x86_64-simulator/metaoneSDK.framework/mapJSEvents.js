function setupWKWebViewJavascriptBridge(callback) {
    if (window.WKWebViewJavascriptBridge) { return callback(WKWebViewJavascriptBridge); }
    if (window.WKWVJBCallbacks) { return window.WKWVJBCallbacks.push(callback); }
    window.WKWVJBCallbacks = [callback];
    window.webkit.messageHandlers.iOS_Native_InjectJavascript.postMessage(null)
}

window.M1SDKEvents = {};

setupWKWebViewJavascriptBridge(function(bridge) {
    
    window.M1SDKEvents.getCurrentLanguage = () => {
        return new Promise((resolve, reject) => {
            bridge.callHandler('getCurrentLanguage',
                               null,
                               function(results, error){
                resolve(results);
            }
                               );
        })
    };
    
    window.M1SDKEvents.getSafeAreaInsets = () => {
        return new Promise((resolve, reject) => {
            bridge.callHandler('getSafeAreaInsets',
                               null,
                               function(results, error){
                resolve(results);
            }
                               );
        })
    };
    
    window.M1SDKEvents.exit = () => {
        return new Promise((resolve, reject) => {
            bridge.callHandler('exit',
                               null,
                               function(results, error){
                resolve(results);
            }
                               );
        })
    }
    
    window.M1SDKEvents.closePopup = () => {
        return new Promise((resolve, reject) => {
            bridge.callHandler('closePopup',
                               null,
                               function(results, error){
                resolve(results);
            }
                               );
        })
    }
    
    window.M1SDKEvents.setFailedSession = () => {
        return new Promise((resolve, reject) => {
            bridge.callHandler('m1SDKFailedSession',
                               null,
                               function(results, error){
                resolve(results);
            }
                               );
        })
    }
    
    window.M1SDKEvents.openExternalLink = (url) => {
        return new Promise((resolve, reject) => {
            console.log("RESULT HAPPEN")
            bridge.callHandler('openExternalLink',
                               {url:url},
                               function(results, error){
                console.log("RESULTS", results);
                resolve(results);
            }
                               );
        })
    }
    
    
    window.M1SDKEvents.getConfig = () => {
        return new Promise((resolve, reject) => {
            bridge.callHandler('getConfig',
                               null,
                               function(results, error){
                resolve(results);
            }
                               );
        })
    };
    
    window.M1SDKEvents.getCurrentTheme = () => {
        return new Promise((resolve, reject) => {
            bridge.callHandler('getCurrentTheme',
                               null,
                               function(results, error){
                resolve(results);
            }
                               );
        })
    };
    
    window.M1SDKEvents.getRestoreQuestions = () => {
        return new Promise((resolve, reject) => {
            bridge.callHandler('getRestoreQuestions',
                               null,
                               function(results, error){
                resolve(results);
            }
                               );
        })
    };
    
    window.M1SDKEvents.copyToClipboard = (text) => {
        return new Promise((resolve, reject) => {
            bridge.callHandler('copyToClipboard',
                               {text:text},
                               function(results, error){
                                    resolve(results);
                                }
            );
        })
    };
    
    window.M1SDKEvents.setGlobalMessage = (message) => {
        return new Promise((resolve, reject) => {
            bridge.callHandler('setGlobalMessage',
                               {message:message},
                               function(results, error){
                                    resolve(results);
                                }
            );
        })
    };
    
    window.M1SDKEvents.createSigning = (message) => {
        return new Promise((resolve, reject) => {
            bridge.callHandler('createSigning',
                               {message:message},
                               function(results, error){
                                    resolve(results);
                                }
            );
        })
    };
    
    window.M1SDKEvents.shareText = (title, message) => {
        return new Promise((resolve, reject) => {
            bridge.callHandler('shareText',
                               {title:title, message: message},
                               function(results, error){
                                    resolve(results);
                                }
            );
        })
    };
    
    window.M1SDKEvents.initSession = (encryptionKey) => {
        return new Promise((resolve, reject) => {
            bridge.callHandler('initSession',
                               {encryptionKey:encryptionKey},
                               function(results, error){
                                    resolve(results);
                                }
            );
        })
    };
    
    window.M1SDKEvents.openBrowser = (url) => {
        return new Promise((resolve, reject) => {
            bridge.callHandler('openBrowser',
                               {url:url},
                               function(results, error){
                                    resolve(results);
                                }
            );
        })
    };
});
