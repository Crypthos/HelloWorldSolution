var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField, PropertyPaneCheckbox, PropertyPaneDropdown, PropertyPaneToggle } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';
import MockHttpClient from './MockHttpClient';
import { SPHttpClient } from '@microsoft/sp-http';
var HelloWorldWebPart = /** @class */ (function (_super) {
    __extends(HelloWorldWebPart, _super);
    function HelloWorldWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorldWebPart.prototype._getListData = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists?$filter=Hidden eq false", SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    HelloWorldWebPart.prototype._getMockListData = function () {
        return MockHttpClient.get()
            .then(function (data) {
            var listData = { value: data };
            return listData;
        });
    };
    HelloWorldWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n  <div class=\"" + styles.helloWorld + "\">\n    <div class=\"" + styles.container + "\">\n      <div class=\"" + styles.row + "\">\n        <div class=\"" + styles.column + "\">\n          <span class=\"" + styles.title + "\">Welcome to SharePoint!</span>\n          <p class=\"" + styles.subTitle + "\">Customize SharePoint experiences using web parts.</p>\n          <p class=\"" + styles.description + "\">" + escape(this.properties.description) + "</p>\n          <p class=\"" + styles.description + "\">" + escape(this.properties.test) + "</p>\n          <p class=\"" + styles.description + "\">Loading from " + escape(this.context.pageContext.web.title) + "</p>\n          <a href=\"https://aka.ms/spfx\" class=\"" + styles.button + "\">\n            <span class=\"" + styles.label + "\">Learn more</span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>";
        /*
        // Hello World part 1
            this.domElement.innerHTML = `
              <div class="${ styles.helloWorld }">
                <div class="${ styles.container }">
                  <div class="${ styles.row }">
                    <div class="${ styles.column }">
                      <span class="${ styles.title }">Welcome to SharePoint!</span>
                      <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
                      <p class="${ styles.description }">${escape(this.properties.description)}</p>
                      <p class="${ styles.description }">${escape(this.properties.test)}</p>  <!-- test line -->
                      <a href="https://aka.ms/spfx" class="${ styles.button }">
                        <span class="${ styles.label }">Learn more</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>`;
        */
    };
    Object.defineProperty(HelloWorldWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                }),
                                PropertyPaneTextField('test', {
                                    label: 'Multi-line Text Field',
                                    multiline: true
                                }),
                                PropertyPaneCheckbox('test1', {
                                    text: 'Checkbox'
                                }),
                                PropertyPaneDropdown('test2', {
                                    label: 'Dropdown',
                                    options: [
                                        { key: '1', text: 'One' },
                                        { key: '2', text: 'Two' },
                                        { key: '3', text: 'Three' },
                                        { key: '4', text: 'Four' },
                                    ]
                                }),
                                PropertyPaneToggle('test3', {
                                    label: 'Toggle',
                                    onText: 'On',
                                    offText: 'Off'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HelloWorldWebPart;
}(BaseClientSideWebPart));
export default HelloWorldWebPart;
//# sourceMappingURL=HelloWorldWebPart.js.map