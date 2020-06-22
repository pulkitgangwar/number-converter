const binaryToDecimalCmd = require("./extensionCommands/binaryToDecimalCmd");
const decimalToBinaryCmd = require("./extensionCommands/decimalToBinaryCmd");
const decimalToHexaCmd = require("./extensionCommands/decimalToHexaCmd");
const hexaToDecimalCmd = require("./extensionCommands/hexaToDecimalCmd");
const decimalToOctalCmd = require("./extensionCommands/decimalToOctalCmd");
const octalToDecimalCmd = require("./extensionCommands/octalToDecimalCmd");
const binaryToHexaCmd = require("./extensionCommands/binaryToHexaCmd");
const hexaToBinaryCmd = require("./extensionCommands/hexaToBinaryCmd");
const binaryToOctalCmd = require("./extensionCommands/binaryToOctalCmd");
const octalToBinaryCmd = require("./extensionCommands/octalToBinaryCmd");
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(
    'Congratulations, your extension "digitalelectronics" is now active!'
  );

  context.subscriptions.push(binaryToDecimalCmd);
  context.subscriptions.push(decimalToBinaryCmd);
  context.subscriptions.push(decimalToHexaCmd);
  context.subscriptions.push(hexaToDecimalCmd);
  context.subscriptions.push(decimalToOctalCmd);
  context.subscriptions.push(octalToDecimalCmd);
  context.subscriptions.push(binaryToHexaCmd);
  context.subscriptions.push(hexaToBinaryCmd);
  context.subscriptions.push(binaryToOctalCmd);
  context.subscriptions.push(octalToBinaryCmd);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
