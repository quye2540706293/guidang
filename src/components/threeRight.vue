<template>
 <div style="float: left; width: 100%; height: 100%">
				<div style="width: 100%; height: calc(50% - 8px)" class="cardTh">
					<p class="card-title"><img src="../assets/titleL.png" alt="">&nbsp;{{oneTitle}}&nbsp;<img src="../assets/titleR.png" alt=""></p>
					<div class="recycle-record">
						<div style="height:calc(20% - 0px);width:100%;display:flex;justify-content:space-around;align-items: center;">
							
						<div class="thRightOne" style="width: 28%">
							<img src="../assets/complete.png" align='absmiddle'>
							<div style='margin-left:1em'>
								<span style="font-size: 6px">完成率</span><br />
								<span class="member-number" style="text-align:left">90%</span>
							</div>
							
						</div>
						<div class="thRightOne" style="width: 28%">
							<img src="../assets/repair.png" align='absmiddle'>
							<div style='margin-left:1em'>
								<span style="font-size: 6px">总报修</span><br />
								<span class="member-number" style="text-align:left">100%</span>
							</div>
						</div>
						<div class="thRightOne" style="width: 28%">
							<img src="../assets/complete.png" align='absmiddle'>
							<div style='margin-left:1em'>
								<span style="font-size: 6px">已处理</span><br />
								<span class="member-number" style="text-align:left">100%</span>
							</div>
						</div>
							

						</div>

						<div style="height:calc(80% - 8px)">
							<div class="recycle-record-title">
							
							<div style="width: 25%; float: left; text-align: center">
								投诉人
							</div>
							<div style="width: 60%; float: left; text-align: center">
								投诉内容
							</div>
							<div style="width: 15%; float: left; text-align: left">状态</div>
							</div>
							<div class="recycle-record-content">
								<div class="recycle-record-content-line" v-for="(line, i) in recycleRecords" :key="i">
									<div class="recycle-record-content-item" :title="line.name"
										style="width: 25%; float: left; text-align: center">
										{{ line.name }}
									</div>
									<div class="recycle-record-content-item" :title="line.description"
										style="width: 60%; float: left; text-align: center">
										{{ line.description }}
									</div>
									<div class="recycle-record-content-item" :title="line.state"
										style="width: 15%; float: left; text-align: left">
										<i v-if="line.state==1" class="el-icon-success" style="color:#01EEFD"></i>
										<i v-if="line.state==0" class="el-icon-error" style="color:red"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div style="width: 100%; height: 12px"></div>
				
				<div style="width: 100%; height: calc(50% - 8px)" class="cardTh">
					<p class="card-title"><img src="../assets/titleL.png" alt="">&nbsp;{{twoTitle}}&nbsp;<img src="../assets/titleR.png" alt=""></p>
					<div class="recycle-record">
						<div style="height:calc(20% - 0px);width:100%;display:flex;justify-content:space-around;align-items: center;">
							
						<div class="thRightOne" style="width: 28%">
							<img src="../assets/complete.png" align='absmiddle'>
							<div style='margin-left:1em'>
								<span style="font-size: 6px">完成率</span><br />
								<span class="member-number" style="text-align:left">90%</span>
							</div>
							
						</div>
						<div class="thRightOne" style="width: 28%">
							<img src="../assets/complaint.png" align='absmiddle'>
							<div style='margin-left:1em'>
								<span style="font-size: 6px">总投诉</span><br />
								<span class="member-number" style="text-align:left">100%</span>
							</div>
						</div>
						<div class="thRightOne" style="width: 28%">
							<img src="../assets/complete.png" align='absmiddle'>
							<div style='margin-left:1em'>
								<span style="font-size: 6px">已处理</span><br />
								<span class="member-number" style="text-align:left">90%</span>
							</div>
						</div>
							

						</div>

						<div style="height:calc(80% - 8px)">
							<div class="recycle-record-title">
							
							<div style="width: 25%; float: left; text-align: center">
								投诉人
							</div>
							<div style="width: 60%; float: left; text-align: center">
								投诉内容
							</div>
							<div style="width: 15%; float: left; text-align: left">状态</div>
							</div>
							<div class="recycle-record-content">
								<div class="recycle-record-content-line" v-for="(line, i) in recycleRecordsT" :key="i">
									<div class="recycle-record-content-item" :title="line.name"
										style="width: 25%; float: left; text-align: center">
										{{ line.name }}
									</div>
									<div class="recycle-record-content-item" :title="line.description"
										style="width: 60%; float: left; text-align: center">
										{{ line.description }}
									</div>
									<div class="recycle-record-content-item" :title="line.state"
										style="width: 15%; float: left; text-align: left">
										<i v-if="line.state==1" class="el-icon-success" style="color:#01EEFD"></i>
										<i v-if="line.state==0" class="el-icon-error" style="color:red"></i>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>


			</div>
</template>

<script>

export default {
  name: "threeRight",
  data() {
    return {
      oneTitle: "报修记录",
      twoTitle: "投诉记录",
	   recycleRecords: [
        {
          name: "瓶子",
          description: "设备故障",
         state: "1",
        },
        {
          name: "瓶子",
          description: "设备故障",
         state: "0",
		 },
        {
          name: "瓶子",
          description: "设备故障",
          state: "1",
        },
        {
          name: "瓶子",
          description: "设备故障",
          state: "1",
        },
        {
          name: "瓶子",
          description: "设备故障",
          state: "0",
        },
        {
          name: "瓶子",
          description: "设备故障",
          state: "0",
		  },
        {
          name: "瓶子",
          description: "设备故障",
         state: "1",
        },
        {
          name: "瓶子",
          description: "设备故障",
          state: "0",
        },
        {
          name: "瓶子",
          description: "设备故障",
          state: "1",
        },
        {
          name: "瓶子",
          description: "设备故障",
          state: "1",
        },
        {
          name: "瓶子",
          description: "设备故障",
          state: "0",
        },
        {
          name: "瓶子",
          description: "设备故障",
          tstate: "0",
        },
      ],
	  recycleRecordsT: [
       
		 {
          name: "瓶子",
          description: "xx问题",
          state: "1",
        },
       {
          name: "瓶子",
          description: "xx问题",
          state: "0",
        },
		 {
          name: "瓶子",
          description: "xx问题",
          state: "1",
        },
       {
          name: "瓶子",
          description: "xx问题",
          state: "0",
        },
		 {
          name: "瓶子",
          description: "xx问题",
          state: "1",
        },
       {
          name: "瓶子",
          description: "xx问题",
          state: "0",
        },
		 {
          name: "瓶子",
          description: "xx问题",
          state: "1",
        },
       {
          name: "瓶子",
          description: "xx问题",
          state: "0",
        },
		 {
          name: "瓶子",
          description: "xx问题",
          state: "1",
        },
       {
          name: "瓶子",
          description: "xx问题",
          state: "0",
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


