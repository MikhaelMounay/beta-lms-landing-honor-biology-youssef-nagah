// Change Download button according to platform
const dlBtnWin64 = document.getElementById("dl-btn-win64");
const dlBtnMacOSx64 = document.getElementById("dl-btn-macos-x64");
const dlBtnMacOSArm64 = document.getElementById("dl-btn-macos-arm64");
const dlBtnUnknown = document.getElementById("dl-btn-unknown");

const userAgentLowerString = navigator.userAgent.toLowerCase();

if (userAgentLowerString.includes("windows") || userAgentLowerString.includes("win64")) {
    dlBtnWin64?.classList.add("block");
    dlBtnWin64?.classList.remove("hidden");
} else if (userAgentLowerString.includes("macintosh") || userAgentLowerString.includes("mac")) {
    (async () => {
        // @ts-ignore
        const arch = await navigator.userAgentData?.getHighEntropyValues(["architecture"]);
        if (arch) {
            if (arch.architecture.includes("arm") || arch.architecture.includes("aarch")) {
                dlBtnMacOSArm64?.classList.add("block");
                dlBtnMacOSArm64?.classList.remove("hidden");
            } else {
                dlBtnMacOSx64?.classList.add("block");
                dlBtnMacOSx64?.classList.remove("hidden");
            }
        } else {
            if (userAgentLowerString.includes("arm64") || userAgentLowerString.includes("aarch64")) {
                dlBtnMacOSArm64?.classList.add("block");
                dlBtnMacOSArm64?.classList.remove("hidden");
            } else {
                dlBtnMacOSx64?.classList.add("block");
                dlBtnMacOSx64?.classList.remove("hidden");
            }
        }
    })();
} else {
    dlBtnUnknown?.classList.add("block");
    dlBtnUnknown?.classList.remove("hidden");
}
