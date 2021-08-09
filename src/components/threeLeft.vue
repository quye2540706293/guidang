<template>
 <div style="float: left; width: 100%; height: 100%">
				<div style="width: 100%; height: calc(50% - 8px)" class="cardTh">
					<p class="card-title"><img src="../assets/titleL.png" alt="">&nbsp;{{oneTitle}}&nbsp;<img src="../assets/titleR.png" alt=""></p>
					<div class="recycle-record">
						<div class="recycle-record-title">
							<div style="width: 30%; float: left; text-align: center">
								访问人
							</div>
							<div style="width: 30%; float: left; text-align: center">
								被访问人
							</div>
							<div style="width: 40%; float: left; text-align: left">时间</div>
						</div>
						<div class="recycle-record-content">
							<div class="recycle-record-content-line" v-for="(line, i) in recycleRecordP" :key="i">
								<div class="recycle-record-content-item" :title="line.name"
									style="width: 30%; float: left; text-align: center">
									{{ line.name }}
								</div>
								<div class="recycle-record-content-item" :title="line.address"
									style="width: 30%; float: left; text-align: center">
									{{ line.address }}
								</div>
								<div class="recycle-record-content-item" :title="line.time"
									style="width: 40%; float: left; text-align: left">
									{{ line.time }}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div style="width: 100%; height: 12px"></div>
				<div style="width: 100%; height: calc(50% - 8px)" class="cardTh">
					<p class="card-title"><img src="../assets/titleL.png" alt="">&nbsp;{{twoTitle}}&nbsp;<img src="../assets/titleR.png" alt=""></p>
					<div class="recycle-record">
						<div class="recycle-record-title">
							<div style="width: 30%; float: left; text-align: center">
								车牌
							</div>
							<div style="width: 30%; float: left; text-align: center">
								出/入
							</div>
							<div style="width: 40%; float: left; text-align: left">时间</div>
						</div>
						<div class="recycle-record-content">
							<div class="recycle-record-content-line" v-for="(line, i) in recycleRecords" :key="i">
								<div class="recycle-record-content-item" :title="line.name"
									style="width: 30%; float: left; text-align: center">
									{{ line.name }}
								</div>
								<div class="recycle-record-content-item" :title="line.address"
									style="width: 30%; float: left; text-align: center">
									{{ line.address }}
								</div>
								<div class="recycle-record-content-item" :title="line.time"
									style="width: 40%; float: left; text-align: left">
									{{ line.time }}
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
</template>

<script>

export default {
  name: "threeLeft",
  data() {
    return {
      oneTitle: "访客记录",
      twoTitle: "车辆进出记录",
    recycleRecords: [
        {
          name: "沪DF183988",
          address: "入",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "沪DF183988",
          address: "出",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "沪DF183988",
          address: "出",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "沪DF183988",
          address: "入",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "沪DF183988",
          address: "出",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "沪DF183988",
          address: "入",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "沪DF183988",
          address: "出",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "沪DF183988",
          address: "出",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "沪DF183988",
          address: "入",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "沪DF183988",
          address: "出",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "沪DF183988",
          address: "出",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "沪DF183988",
          address: "入",
          time: "2021-5-26 11:11:11",
        },
      ],
recycleRecordP: [
        {
          name: "瓶子",
          address: "王丽晨",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "瓶子",
          address: "王丽晨 ",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "瓶子",
          address: "王丽晨 ",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "瓶子",
          address: "王丽晨 ",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "瓶子",
          address: "王丽晨 ",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "瓶子",
          address: "王丽晨 ",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "瓶子",
          address: "王丽晨 ",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "瓶子",
          address: "王丽晨 ",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "瓶子",
          address: "王丽晨 ",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "瓶子",
          address: "王丽晨 ",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "瓶子",
          address: "王丽晨 ",
          time: "2021-5-26 11:11:11",
        },
        {
          name: "瓶子",
          address: "王丽晨 ",
          time: "2021-5-26 11:11:11",
        },
      ],
    };
  },
  mounted() {
			this.initFQWSJ();
			window.addEventListener("resize", () => {
				this.$echarts.init(document.getElementById("fqwsj")).resize();
			});
		},
		methods: {
			initFQWSJ() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("fqwsj"));
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
						radius: ["60%", "85%"],
						center: ["50%", "50%"],
						roseType: "area",
						itemStyle: {
							borderRadius: 3,
						},
						top: "20%",
						labelLine: {
							length: 0,
							length2: 0,
							maxSurfaceAngle: 80,
						},
						label: {
							alignTo: "edge",
							formatter: "{b} {c} %\n",
							minMargin: 2,
							edgeDistance: 1,
							lineHeight: 15,
							color: "#327296",
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
								name: "塑料类"
							},
							{
								value: 38,
								name: "金属类"
							},
							{
								value: 32,
								name: "木材类"
							},
							{
								value: 30,
								name: "织物类"
							},
							{
								value: 28,
								name: "复合材料"
							},
							{
								value: 26,
								name: "其他类"
							},
						],

					}, ],
				});
			},
		},
 
};
</script>


