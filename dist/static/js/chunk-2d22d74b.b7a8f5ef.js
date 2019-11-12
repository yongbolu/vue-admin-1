(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d74b"],{f825:function(n,e,r){"use strict";r.r(e),e["default"]="## table props\r\n\r\n| 属性                  | 说明                                                                                                                | 类型     | 默认值       |\r\n| --------------------- | ------------------------------------------------------------------------------------------------------------------- | -------- | ------------ |\r\n| tableData             | 显示的结构化数据，其中，字段 cellClassName 用于设置任意单元格的样式名称，因此数据不能使用该字段，详见示例特定样式。 | Array    | []           |\r\n| columns               | 表格列的配置描述，具体项见后文                                                                                      | Array    | []           |\r\n| stripe                | 是否显示间隔斑马纹                                                                                                  | Boolean  | false        |\r\n| border                | 是否显示纵向边框                                                                                                    | Boolean  | false        |\r\n| show-header           | 是否显示表头                                                                                                        | Boolean  | true         |\r\n| width                 | 表格宽度，单位 px Number                                                                                            | String   | 自动         |\r\n| height                | 表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头 Number                                                  | String   | -            |\r\n| max-height            | 表格最大高度，单位 px，设置后，如果表格内容大于此值，会固定表头 Number                                              | String   | -            |\r\n| loading               | 表格是否加载中                                                                                                      | Boolean  | false        |\r\n| disabled-hover        | 禁用鼠标悬停时的高亮                                                                                                | Boolean  | false        |\r\n| highlight-row         | 是否支持高亮选中的行，即单选                                                                                        | Boolean  | false        |\r\n| row-class-name        | 行的 className 的回调方法，传入参数：row：当前行数据 index：当前行的索引                                            | Function | -            |\r\n| size                  | 表格尺寸，可选值为 large、small、default 或者不填                                                                   | String   | -            |\r\n| no-data-text          | 数据为空时显示的提示内容                                                                                            | String   | 暂无数据     |\r\n| no-filtered-data-text | 筛选数据为空时显示的提示内容                                                                                        | String   | 暂无筛选结果 |\r\n| draggable             | 是否开启拖拽调整行顺序，需配合 @on-drag-drop 事件使用                                                               | Boolean  | false        |\r\n| tooltip-theme         | 列使用 tooltip 时，配置它的主题，可选值为 dark 或 light                                                             | String   | dark         |\r\n| row-key               | 是否强制使用内置的 row-key，开启后可能会影响性能                                                                    | Boolean  | false        |\r\n\r\n## table events\r\n\r\n| 事件名               | 说明                                                          | 返回值                                                                     |\r\n| -------------------- | ------------------------------------------------------------- | -------------------------------------------------------------------------- |\r\n| on-current-change    | 开启 highlight-row 后有效，当表格的当前行发生变化的时候会触发 | currentRow：当前高亮行的数据 oldCurrentRow：上一次高亮的数据               |\r\n| on-select            | 在多选模式下有效，选中某一项时触发                            | selection：已选项数据 row：刚选择的项数据                                  |\r\n| on-select-cancel     | 在多选模式下有效，取消选中某一项时触发                        | selection：已选项数据 row：取消选择的项数据                                |\r\n| on-select-all        | 在多选模式下有效，点击全选时触发                              | selection：已选项数据                                                      |\r\n| on-select-all-cancel | 在多选模式下有效，点击取消全选时触发                          | selection：已选项数据                                                      |\r\n| on-selection-change  | 在多选模式下有效，只要选中项发生变化时就会触发                | selection：已选项数据                                                      |\r\n| on-sort-change       | 排序时有效，当点击排序时触发                                  | column：当前列数据 key：排序依据的指标 order：排序的顺序，值为 asc 或 desc |\r\n| on-filter-change     | 筛选时有效，筛选条件发生变化时触发                            | 当前列数据                                                                 |\r\n| on-row-click         | 单击某一行时触发                                              | 当前行的数据 index                                                         |\r\n| on-row-dblclick      | 双击某一行时触发                                              | 当前行的数据 index                                                         |\r\n| on-expand            | 展开或收起某一行时触发                                        | row：当前行的数据 status：当前的状态                                       |\r\n| on-drag-drop         | 拖拽排序松开时触发，返回置换的两行数据索引                    | index1, index2                                                             |\r\n\r\n## table column props\r\n\r\n| 属性           | 说明                                                                                                                                               | 类型     | 默认值         |\r\n| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------- |\r\n| type           | 列类型，可选值为 index、selection、expand、html                                                                                                    | String   | -              |\r\n| title          | 列头显示文字                                                                                                                                       | String   | #              |\r\n| key            | 对应列内容的字段名                                                                                                                                 | String   | -              |\r\n| width          | 列宽                                                                                                                                               | Number   | -              |\r\n| minWidth       | 最小列宽                                                                                                                                           | Number   | -              |\r\n| maxWidth       | 最大列宽                                                                                                                                           | Number   | -              |\r\n| align          | 对齐方式，可选值为 left 左对齐、right 右对齐和 center 居中对齐                                                                                     | String   | left           |\r\n| className      | 列的样式名称                                                                                                                                       | String   | -              |\r\n| fixed          | 列是否固定在左侧或者右侧，可选值为 left 左侧和 right 右侧                                                                                          | String   | -              |\r\n| ellipsis       | 开启后，文本将不换行，超出部分显示为省略号                                                                                                         | Boolean  | false          |\r\n| tooltip        | 开启后，文本将不换行，超出部分显示为省略号，并用 Tooltip 组件显示完整内容                                                                          | Boolean  | false          |\r\n| render         | 自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引 | Function | -              |\r\n| renderHeader   | 自定义列头显示内容，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 column 和 index，分别为当前列数据和当前列索引。          | Function | -              |\r\n| indexMethod    | type 为 index 时可用，自定义序号 |Function，参数 row 为当前行内容                                                                                   | -        |\r\n| sortable       | 对应列是否可以排序，如果设置为 custom，则代表用户希望远程排序，需要监听 Table 的 on-sort-change 事件                                               | Boolean  | 'custom' false |\r\n| sortMethod     | 自定义排序使用的方法，接收三个参数 a 、 b 和 type，当设置 sortable: true 时有效。type 值为 asc 和 desc                                             | Function | -              |\r\n| sortType       | 设置初始化排序。值为 asc 和 desc                                                                                                                   | String   | -              |\r\n| filters        | 过滤数据的选项，格式为数组，数组中每项包含 label 和 value 属性，使用过滤，必须同时配置 filterMethod                                                | Array    | -              |\r\n| filterMethod   | 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示                                                         | Function | -              |\r\n| filterMultiple | 数据过滤的选项是否多选                                                                                                                             | Boolean  | true           |\r\n| filteredValue  | 在初始化时使用过滤，数组，值为需要过滤的 value 集合                                                                                                | Array    | -              |\r\n| filterRemote   | 使用远程过滤                                                                                                                                       | Function | -              |\r\n| children       | 表头分组                                                                                                                                           | Array    | -              |\r\n"}}]);
//# sourceMappingURL=chunk-2d22d74b.b7a8f5ef.js.map