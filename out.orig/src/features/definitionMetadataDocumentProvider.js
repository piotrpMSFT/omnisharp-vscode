"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
class DefinitionMetadataDocumentProvider {
    constructor() {
        this.scheme = "omnisharp-metadata";
        this._documents = new Map();
        this._documentClosedSubscription = vscode_1.workspace.onDidCloseTextDocument(this.onTextDocumentClosed, this);
    }
    onTextDocumentClosed(document) {
        this._documents.delete(document.uri.toString());
    }
    dispose() {
        this._registration.dispose();
        this._documentClosedSubscription.dispose();
        this._documents.clear();
    }
    addMetadataResponse(metadataResponse) {
        const uri = this.createUri(metadataResponse.SourceName);
        this._documents.set(uri.toString(), metadataResponse);
        return uri;
    }
    getExistingMetadataResponseUri(sourceName) {
        return this.createUri(sourceName);
    }
    register() {
        this._registration = vscode_1.workspace.registerTextDocumentContentProvider(this.scheme, this);
    }
    provideTextDocumentContent(uri) {
        return this._documents.get(uri.toString()).Source;
    }
    createUri(sourceName) {
        return vscode_1.Uri.parse(this.scheme + "://" +
            sourceName.replace(/\\/g, "/").replace(/(.*)\/(.*)/g, "$1/[metadata] $2"));
    }
}
exports.default = DefinitionMetadataDocumentProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5pdGlvbk1ldGFkYXRhRG9jdW1lbnRQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mZWF0dXJlcy9kZWZpbml0aW9uTWV0YWRhdGFEb2N1bWVudFByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7O2dHQUdnRzs7QUFFaEcsbUNBQStGO0FBSS9GO0lBTUk7UUFMUyxXQUFNLEdBQUcsb0JBQW9CLENBQUM7UUFNbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBNEIsQ0FBQztRQUN0RCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsa0JBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekcsQ0FBQztJQUVPLG9CQUFvQixDQUFDLFFBQXNCO1FBQy9DLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU0sT0FBTztRQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLG1CQUFtQixDQUFDLGdCQUFrQztRQUN6RCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXRELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRU0sOEJBQThCLENBQUMsVUFBa0I7UUFDcEQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLENBQUMsYUFBYSxHQUFHLGtCQUFTLENBQUMsbUNBQW1DLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBRU0sMEJBQTBCLENBQUMsR0FBUTtRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3RELENBQUM7SUFFTyxTQUFTLENBQUMsVUFBa0I7UUFDaEMsTUFBTSxDQUFDLFlBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLO1lBQ2hDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Q0FDSjtBQTVDRCxxREE0Q0MifQ==