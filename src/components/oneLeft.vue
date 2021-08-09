<template>
 <div style="float: left; width: 100%; height: 100%">
				<div style="width: 100%; height: calc(33.33% - 8px)" class="card">
					<!-- <img class="back-img" src="../assets/borderl1.png" /> -->
					<p class="card-title"><img src="../assets/titleL.png" alt="">&nbsp;{{oneTitle}}&nbsp;<img src="../assets/titleR.png" alt=""></p>
					<div class="recycle-record" style="display: flex; align-items: center; justify-content: center;width:100%;flex-wrap:wrap">
						

						 <div class='oneLeftOne'>
							<div>
								<img src="../assets/foImg.png" align='left' width='100% ' >
							</div>
							<div style="text-align:left;margin-left:1em">
								<span style="font-size: 1vw;color: #00F2F8;font-weight: 500;">234平方</span><br />
								<span class="member-number">建筑面积</span>
							</div>
							
						</div>
						<div class='oneLeftOne'>
							<div>
								<img src="../assets/tree.png" align='left' width='100% ' >
							</div>
							<div style="text-align:left;margin-left:1em">
								<span style="font-size: 1vw;color: #00F2F8;font-weight: 500;">234平方</span><br />
								<span class="member-number">建筑面积</span>
							</div>
							
						</div>
						<div class='oneLeftOne'>
							<div>
								<img src="../assets/tree2.png" align='left' width='100% '>
							</div>
							<div style="text-align:left;margin-left:1em">
								<span style="font-size: 1vw;color: #00F2F8;font-weight: 500;">234平方</span><br />
								<span class="member-number">建筑面积</span>
							</div>
							
						</div>
						 <div class='oneLeftOne'>
							<div>
								<img src="../assets/tree3.png" align='left' >
							</div>
							<div style="text-align:left;margin-left:1em">
								<span style="font-size: 1vw;color: #00F2F8;font-weight: 500;">234平方</span><br />
								<span class="member-number">建筑面积</span>
							</div>
							
						</div>
						<div class='oneLeftOne'>
							<div>
								<img src="../assets/tree4.png" align='left' >
							</div>
							<div style="text-align:left;margin-left:1em">
							<span style="font-size: 1vw;color: #00F2F8;font-weight: 500;">234平方</span><br />
								<span class="member-number">建筑面积</span>
							</div>
							
						</div>
						<div class='oneLeftOne'>
							<div>
								<img src="../assets/tree5.png" align='left' >
							</div>
							<div style="text-align:left;margin-left:1em ">
								<span style="font-size: 1vw;color: #00F2F8;font-weight: 500;">234平方</span><br />
								<span class="member-number">建筑面积</span>
							</div>
							
						</div>


					</div>
				</div>
				<div style="width: 100%; height: 12px"></div>
				<div style="width: 100%; height: calc(33.33% - 8px)" class="card">
					<!-- <img class="back-img" src="../assets/border3.png" /> -->
					<p class="card-title"><img src="../assets/titleL.png" alt="">&nbsp;{{twoTitle}}&nbsp;<img src="../assets/titleR.png" alt=""></p>
					<div class="recycle-record"
						style="padding: 10px; width: calc(100% - 30px); height: calc(100% - 60px);">
						<div style="height: 100%; width: 100%">
							<div id="communityEquipment" style="width: 100%;height: 100%;"></div>
						</div>
					</div>
				</div>
				<div style="width: 100%; height: 12px"></div>
				<div style="width: 100%; height: calc(33.33% - 8px)" class="card">
					<!-- <img class="back-img" src="../assets/borderl3.png" /> -->
					<p class="card-title"><img src="../assets/titleL.png" alt="">&nbsp;{{threeTitle}}&nbsp;<img src="../assets/titleR.png" alt=""></p>
					<div class="recycle-record">
						<div style="height: 100%; width: 100%">
							<div id="oneLeftTh" style="width: 100%;height: 100%;"></div>
						</div>
					</div>
				</div>


			</div>
</template>

<script>

export default {
  name: "oneLeft",

  data() {
    return {
      oneTitle: "住户信息",
      twoTitle: "小区设备情况",
      threeTitle: "系统康健度",
    };
  },
  mounted() {
	//   communityEquipment
			this.initCommunityEquipment();
			this.initOneLeftTh()
			window.addEventListener("resize", () => {
				this.$echarts.init(document.getElementById("communityEquipment")).resize();
				this.$echarts.init(document.getElementById("oneLeftTh")).resize();
			});
		},
		methods: {
			initCommunityEquipment() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("communityEquipment"));
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: "axis",
					},
					legend: {
						show: true,
						type: "scroll",
						textStyle: {
							color: '#fff'
						},
						right: 15,
						icon: "roundRect",
						borderRadius: 20,
						itemWidth: 16,
						itemHeight: 5,
					},
					grid: {
						left: "10px",
						right: "20px",
						bottom: "5px",
						top: "30px",
						containLabel: true,
					},
					series: [{
						type: "pie",
						radius: ["45%", "65%"],
						center: ["50%", "55%"],
						roseType: "area",
						itemStyle: {
							borderRadius: 3,
						},
						top: "1%",
						labelLine: {
							length: 2,
							length2: 40,
							maxSurfaceAngle: 40,
						},
						
						label: {
							// alignTo: "edge",
							formatter: "{b}\n{c} %",
							minMargin: 3,
							edgeDistance: 15,
							lineHeight: 35,
							// color: "#327296",
							color: "#fff",
							fontSize:"16px",
							// alignTo: "labelLine",
							
							rich: {
								time: {
									fontSize: 10,
									color: "#999",
								},
							},
						},
						labelLayout: function(params) {
							var isLeft = params.labelRect.x < myChart.getWidth() / 2;
							var points = params.labelLinePoints;
							// Update the end point.
							points[2][0] = isLeft ?
								params.labelRect.x :
								params.labelRect.x + params.labelRect.width;

							return {
								labelLinePoints: points,
							};
						},
						data: [{
								value: 40,
								name: "正常设备"
							},
							{
								value: 38,
								name: "告警设备"
							},
							{
								value: 32,
								name: "报修设备"
							},
							{
								value: 30,
								name: "报废设备"
							},
							
						],

					}, ],
				});
			},
			initOneLeftTh() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("oneLeftTh"));
				// 绘制图表
				let option={
					series:[
							{
								type: 'gauge',
								radius: '38%',
								center: ['20%', '25%'],
								axisLine: {
									roundCap: true,
									lineStyle: {
										width: '10',
										color: [
											[1, '#67e0e3'],
											// [1, '#37a2da'],
											// [1, '#fd666d']
										]
									}
								},
								pointer: {
									show:false,
									itemStyle: {
										color: 'auto'
									}
								},
								progress: {
									show: true,
									width: '10',
									overlap: true,
									roundCap: true,
									textStyle:{
										fontSize:'16px'
									}
								},
								// left: '50%',
								// right: 0,
								// top: 0,
								// bottom: 0,
								axisTick: {
									show:false,
									distance: -30,
									length: 8,
									lineStyle: {
										color: '#fff',
										width: 2
									}
								},
								splitLine: {
									show:false,
									distance: -30,
									length: 30,
									lineStyle: {
										color: '#fff',
										width: 4
									}
								},
								axisLabel: {
									show:false,
									color: 'auto',
									distance: 40,
									fontSize: 20
								},
								detail: {
									valueAnimation: true,
									formatter: '{value}%',
									fontSize: 20,
									color: 'auto'
								},
								data: [{
									value: 70,
									name: '消防栓健康度',
									title: {
										offsetCenter: ['0%', '100%'],
										color:'#fff'
									},
									detail: {
										offsetCenter: ['0%', '10%']
									}
								}]
							},

							{
								type: 'gauge',
								radius: '38%',
								center: ['50%', '25%'],
								axisLine: {
									roundCap: true,
									lineStyle: {
										width: 10,
										color: [
											[1, '#67e0e3'],
											// [1, '#37a2da'],
											// [1, '#fd666d']
										]
									}
								},
								pointer: {
									show:false,
									itemStyle: {
										color: 'auto'
									}
								},
								progress: {
									show: true,
									width: 10,
									overlap: true,
									roundCap: true
								},
								axisTick: {
									show:false,
									distance: -30,
									length: 8,
									lineStyle: {
										color: '#fff',
										width: 2
									}
								},
								splitLine: {
									show:false,
									distance: -30,
									length: 30,
									lineStyle: {
										color: '#fff',
										width: 4
									}
								},
								axisLabel: {
									show:false,
									color: 'auto',
									distance: 40,
									fontSize: 20
								},
								detail: {
									valueAnimation: true,
									formatter: '{value}%',
									fontSize: 20,
									color: 'auto'
								},
								data: [{
									value: 70,
									name: '井盖监控度',
									title: {
										offsetCenter: ['0%', '100%'],
										color:'#fff'
									},
									detail: {
										offsetCenter: ['0%', '20%']
									}
								}]
							},

							{
								type: 'gauge',
								radius: '38%',
								center: ['80%', '25%'],
								axisLine: {
									roundCap: true,
									lineStyle: {
										width: 10,
										color: [
											[1, '#67e0e3'],
											// [1, '#37a2da'],
											// [1, '#fd666d']
										]
									}
								},
								pointer: {
									show:false,
									itemStyle: {
										color: 'auto'
									}
								},
								progress: {
									show: true,
									width: 10,
									overlap: true,
									roundCap: true
								},
								axisTick: {
									show:false,
									distance: -30,
									length: 8,
									lineStyle: {
										color: '#fff',
										width: 2
									}
								},
								splitLine: {
									show:false,
									distance: -30,
									length: 30,
									lineStyle: {
										color: '#fff',
										width: 4
									}
								},
								axisLabel: {
									show:false,
									color: 'auto',
									distance: 40,
									fontSize: 20
								},
								detail: {
									valueAnimation: true,
									formatter: '{value}%',
									fontSize: 20,
									color: 'auto'
								},
								data: [{
									value: 70,
									name: '道闸康健度',
									title: {
										offsetCenter: ['0%', '100%'],
										color:'#fff'
									},
									detail: {
										offsetCenter: ['0%', '20%']
									}
								}]
							},

							{
								type: 'gauge',
								radius: '38%',
								center: ['20%', '75%'],
								axisLine: {
									roundCap: true,
									lineStyle: {
										width: 10,
										color: [
											[1, '#67e0e3'],
											// [1, '#37a2da'],
											// [1, '#fd666d']
										]
									}
								},
								pointer: {
									show:false,
									itemStyle: {
										color: 'auto'
									}
								},
								progress: {
									show: true,
									width: 10,
									overlap: true,
									roundCap: true
								},
								axisTick: {
									show:false,
									distance: -30,
									length: 8,
									lineStyle: {
										color: '#fff',
										width: 2
									}
								},
								splitLine: {
									show:false,
									distance: -30,
									length: 30,
									lineStyle: {
										color: '#fff',
										width: 4
									}
								},
								axisLabel: {
									show:false,
									color: 'auto',
									distance: 40,
									fontSize: 20
								},
								detail: {
									valueAnimation: true,
									formatter: '{value}%',
									fontSize: 20,
									color: 'auto'
								},
								data: [{
									value: 70,
									name: '安防健康度',
									title: {
										offsetCenter: ['0%', '100%'],
										color:'#fff'
									},
									detail: {
										offsetCenter: ['0%', '20%']
									}
								}]
							},

							{
								type: 'gauge',
								radius: '38%',
								center: ['50%', '75%'],
								axisLine: {
									roundCap: true,
									lineStyle: {
										width: 10,
										color: [
											[1, '#67e0e3'],
											// [1, '#37a2da'],
											// [1, '#fd666d']
										]
									}
								},
								pointer: {
									show:false,
									itemStyle: {
										color: 'auto'
									}
								},
								progress: {
									show: true,
									width: 10,
									overlap: true,
									roundCap: true
								},
								axisTick: {
									show:false,
									distance: -30,
									length: 8,
									lineStyle: {
										color: '#fff',
										width: 2
									}
								},
								splitLine: {
									show:false,
									distance: -30,
									length: 30,
									lineStyle: {
										color: '#fff',
										width: 4
									}
								},
								axisLabel: {
									show:false,
									color: 'auto',
									distance: 40,
									fontSize: 20
								},
								detail: {
									valueAnimation: true,
									fontSize: 20,
									formatter: '{value}%',
									color: 'auto'
								},
								data: [{
									value: 70,
									name: '门禁监控度',
									title: {
										offsetCenter: ['0%', '100%'],
										color:'#fff'
									},
									detail: {
										offsetCenter: ['0%', '20%']
									}
								}]
							},

							{
								type: 'gauge',
								radius: '38%',
								center: ['80%', '75%'],
								
								axisLine: {
									roundCap: true,
									lineStyle: {
										width: 10,
										color: [
											[1, '#67e0e3'],
											// [1, '#37a2da'],
											// [1, '#fd666d']
										],
										
									}
								},
								pointer: {
									show:false,
									itemStyle: {
										color: 'auto'
									}
								},
								progress: {
									show: true,
									width: 10,
									overlap: true,
									roundCap: true
								},
								axisTick: {
									show:false,
									distance: -30,
									length: 8,
									lineStyle: {
										color: '#fff',
										width: 2
									}
								},
								splitLine: {
									show:false,
									distance: -30,
									length: 30,
									lineStyle: {
										color: '#fff',
										width: 4
									}
								},
								axisLabel: {
									show:false,
									color: 'auto',
									distance: 40,
									fontSize: 20
								},
								
								detail: {
									valueAnimation: true,
									fontSize: 20,
									formatter: '{value}%',
									color: 'auto'
								},
								data: [{
									value: 70,
									name: '空调康健度',
									title: {
										offsetCenter: ['0%', '100%'],
										color:''
									},
									detail: {
										offsetCenter: ['0%', '20%']
									}
								}]
							},
					]
				}
				setInterval(function () {
    
					option.series[0].data[0].value = (Math.round(Math.random() * 100)).toFixed(2) - 0;
					myChart.setOption(option, true);
					option.series[1].data[0].value = (Math.round(Math.random() * 100)).toFixed(2) - 0;
					myChart.setOption(option, true);
					option.series[2].data[0].value = (Math.round(Math.random() * 100)).toFixed(2) - 0;
					myChart.setOption(option, true);
					option.series[3].data[0].value = (Math.round(Math.random() * 100)).toFixed(2) - 0;
					myChart.setOption(option, true);
					option.series[4].data[0].value = (Math.round(Math.random() * 100)).toFixed(2) - 0;
					myChart.setOption(option, true);
					option.series[5].data[0].value = (Math.round(Math.random() * 100)).toFixed(2) - 0;
					myChart.setOption(option, true);
				}, 2000);
				myChart.setOption(option);
				
			},


		},
 
};
</script>


