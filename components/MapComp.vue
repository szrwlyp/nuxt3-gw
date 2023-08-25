<script setup lang="ts">
import { ref, onMounted } from "vue";

//地图初始化函数，本例取名为init，开发者可根据实际情况定义
function initMap() {
  //定义地图中心点坐标
  var center = new TMap.LatLng(22.829853, 108.37542);
  //定义map变量，调用 TMap.Map() 构造函数创建地图
  var map = new TMap.Map(document.getElementById("container"), {
    center: center, //设置地图中心点坐标
    zoom: 17, //设置地图缩放级别
    pitch: 43.5, //设置俯仰角
    rotation: 45, //设置地图旋转角度
    // viewMode: "2D",
  });

  var marker = new TMap.MultiMarker({
    map: map,
    styles: {
      // 点标记样式
      marker: new TMap.MarkerStyle({
        width: 20, // 样式宽
        height: 30, // 样式高
        anchor: { x: 10, y: 30 }, // 描点位置
      }),
      label: new TMap.MarkerStyle({
        color: "#3777FF", //颜色属性
        size: 18, //文字大小属性
        offset: { x: 0, y: -30 }, //文字偏移属性单位为像素
        angle: 0, //文字旋转属性
        alignment: "center", //文字水平对齐属性
        verticalAlignment: "middle", //文字垂直对齐属性
      }),
    },
    geometries: [
      // 点标记数据数组
      {
        // 标记位置(纬度，经度，高度)
        position: center,
        id: "marker",
      },
      {
        id: "label", //点图形数据的标志信息
        styleId: "label", //样式id
        position: center, //标注点位置
        content: "南宁超创信息工程有限公司", //标注文本
      },
    ],
  });
}
onMounted(() => {
  initMap();
});
</script>

<template>
  <div class="map">
    <div id="container"></div>
  </div>
</template>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
#container {
  width: 100%;
  height: 100%;
}
</style>
