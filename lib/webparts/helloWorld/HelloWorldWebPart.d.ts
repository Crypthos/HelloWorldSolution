import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface IHelloWorldWebPartProps {
    description: string;
    test: string;
    test1: boolean;
    test2: string;
    test3: boolean;
}
export interface ISPLists {
    value: ISPList[];
}
export interface ISPList {
    Title: string;
    Id: string;
}
export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
    private _getListData;
    private _getMockListData;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=HelloWorldWebPart.d.ts.map