# Daydream

A chrome extension to record your actions into a [Nightmare](https://github.com/segmentio/nightmare) or [Puppeteer](https://github.com/GoogleChrome/puppeteer) script.

## Example

![Demo](https://cldup.com/jSPoteXKJS.png)

## Installing

### Google Chrome

You can download Daydream from the Chrome Web Store [here](https://chrome.google.com/webstore/detail/daydream/oajnmbophdhdobfpalhkfgahchpcoali).

### Opera

First enable Opera to install Chrome extensions [here](https://addons.opera.com/extensions/details/download-chrome-extension-9/); then you can download Daydream from the Chrome Web Store [here](https://chrome.google.com/webstore/detail/daydream/oajnmbophdhdobfpalhkfgahchpcoali).

## Developing

1. Run `$ git clone https://github.com/segmentio/daydream.git && cd daydream && make`
2. Navigate to `chrome://extensions`
3. Ensure that 'Developer mode' is checked
4. Click `Load unpacked extension...`
5. Browse to `daydream/build` and click `Select`

## Usage

Just click the daydream icon (the outline should turn red to indicate that it is actively recording), run all the tasks you wish to automate, and then click the icon and open the popup.

## Notes

Daydream currently supports `.goto()`, `.click()`, `.type()`, `.screenshot()`, and `.refresh()`.

If you want daydream to capture typing, press <kbd>tab</kbd> after you finish typing in each `input` element. If an input box doesn't have a corresponding _submit_ button, press <kbd>tab</kbd> to first capture the text and then <kbd>shift<kbd> + <kbd>tab</kbd> to go back and then press enter, which will be captured as a separate action.

## License

MIT
