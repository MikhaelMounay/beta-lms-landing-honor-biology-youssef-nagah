## 0.8.6-alpha (2024-09-28)

### Features
- **offline-availability**: enabled downloading encrypted lecture videos to disk and opening them through the app


## 0.8.5-alpha (2024-09-19)

### Bug Fixes
- **purchase-system**: restricted live session access to specified purchase package only
- **ui-ux**: fixed sidebar UI design overflowing vertically

### Features
- **auto-updater**: store lastUsedAppVersion to db on every refreshData call (almost every app restart)
- **beta-lms-pdf-viewer**: allowed opening multiple windows of `beta-lms-pdf-viewer`


## 0.8.4-alpha (2024-09-15)

### Bug Fixes
- **auth-system**: removed 'I' (uppercase i) and 'l' (lowercase L) from generated verification codes to avoid confusion due to sans-serif fonts
- **purchase-system**: removed 'I' (uppercase i) and 'l' (lowercase L) from generated purchase codes to avoid confusion due to sans-serif fonts

### Features
- **live-streaming**: added Live Sessions module & integrated Zoom web client with it
- **content-protection**: disabled copying to clipboard when using either live sessions or beta-lms-pdf-viewer


## 0.8.3-alpha (2024-08-31)

### Bug Fixes
- **purchase-system**: purchase code credit should strictly match purchase package price


## 0.8.2-alpha (2024-08-27)

- Changed **instance** name just before the alpha testable release to `Honor Biology | Youssef Nagah`


## 0.8.1-alpha (2024-07-31)

### Bug Fixes
- **auth-system**: disable navigating to `/login/*` if already logged in

### Features
- **auth-system**: switched to email/pass auth & mark phone auth as deprecated


## 0.8.0-alpha (2024-07-30)

> Starting point of the project

### Features

- **auth-system**: set basic phone/pass auth up & limited accounts to one device by storing hardware UUID
- **online-streaming**: set Video.js with YouTube videos up
- **beta-lms-pdf-viewer**: integrated the dedicated microservice-like pdf viewer
- **purchase-system**: setup basic logic for purchase packages & purchase codes
- **content-protection**: disabled opening on VMs or while VMs are working & enabled Electron's webContents contentProtection
- **auto-updater**: configured electron-updater with private GitHub releases