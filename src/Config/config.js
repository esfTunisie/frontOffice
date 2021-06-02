let apiURL = ''
if (!window.location.hostname.includes("localhost")) {
    apiURL = 'http://myfpm.default.svc.cluster.local:9000'
}

export {apiURL}