// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "slug-converter" is now active!');

	let slugifyCommand = vscode.commands.registerTextEditorCommand('slug-converter.Slugify', (editor, edit) => {
		let selectedText = editor.document.getText(editor.selection);

		let slug = selectedText.replaceAll(/[^a-zA-Z0-9]/g, "-").toLowerCase();

		edit.replace(editor.selection, slug);
	});

	context.subscriptions.push(slugifyCommand);
}

// this method is called when your extension is deactivated
export function deactivate() {}
