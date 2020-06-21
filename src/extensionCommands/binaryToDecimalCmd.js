const vscode = require("vscode");

// requiring helpers
const binaryToDecimal = require("../helpers/binaryToDecimal");

let binaryToDecimalCmd = vscode.commands.registerCommand(
  "number-converter.convertBinaryToDecimal",
  function () {
    // The code you place here will be executed every time your command is executed

    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage("editor not found!");
      return;
    }

    const number = editor.document.getText(editor.selection);

    if (!number) {
      vscode.window.showErrorMessage("Please select a number");
      return;
    }

    //   vscode.window.showInformationMessage(number);

    // Display a message box to the user
    try {
      const answer = binaryToDecimal(number);
      editor.edit((edit) => {
        edit.replace(editor.selection, answer.toString());
      });
      vscode.window.showInformationMessage(
        `converted the value to ${answer.toString()}`
      );
    } catch (err) {
      vscode.window.showErrorMessage(err.message);
    }
  }
);

module.exports = binaryToDecimalCmd;
