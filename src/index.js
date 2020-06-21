const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(
    'Congratulations, your extension "number-converter" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "number-converter.helloWorld",
    function () {
      vscode.window.showInformationMessage(
        "Hello World from number-converter!"
      );
    }
  );

  context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
