// styleConfig.js

// 圆形样式，常用于点要素
function createCircleStyle(radius, fillColor, strokeColor, strokeWidth) {
    return new ol.style.Style({
        image: new ol.style.Circle({
            radius: radius,
            fill: new ol.style.Fill({
                color: fillColor
            }),
            stroke: new ol.style.Stroke({
                color: strokeColor,
                width: strokeWidth
            })
        })
    });
}

// 线样式，常用于线要素
function createLineStyle(strokeColor, strokeWidth, lineDash = []) {
    return new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: strokeColor,
            width: strokeWidth,
            lineDash: lineDash
        })
    });
}

// 多边形样式，常用于面要素
function createPolygonStyle(strokeColor, strokeWidth, fillColor) {
    return new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: strokeColor,
            width: strokeWidth
        }),
        fill: new ol.style.Fill({
            color: fillColor
        })
    });
}

// 返回样式定义，适用于 GeoJSON 数据
function styleFunction(feature) {
    const geometryType = feature.getGeometry().getType();

    if (geometryType === 'Point') {
        return createCircleStyle(10, '#39c5cc', '#333', 2);  // 定义点要素样式
    } else if (geometryType === 'LineString') {
        return createLineStyle('#ff0000', 4, [10, 10]);  // 定义线要素样式
    } else if (geometryType === 'Polygon') {
        return createPolygonStyle('#00ff00', 2, 'rgba(0, 255, 0, 0.3)');  // 定义面要素样式
    }
}
