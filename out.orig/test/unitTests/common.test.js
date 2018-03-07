"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const common_1 = require("../../src/common");
const chai_1 = require("chai");
suite("Common", () => {
    suiteSetup(() => chai_1.should());
    suite("buildPromiseChain", () => {
        test("produce a sequence of promises", () => {
            let array = [];
            let items = [1, 2, 3, 4, 5];
            let promise = common_1.buildPromiseChain(items, n => new Promise((resolve, reject) => {
                array.push(n);
                resolve();
            }));
            return promise.then(() => {
                array.should.deep.equal([1, 2, 3, 4, 5]);
            });
        });
    });
    suite("safeLength", () => {
        test("return 0 for empty array", () => {
            let array = [];
            let result = common_1.safeLength(array);
            result.should.equal(0);
        });
        test("returns 5 for array of 5 elements", () => {
            let array = [1, 2, 3, 4, 5];
            let result = common_1.safeLength(array);
            result.should.equal(5);
        });
        test("returns 0 for undefined", () => {
            let array = undefined;
            let result = common_1.safeLength(array);
            result.should.equal(0);
        });
    });
    suite("sum", () => {
        test("produce total from numbers", () => {
            let array = [1, 2, 3, 4, 5];
            let result = common_1.sum(array, i => i);
            result.should.equal(15);
        });
        test("produce total from lengths of arrays", () => {
            let array = [[1, 2], [3], [], [4, 5, 6]];
            let result = common_1.sum(array, i => i.length);
            result.should.equal(6);
        });
        test("produce total of true values from array of booleans", () => {
            let array = [true, false, false, true, true, true, false, true];
            let result = common_1.sum(array, b => b ? 1 : 0);
            result.should.equal(5);
        });
    });
    suite("isSubfolderOf", () => {
        test("same paths", () => {
            let subfolder = ["C:", "temp", "VS", "dotnetProject"].join(path.sep);
            let folder = ["C:", "temp", "VS", "dotnetProject"].join(path.sep);
            common_1.isSubfolderOf(subfolder, folder).should.be.true;
        });
        test("correct subfolder", () => {
            let subfolder = ["C:", "temp", "VS"].join(path.sep);
            let folder = ["C:", "temp", "VS", "dotnetProject"].join(path.sep);
            common_1.isSubfolderOf(subfolder, folder).should.be.true;
        });
        test("longer subfolder", () => {
            let subfolder = ["C:", "temp", "VS", "a", "b", "c"].join(path.sep);
            let folder = ["C:", "temp", "VS"].join(path.sep);
            common_1.isSubfolderOf(subfolder, folder).should.be.false;
        });
        test("Different drive", () => {
            let subfolder = ["C:", "temp", "VS"].join(path.sep);
            let folder = ["E:", "temp", "VS"].join(path.sep);
            common_1.isSubfolderOf(subfolder, folder).should.be.false;
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi90ZXN0L3VuaXRUZXN0cy9jb21tb24udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztnR0FHZ0c7O0FBRWhHLDZCQUE2QjtBQUU3Qiw2Q0FBcUY7QUFFckYsK0JBQThCO0FBRTlCLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ2pCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFNLEVBQUUsQ0FBQyxDQUFDO0lBRTNCLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7UUFDNUIsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsRUFBRTtZQUN4QyxJQUFJLEtBQUssR0FBYSxFQUFFLENBQUM7WUFDekIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFNUIsSUFBSSxPQUFPLEdBQUcsMEJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3hFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRUosTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNyQixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsWUFBWSxFQUFFLEdB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