/*
 * Copyright (C) 2012-2017  Online-Go.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import * as React from "react";
import {LearningPage, DummyPage} from './LearningPage';
import {_, pgettext, interpolate} from "translate";
import {LearningHubSection} from './LearningHubSection';

export class Defend extends LearningHubSection {
    static pages():Array<typeof LearningPage> {
        return [
            Page1,
            Page2,
            Page3,
        ];
    }

    static section():string { return "defend"; }
    static title():string { return pgettext("Tutorial section name on learning how to defend", "Defend!"); }
    static subtext():string { return pgettext("Tutorial section subtext on learning how to defend", "Two eyes or death"); }
}


class Page1 extends LearningPage {
    constructor(props) {
        super(props);
    }

    text() {
        return _("There are two ways to keep your group alive");
    }
    config() {
        return {
            mode: "puzzle",
            initial_state: {
                'black': 'a2b2c2d2e2e1',
                'white': 'a3b3c3d3e3f3f2f1'
            },
            move_tree: this.makePuzzleMoveTree(
                [
                    "b1",
                    "c1"
                ],
                [
                    "a1c1",
                    "d1b1",
                ]
            )
        };
    }

}

class Page2 extends LearningPage {
    constructor(props) {
        super(props);
    }

    text() {
        return _("There is one critical move to make to keep this group alive");
    }
    config() {
        return {
            mode: "puzzle",
            initial_state: {
                black: "ddedfdcegecfdfffgfegfg",
                white: "ccdcecfchccdgdbehebfhfcgdggghgehfh"
            },
            move_tree: this.makePuzzleMoveTree(
                [
                    "e5",
                ],
                [
                    "e4e5",
                    "d5e5",
                    "f5e5",
                ]
            )
        };
    }

}

class Page3 extends LearningPage {
    constructor(props) {
        super(props);
    }

    text() {
        return _("Create two eyes to keep your group alive!");
    }
    config() {
        return {
            mode: "puzzle",
            initial_state: {
                'black': 'a2b3c3c2d3',
                'white': 'b4c4d4d2e2e3f2a4'
            },
            move_tree: this.makePuzzleMoveTree(
                [
                    "b1"
                ],
                [
                    "a3b1a1c1",
                    "a3b1b2c1",

                    "a3b1c1d1a1b2",
                    "a3b1c1d1b2a1",

                    "a3b1c1d1e1a1b2a1b1a1",
                    "a3b1c1d1e4a1b2a1b1a1",

                    "a3b1d1e1"
                ]
            )
        };
    }

}
