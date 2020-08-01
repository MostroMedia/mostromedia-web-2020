
/**
 * @desc    It adds a key for each resolution 
 *          From xsmall until xlarge
 */
const getResolutionKey = () => {
    let resKey;
    let curResolution = window.innerWidth;

    let resolutionMap = {
        "xsmall": {
            "min": 0,
            "max": 760
        },
        "small": {
         	"min": 481,
         	"max": 959
        },
        "medium": {
            "min": 761,
            "max": 1024
        },
        "large": {
            "min": 1025,
            "max": 1280
        },
        "xlarge": {
            "min": 1281,
            "max": 9999
        }
    }

    if (curResolution < 500) {
        curResolution = 320;
    }

    for (let resolution in resolutionMap) {
        if (resolutionMap[resolution].min <= curResolution && resolutionMap[resolution].max >= curResolution) {
            resKey = resolution;
        }
    }

    return resKey;
}


/**
 * @desc    It define the events when the resolution changes
 */
const windowResize = () => {
    let currentResolution = getResolutionKey();

    window.onresize = function () {
        let resKey = getResolutionKey();

        if (currentResolution != resKey) {
            currentResolution = resKey;

            triggerEvent("resolutionChanged", resKey);
        }
        triggerEvent("onResize", resKey);
    }
}


/**
 * @desc    It triggers a new customEvent with a data as a value.
 *          This event could be catched later by using a addEventListener(eventName)
 * @param   {String} eventName 
 * @param   {any} data 
 * @param   {HTMLElement} element 
 */
const triggerEvent = (eventName, data, element = document ) => {
    const event = new CustomEvent(eventName, { detail: data });
    element.dispatchEvent(event);
}

module.exports = {

    windowResize,
    triggerEvent,
    getResolutionKey

}