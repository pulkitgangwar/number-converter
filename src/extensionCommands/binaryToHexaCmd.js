const vscode = require("vscode");

// requiring helpers
const binaryToHexa = require("../helpers/binaryToHexa");

let binaryToHexaCmd = vscode.commands.registerCommand(
  "number-converter.convertBinaryToHexa",
  function () {
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

    try {
      const answer = binaryToHexa(number);
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

module.exports = binaryToHexaCmd;
