define(
    ['jquery', 'handlebars'],
    function($, Handlebars) {
        
        //Return the module value
        return function (id, data) {
            /**
             * 优点
             * 解决了以前只能在js中通过字符串连接的方式生成动态dom的确定
             * 可以在模板中使用循环，判断，...逻辑操作
             * 
             * 使用方法
             * 1,定义模板
             * <script type='text/x-handlebars-template' id>
             *      模板内容
             *      {{根据传递的数据输出数据的值}}
             *      在模板对于if判断的使用不合理
             * </script>
             * */
            var tpl = $(id).html()  //2,获取模板内容
            var template = Handlebars.compile(tpl);  //3,传递模板，生成编译方法
            var html =template(data); //4,传递数据，返回编译后的内容
            return html
        };
    }
    /**
     * 模板编译
     * {{xx}}编译的内容是字符串
     * {{{xx}}}  编译的是html内容
     * 
     * 将context转义到某个数据的作用域下
     * {{#with author}}
     * <h2>By {{firstName}} {{lastName}}</h2>
     * {{#with}}
     * ===
     * {{#author}}
     * <h2>By {{firstName}} {{lastName}}</h2>
     * {{/author}}
     * 
     * 注释写法
     * {{! handlebars comments }}
     * 
     * 循环
     * {{#each data}}
     * 
     * {{/each}}
     * 
     * 
     * 判断
     * {{#if 参数返回false，undefined, null, "", []}}  如果为true
     * {{/if}}
     * 
     * 
     * {{#if 参数返回false，undefined, null, "", []}}
     *      内容
     * {{else}}
     *      内容
     * {{/if}}
     * 
     * 
     * {{#unless 参数返回false，undefined, null, "", []}}   如果过为false
     *      内容
     * {{else}}
     *      内容
     * {{/unless}}
     * 
     * 
     * 模板的定义
     *  <script type='text/x-handlebars-template' id>
    *      模板内容
     *      {{根据传递的数据输出数据的值}}
     *      在模板对于if判断的使用不合理
     * </script>
     * 
     * 模板的编译
     * var tpl = $(id).html()  //2,获取模板内容
     * var template = Handlebars.compile(tpl);  //3,传递模板，生成编译方法
     * var html =template(data); //4,传递数据，返回编译后的内容
     * 
     * 模板的使用 
     * template()后返回的html内容
     * 
     * 优点：
     * 解决了以往拼接字符串dom的痛点
     * 
     * 缺点
     * if条件的限制
     */
);