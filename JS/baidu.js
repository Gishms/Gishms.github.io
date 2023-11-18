//创建地址实例
var map = new BMap.Map("baiducontainer");
//设置中心的坐标
var point = new BMap.Point(110.50, 29.02);
//初始化地图页面，设置中心点坐标和地图级别  
map.centerAndZoom(point, 13);
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放 
var opts = { type: BMAP_NAVIGATION_CONTROL_ZOOM }
map.addControl(new BMap.NavigationControl(opts));
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
map.addControl(new BMap.MapTypeControl());
map.setMapStyleV2({
  styleId: '583e42ab037d7f97ce09577402b8282c'
});