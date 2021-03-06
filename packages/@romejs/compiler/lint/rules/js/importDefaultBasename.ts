/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Path} from "@romejs/compiler";
import {AnyNode} from "@romejs/ast";
import {descriptions} from "@romejs/diagnostics";
import {createUnknownFilePath} from "@romejs/path";
import {filenameToId} from "./defaultExportSameBasename";

export default {
	name: "importDefaultBasename",
	enter(path: Path): AnyNode {
		const {node} = path;

		if (node.type === "JSImportDeclaration") {
			const {defaultSpecifier} = node;
			if (defaultSpecifier === undefined) {
				return node;
			}

			const filePath = createUnknownFilePath(node.source.value);
			const expectedName = filenameToId(filePath, false);
			const expectedNameCapital = filenameToId(filePath, true);
			if (expectedName === undefined || expectedNameCapital === undefined) {
				return node;
			}

			const localName = defaultSpecifier.local.name.name;
			if (localName !== expectedName && localName !== expectedNameCapital) {
				path.context.addNodeDiagnostic(
					node,
					descriptions.LINT.JS_IMPORT_DEFAULT_BASENAME(
						localName,
						expectedName,
						expectedNameCapital,
					),
				);
			}
		}

		return node;
	},
};
