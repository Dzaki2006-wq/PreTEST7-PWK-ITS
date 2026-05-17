var wms_layers = [];

var format_BatasAdministrasi_0 = new ol.format.GeoJSON();
var features_BatasAdministrasi_0 = format_BatasAdministrasi_0.readFeatures(json_BatasAdministrasi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_0.addFeatures(features_BatasAdministrasi_0);
var lyr_BatasAdministrasi_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasi_0, 
                style: style_BatasAdministrasi_0,
                popuplayertitle: 'Batas Administrasi',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasi_0.png" /> Batas Administrasi'
            });
var format_800m_1 = new ol.format.GeoJSON();
var features_800m_1 = format_800m_1.readFeatures(json_800m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_800m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_800m_1.addFeatures(features_800m_1);
var lyr_800m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_800m_1, 
                style: style_800m_1,
                popuplayertitle: '800m',
                interactive: true,
                title: '<img src="styles/legend/800m_1.png" /> 800m'
            });
var format_400m_2 = new ol.format.GeoJSON();
var features_400m_2 = format_400m_2.readFeatures(json_400m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_400m_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_400m_2.addFeatures(features_400m_2);
var lyr_400m_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_400m_2, 
                style: style_400m_2,
                popuplayertitle: '400m',
                interactive: true,
                title: '<img src="styles/legend/400m_2.png" /> 400m'
            });
var format_Halte_3 = new ol.format.GeoJSON();
var features_Halte_3 = format_Halte_3.readFeatures(json_Halte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_3.addFeatures(features_Halte_3);
var lyr_Halte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_3, 
                style: style_Halte_3,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_3.png" /> Halte'
            });

lyr_BatasAdministrasi_0.setVisible(true);lyr_800m_1.setVisible(true);lyr_400m_2.setVisible(true);lyr_Halte_3.setVisible(true);
var layersList = [lyr_BatasAdministrasi_0,lyr_800m_1,lyr_400m_2,lyr_Halte_3];
lyr_BatasAdministrasi_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LuasKediri': 'LuasKediri', });
lyr_800m_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'JANGKAUAN': 'JANGKAUAN', 'ID': 'ID', 'type': 'type', 'start': 'start', });
lyr_400m_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'JANGKAUAN': 'JANGKAUAN', 'ID': 'ID', 'type': 'type', 'start': 'start', });
lyr_Halte_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'JANGKAUAN': 'JANGKAUAN', 'ID': 'ID', });
lyr_BatasAdministrasi_0.set('fieldImages', {'OBJECTID': '', 'WADMKD': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', 'SUMBER': '', 'LUASHA': '', 'Shape_Leng': '', 'Shape_Area': '', 'LuasKediri': '', });
lyr_800m_1.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Name': '', 'REMARK': '', 'JANGKAUAN': '', 'ID': '', 'type': '', 'start': '', });
lyr_400m_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'JANGKAUAN': 'TextEdit', 'ID': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Halte_3.set('fieldImages', {'fid': '', 'OBJECTID': '', 'Name': '', 'REMARK': '', 'JANGKAUAN': '', 'ID': '', });
lyr_BatasAdministrasi_0.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'SUMBER': 'no label', 'LUASHA': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'LuasKediri': 'no label', });
lyr_800m_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'JANGKAUAN': 'no label', 'ID': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_400m_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'REMARK': 'no label', 'JANGKAUAN': 'no label', 'ID': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Halte_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'inline label - always visible', 'REMARK': 'no label', 'JANGKAUAN': 'inline label - always visible', 'ID': 'no label', });
lyr_Halte_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});