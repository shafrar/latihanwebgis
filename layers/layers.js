var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Administrasi_1 = new ol.format.GeoJSON();
var features_Administrasi_1 = format_Administrasi_1.readFeatures(json_Administrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrasi_1.addFeatures(features_Administrasi_1);
var lyr_Administrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administrasi_1, 
                style: style_Administrasi_1,
                popuplayertitle: "Administrasi",
                interactive: true,
                title: '<img src="styles/legend/Administrasi_1.png" /> Administrasi'
            });
var format_Pemukiman_Clip_2 = new ol.format.GeoJSON();
var features_Pemukiman_Clip_2 = format_Pemukiman_Clip_2.readFeatures(json_Pemukiman_Clip_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_Clip_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_Clip_2.addFeatures(features_Pemukiman_Clip_2);
var lyr_Pemukiman_Clip_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_Clip_2, 
                style: style_Pemukiman_Clip_2,
                popuplayertitle: "Pemukiman_Clip",
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_Clip_2.png" /> Pemukiman_Clip'
            });
var format_SAWAH_Clip_3 = new ol.format.GeoJSON();
var features_SAWAH_Clip_3 = format_SAWAH_Clip_3.readFeatures(json_SAWAH_Clip_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAWAH_Clip_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAWAH_Clip_3.addFeatures(features_SAWAH_Clip_3);
var lyr_SAWAH_Clip_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAWAH_Clip_3, 
                style: style_SAWAH_Clip_3,
                popuplayertitle: "SAWAH_Clip",
                interactive: true,
                title: '<img src="styles/legend/SAWAH_Clip_3.png" /> SAWAH_Clip'
            });
var format_LADANG_Clip_4 = new ol.format.GeoJSON();
var features_LADANG_Clip_4 = format_LADANG_Clip_4.readFeatures(json_LADANG_Clip_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LADANG_Clip_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LADANG_Clip_4.addFeatures(features_LADANG_Clip_4);
var lyr_LADANG_Clip_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LADANG_Clip_4, 
                style: style_LADANG_Clip_4,
                popuplayertitle: "LADANG_Clip",
                interactive: true,
                title: '<img src="styles/legend/LADANG_Clip_4.png" /> LADANG_Clip'
            });
var format_NONAGRISEMAKBELUKAR_AR_25K_C_5 = new ol.format.GeoJSON();
var features_NONAGRISEMAKBELUKAR_AR_25K_C_5 = format_NONAGRISEMAKBELUKAR_AR_25K_C_5.readFeatures(json_NONAGRISEMAKBELUKAR_AR_25K_C_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NONAGRISEMAKBELUKAR_AR_25K_C_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NONAGRISEMAKBELUKAR_AR_25K_C_5.addFeatures(features_NONAGRISEMAKBELUKAR_AR_25K_C_5);
var lyr_NONAGRISEMAKBELUKAR_AR_25K_C_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NONAGRISEMAKBELUKAR_AR_25K_C_5, 
                style: style_NONAGRISEMAKBELUKAR_AR_25K_C_5,
                popuplayertitle: "NONAGRISEMAKBELUKAR_AR_25K_C",
                interactive: true,
                title: '<img src="styles/legend/NONAGRISEMAKBELUKAR_AR_25K_C_5.png" /> NONAGRISEMAKBELUKAR_AR_25K_C'
            });
var format_DANAU_AR_25K_Clip_6 = new ol.format.GeoJSON();
var features_DANAU_AR_25K_Clip_6 = format_DANAU_AR_25K_Clip_6.readFeatures(json_DANAU_AR_25K_Clip_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANAU_AR_25K_Clip_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_25K_Clip_6.addFeatures(features_DANAU_AR_25K_Clip_6);
var lyr_DANAU_AR_25K_Clip_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANAU_AR_25K_Clip_6, 
                style: style_DANAU_AR_25K_Clip_6,
                popuplayertitle: "DANAU_AR_25K_Clip",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_25K_Clip_6.png" /> DANAU_AR_25K_Clip'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Administrasi_1.setVisible(true);lyr_Pemukiman_Clip_2.setVisible(true);lyr_SAWAH_Clip_3.setVisible(true);lyr_LADANG_Clip_4.setVisible(true);lyr_NONAGRISEMAKBELUKAR_AR_25K_C_5.setVisible(true);lyr_DANAU_AR_25K_Clip_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Administrasi_1,lyr_Pemukiman_Clip_2,lyr_SAWAH_Clip_3,lyr_LADANG_Clip_4,lyr_NONAGRISEMAKBELUKAR_AR_25K_C_5,lyr_DANAU_AR_25K_Clip_6];
lyr_Administrasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Pemukiman_Clip_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SAWAH_Clip_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_LADANG_Clip_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_NONAGRISEMAKBELUKAR_AR_25K_C_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSSMK': 'JNSSMK', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_DANAU_AR_25K_Clip_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Administrasi_1.set('fieldImages', {'OBJECTID': '', 'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_Pemukiman_Clip_2.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_SAWAH_Clip_3.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TNMSWH': '', 'SHAPE_Leng': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_LADANG_Clip_4.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'SHAPE_Leng': '', 'SHAPE_Length': '', 'SHAPE_Area': '', });
lyr_NONAGRISEMAKBELUKAR_AR_25K_C_5.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSSMK': '', 'SHAPE_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_DANAU_AR_25K_Clip_6.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_Administrasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_Pemukiman_Clip_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_SAWAH_Clip_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_LADANG_Clip_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_NONAGRISEMAKBELUKAR_AR_25K_C_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSSMK': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_DANAU_AR_25K_Clip_6.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_DANAU_AR_25K_Clip_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});