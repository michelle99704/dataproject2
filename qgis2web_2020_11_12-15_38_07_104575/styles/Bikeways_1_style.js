var size = 0;
var placement = 'point';
function categories_Bikeways_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Bike Lanes':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(37,52,148,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cycle Tracks':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(41,95,169,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Informal Dirt Footpath':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(47,135,186,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Major Multi-use Pathway':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(59,166,193,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Minor Multi-use Pathway':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,193,192,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Park Roads Cycling Connections':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(147,213,182,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Quiet Street Cycling Routes':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(202,234,191,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Signed Routes':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,227,133,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Bikeways_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("CP_TYPE");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Bikeways_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
