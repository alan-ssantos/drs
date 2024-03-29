import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
// import * as myExtension from "../../extension";

suite("Extension Test Suite", () => {
	vscode.window.showInformationMessage("Start all tests.");

	test("Extension should be present", () => {
		assert.ok(vscode.extensions.getExtension("alan-ssantos.drs"));
	});

	test("should activate", function () {
		this.timeout(1 * 60 * 1000);

		const ext = vscode.extensions.getExtension("alan-ssantos.drs");

		assert.ok(ext?.isActive);
	});

	test("should register all extension commands", () => {
		vscode.commands.getCommands(true).then((commands) => {
			const COMMANDS = [
				"drs.openFiles",
				"drs.textToUrl",
				"drs.formatOpenFiles",
				"drs.closeWithoutSave",
				"drs.generateColors",
				"drs.replaceDescription",
				"drs.addStrongTag",
				"drs.runOnOpenFiles",
			];

			const foundedCommands = commands.filter((c) => {
				return COMMANDS.indexOf(c) >= 0 || c.startsWith("extension.drs.");
			});

			assert.equal(foundedCommands.length, COMMANDS.length);
		});
	});
});

