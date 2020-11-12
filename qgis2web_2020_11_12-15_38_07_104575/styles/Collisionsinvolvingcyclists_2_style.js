var size = 0;
var placement = 'point';
function categories_Collisionsinvolvingcyclists_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Fatal':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
             fill: new ol.style.Fill({color: 'rgba(184,28,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Non-Fatal Injury':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.0 + size,
             fill: new ol.style.Fill({color: 'rgba(255,127,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Collisionsinvolvingcyclists_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("ACCIDENT C");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Collisionsinvolvingcyclists_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
