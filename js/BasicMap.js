// 1. 天地图矢量
const v_layer1 = new ol.layer.Tile({
    title: "天地图矢量",
    source: new ol.source.XYZ({
        url: 'http://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=e000529616296961737a40eb8d393d7e',
        wrapX: false
    })
});

// 2. 高德卫星
const v_layer2 = new ol.layer.Tile({
    title: "高德卫星",
    source: new ol.source.XYZ({
        url: 'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    })
});

// 3. 高德大字体
const v_layer3 = new ol.layer.Tile({
    title: "高德大字体",
    source: new ol.source.XYZ({
        url: 'http://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}',
    })
});

// 4. 高德电子地图
const v_layer4 = new ol.layer.Tile({
    title: "高德电子地图",
    source: new ol.source.XYZ({
        url: 'https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}',
    })
});