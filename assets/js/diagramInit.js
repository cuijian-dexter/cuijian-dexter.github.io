/**
 * Created by bj0204 on 2018/10/26.
 */
/**
 * 流程图
 * theme为hand的时候手绘图，
 * theme为simple的时候普通图，
 **/
function sequenceDiagram() {
    $(".language-sequence").sequenceDiagram({
        theme: 'hand'
    });
    $(".language-seq").sequenceDiagram({
        theme: 'hand'
    });
}

function formula() {
    //公式的问题
    $("script[type='math/tex']").replaceWith(function () {
        var tex = $(this).text();
        return katex.renderToString(tex, {displayMode: false});
    });
    $("script[type='math/tex; mode=display']").replaceWith(function () {
        var tex = $(this).html();
        return katex.renderToString(tex.replace(/%.*/g, ''), {displayMode: true});
    });
}


function flowDiagram() {
    //序列图
    var obj = {
        'x': 0,
        'y': 0,
        'line-width': 3,
        'line-length': 50,
        'text-margin': 10,
        'font-size': 14,
        'font-color': 'black',
        'line-color': 'black',
        'element-color': 'black',
        'fill': 'white',
        'yes-text': 'yes',
        'no-text': 'no',
        'arrow-end': 'block',
        'scale': 1,
        // style symbol types
        'symbols': {
            'start': {
                // 'font-color': 'red',
                'element-color': 'blue',
                // 'fill': 'yellow'
            },
            'end': {
                'class': 'end-element',
                'element-color': 'blue',
            }
        },
        // even flowstate support ;-)
        'flowstate': {
            // 'past' : { 'fill' : '#CCCCCC', 'font-size' : 12},
            // 'current' : {'fill' : 'yellow', 'font-color' : 'red', 'font-weight' : 'bold'},
            // 'future' : { 'fill' : '#FFFF99'},
            'request': {'fill': 'blue'}//,
            // 'invalid': {'fill' : '#444444'},
            // 'approved' : { 'fill' : '#58C4A3', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
            // 'rejected' : { 'fill' : '#C45879', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
        }
    };
    for (var i = 0; i < $('code.language-flow').length; i++) {
        var container = $('code.language-flow')[i];
        var chart;
        var code = container.innerText;
        chart = flowchart.parse(code);
        $($('code.language-flow')[i]).empty();
        chart.drawSVG(container, obj);
    }
}
sequenceDiagram();
flowDiagram();
formula();

/**
 * 甘特图暂不支持
 **/