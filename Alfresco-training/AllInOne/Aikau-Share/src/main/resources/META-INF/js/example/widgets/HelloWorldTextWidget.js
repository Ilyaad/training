define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "alfresco/core/Core",
        "dijit/_TemplatedMixin",
        "dojo/text!./HelloWorldTextWidget.html"
    ],
    function(declare, _Widget, Core, _Templated, template) {
        return declare([_Widget, Core, _Templated], {
            templateString: template,
            i18nRequirements: [ {i18nFile: "./HelloWorldTextWidget.properties"} ],
            cssRequirements: [{cssFile:"./HelloWorldTextWidget.css"}],
            
            buildRendering: function example_widgets_HelloWorldTextWidget__buildRendering() {
                this.helloWorldMsg = this.message('hello.world');
                this.inherited(arguments);

            }
        });
}); 