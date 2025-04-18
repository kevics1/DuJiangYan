Cesium.GeoJsonDataSource.load('data/data.geojson', {
    clampToGround: true // 开启贴地模式
}).then(function(dataSource) {
    viewer.dataSources.add(dataSource);

    var entities = dataSource.entities.values;
    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        if (Cesium.defined(entity.polygon)) {
            // 设置高度参考为CLAMP_TO_GROUND以确保完全贴地
            entity.polygon.heightReference = Cesium.HeightReference.CLAMP_TO_GROUND;
            
            // 高度设置为0
            entity.polygon.height = 0;
            
            // 如果需要挤出高度，可以设置extrudedHeight
            if (entity.properties && entity.properties.height) {
                entity.polygon.extrudedHeight = Number(entity.properties.height.getValue());
                // 对于挤出高度，使用RELATIVE_TO_GROUND
                entity.polygon.extrudedHeightReference = Cesium.HeightReference.RELATIVE_TO_GROUND;
            }

            // 样式设置
            entity.polygon.material = Cesium.Color.BLUE.withAlpha(0.5);
            entity.polygon.outline = true;
            entity.polygon.outlineColor = Cesium.Color.WHITE;
            
            // 确保多边形正确分类到地形
            entity.polygon.classificationType = Cesium.ClassificationType.TERRAIN;
        }
    }

    // 获取第一个多边形的中心点
    var firstPolygon = entities[0].polygon;
    var positions = firstPolygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
    var center = Cesium.BoundingSphere.fromPoints(positions).center;
    var cartographic = Cesium.Cartographic.fromCartesian(center);
    var longitude = Cesium.Math.toDegrees(cartographic.longitude);
    var latitude = Cesium.Math.toDegrees(cartographic.latitude);

    // 停顿后自动飞入数据所在的位置
    setTimeout(function() {
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, 5000),
            orientation: {
                heading: Cesium.Math.toRadians(0),
                pitch: Cesium.Math.toRadians(-90),
                roll: 0.0
            },
            duration: 5 // 动态缩放动画效果持续时间为5秒
        });
    }, 2000); // 停顿2秒后开始飞行
});