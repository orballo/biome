/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {JSNodeBase} from "@romejs/ast";
import {createBuilder} from "../utils";

export type JSRegExpStartCharacter = JSNodeBase & {
	type: "JSRegExpStartCharacter";
};

export const jsRegExpStartCharacter = createBuilder<JSRegExpStartCharacter>(
	"JSRegExpStartCharacter",
	{
		bindingKeys: {},
		visitorKeys: {},
	},
);
