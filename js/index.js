// 初始化控件
function InitMap(map){
    // 经纬度坐标范围 (EPSG:4326)
    const lonLatExtent = [120.165, 35.941785, 120.185, 35.941785];

    // 转换为 Web Mercator 坐标范围 (EPSG:3857)
    const webMercatorExtent = ol.proj.transformExtent(lonLatExtent, 'EPSG:4326', 'EPSG:3857');

    /* 视图跳转控件 */
    const ZoomToExtent = new ol.control.ZoomToExtent({
        extent: webMercatorExtent,
    });
    map.addControl(ZoomToExtent);

    /* 放大缩小控件 */
    const zoomslider = new ol.control.ZoomSlider();
    map.addControl(zoomslider);

    // 全屏控件
    const fullScreen = new ol.control.FullScreen();
    map.addControl(fullScreen);
}

// 定义底图切换功能
function initBasemapControl(map, layers) {
    // 获取底图选择控件
    const basemapSelect = document.getElementById('basemapSelect');

    // 存储当前的底图层
    let currentBaseLayer = layers.v_layer4; // 初始底图为高德电子地图

    // 监听选择框变化事件
    basemapSelect.addEventListener('change', function () {
        // 获取用户选择的底图
        const selectedLayer = this.value;

        // 移除当前底图
        map.removeLayer(currentBaseLayer);

        // 根据用户选择添加新的底图
        switch (selectedLayer) {
            case 'v_layer1':
                currentBaseLayer = layers.v_layer1;
                break;
            case 'v_layer2':
                currentBaseLayer = layers.v_layer2;
                break;
            case 'v_layer3':
                currentBaseLayer = layers.v_layer3;
                break;
            case 'v_layer4':
                currentBaseLayer = layers.v_layer4;
                break;
        }

        // 添加新的底图到地图
        map.addLayer(currentBaseLayer);

        // 确保新底图的 zIndex 为 -1，以避免遮挡其他图层
        currentBaseLayer.setZIndex(-1);
    });
}

// 添加点要素
function PointAdd(pointLayer, position) {
    var point = new ol.Feature({
        geometry: new ol.geom.Point(position)
    });
    pointLayer.getSource().addFeature(point);
    pointLayer.setStyle(createCircleStyle(7,'#ffffff',"#000000",1));
}

// 返回坐标
function ReturnCood(position) {
    var lonLat = ol.proj.toLonLat(position);
    console.log('经度: ' + lonLat[0] + ', 纬度: ' + lonLat[1]);
    alert('经度: ' + lonLat[0] + ', 纬度: ' + lonLat[1]);
}

// 漫游
function Pan(map, position) {
    map.getView().animate({
        center: position,
        zoom: 14,
        duration: 2000
    });
}