define( [ 'visualizations/nvd3/common/config' ], function( nvd3_config ) {
    return $.extend( true, {}, nvd3_config, {
        title       : 'Expanded',
        zoomable    : true,
        description : 'Renders an expanded stacked area using NVD3 hosted at http://www.nvd3.org.',
        keywords    : 'nvd3 default',
        groups      : {
            x : {
                label       : 'Values for x-axis',
                type        : 'data_column',
                is_label    : true,
                is_auto     : true
            },
            y : {
                label       : 'Values for y-axis',
                type        : 'data_column',
                is_numeric  : true
            }
        }
    });
});