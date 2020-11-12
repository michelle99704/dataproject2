var wms_layers = [];


        var lyr_Map_0 = new ol.layer.Tile({
            'title': 'Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'
            })
        });
var format_Bikeways_1 = new ol.format.GeoJSON();
var features_Bikeways_1 = format_Bikeways_1.readFeatures(json_Bikeways_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bikeways_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bikeways_1.addFeatures(features_Bikeways_1);
var lyr_Bikeways_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bikeways_1, 
                style: style_Bikeways_1,
                interactive: false,
    title: 'Bikeways<br />\
    <img src="styles/legend/Bikeways_1_0.png" /> Bike Lanes<br />\
    <img src="styles/legend/Bikeways_1_1.png" /> Cycle Tracks<br />\
    <img src="styles/legend/Bikeways_1_2.png" /> Informal Dirt Footpath<br />\
    <img src="styles/legend/Bikeways_1_3.png" /> Major Multi-use Pathway<br />\
    <img src="styles/legend/Bikeways_1_4.png" /> Minor Multi-use Pathway<br />\
    <img src="styles/legend/Bikeways_1_5.png" /> Park Roads Cycling Connections<br />\
    <img src="styles/legend/Bikeways_1_6.png" /> Quiet Street Cycling Routes<br />\
    <img src="styles/legend/Bikeways_1_7.png" /> Signed Routes<br />'
        });
var format_Collisionsinvolvingcyclists_2 = new ol.format.GeoJSON();
var features_Collisionsinvolvingcyclists_2 = format_Collisionsinvolvingcyclists_2.readFeatures(json_Collisionsinvolvingcyclists_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Collisionsinvolvingcyclists_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Collisionsinvolvingcyclists_2.addFeatures(features_Collisionsinvolvingcyclists_2);
var lyr_Collisionsinvolvingcyclists_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Collisionsinvolvingcyclists_2, 
                style: style_Collisionsinvolvingcyclists_2,
                interactive: true,
    title: 'Collisions involving cyclists<br />\
    <img src="styles/legend/Collisionsinvolvingcyclists_2_0.png" /> Fatal<br />\
    <img src="styles/legend/Collisionsinvolvingcyclists_2_1.png" /> Non-Fatal Injury<br />'
        });

lyr_Map_0.setVisible(true);lyr_Bikeways_1.setVisible(true);lyr_Collisionsinvolvingcyclists_2.setVisible(true);
var layersList = [lyr_Map_0,lyr_Bikeways_1,lyr_Collisionsinvolvingcyclists_2];
lyr_Bikeways_1.set('fieldAliases', {'GEO_ID': 'GEO_ID', 'LFN_ID': 'LFN_ID', 'LF_NAME': 'LF_NAME', 'ADDRESS_L': 'ADDRESS_L', 'ADDRESS_R': 'ADDRESS_R', 'OE_FLAG_L': 'OE_FLAG_L', 'OE_FLAG_R': 'OE_FLAG_R', 'LONUML': 'LONUML', 'HINUML': 'HINUML', 'LONUMR': 'LONUMR', 'HINUMR': 'HINUMR', 'FNODE': 'FNODE', 'TNODE': 'TNODE', 'ONE_WAY_DI': 'ONE_WAY_DI', 'DIR_CODE_D': 'DIR_CODE_D', 'FCODE': 'FCODE', 'FCODE_DESC': 'FCODE_DESC', 'JURIS_CODE': 'JURIS_CODE', 'OBJECTID': 'OBJECTID', 'CP_TYPE': 'CP_TYPE', });
lyr_Collisionsinvolvingcyclists_2.set('fieldAliases', {'DATE': 'DATE', 'STREET 1': 'STREET 1', 'STREET 2': 'STREET 2', 'ROAD CLASS': 'ROAD CLASS', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'ACCIDENT C': 'ACCIDENT C', 'INJURY': 'INJURY', 'CRASH DETA': 'CRASH DETA', 'CYCLIST AC': 'CYCLIST AC', 'INVOLVED': 'INVOLVED', });
lyr_Bikeways_1.set('fieldImages', {'GEO_ID': '', 'LFN_ID': '', 'LF_NAME': '', 'ADDRESS_L': '', 'ADDRESS_R': '', 'OE_FLAG_L': '', 'OE_FLAG_R': '', 'LONUML': '', 'HINUML': '', 'LONUMR': '', 'HINUMR': '', 'FNODE': '', 'TNODE': '', 'ONE_WAY_DI': '', 'DIR_CODE_D': '', 'FCODE': '', 'FCODE_DESC': '', 'JURIS_CODE': '', 'OBJECTID': '', 'CP_TYPE': '', });
lyr_Collisionsinvolvingcyclists_2.set('fieldImages', {'DATE': 'TextEdit', 'STREET 1': '', 'STREET 2': '', 'ROAD CLASS': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'ACCIDENT C': 'TextEdit', 'INJURY': 'TextEdit', 'CRASH DETA': '', 'CYCLIST AC': '', 'INVOLVED': '', });
lyr_Bikeways_1.set('fieldLabels', {'GEO_ID': 'no label', 'LFN_ID': 'no label', 'LF_NAME': 'no label', 'ADDRESS_L': 'no label', 'ADDRESS_R': 'no label', 'OE_FLAG_L': 'no label', 'OE_FLAG_R': 'no label', 'LONUML': 'no label', 'HINUML': 'no label', 'LONUMR': 'no label', 'HINUMR': 'no label', 'FNODE': 'no label', 'TNODE': 'no label', 'ONE_WAY_DI': 'no label', 'DIR_CODE_D': 'no label', 'FCODE': 'no label', 'FCODE_DESC': 'no label', 'JURIS_CODE': 'no label', 'OBJECTID': 'no label', 'CP_TYPE': 'header label', });
lyr_Collisionsinvolvingcyclists_2.set('fieldLabels', {'DATE': 'no label', 'STREET 1': 'inline label', 'STREET 2': 'inline label', 'ROAD CLASS': 'inline label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'ACCIDENT C': 'inline label', 'INJURY': 'inline label', 'CRASH DETA': 'inline label', 'CYCLIST AC': 'inline label', 'INVOLVED': 'inline label', });
lyr_Collisionsinvolvingcyclists_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});