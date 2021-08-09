<template>
 <div style="float: left; width: 100%; height: 100%" class="cardT">
				<div style="width: 100%; height: calc(50% - 8px)">
					<p class="card-title" style="position: relative;"><img src="../assets/titleL.png" alt="">&nbsp;{{oneTitle}}&nbsp;<img src="../assets/titleR.png" alt="">
					<span style="text-align:right;width:25%; position: absolute;right:5px">
						<el-select v-model="value1" size='mini' >
									<el-option v-for="equipmentType in equipmentTypeS" :label="equipmentType" :value="equipmentType" :key="equipmentType">{{value1}}</el-option>
						</el-select>
					</span>
					
					</p>
					<div class="recycle-record" 
						style="display: flex; align-items: center; justify-content: center;flex-wrap: wrap;">
							<div class="twoRightUp">
								<div class="twoRightUp-top" >
									<div class='map11'></div>
									<div class='map21'></div>
									<div class='map31'></div>
									<div class='map4'>
										<span>32</span><br/>
										<span>全部设备</span>
									</div>
								</div>
								<div class="twoRightUp-down">
									<div>占比：20%</div>
								</div>
							</div>

							<div class="twoRightUp">
								<div class="twoRightUp-top" >
									<div class='map11'></div>
									<div class='map21'></div>
									<div class='map31'></div>
									<div class='map4'>
										<span>32</span><br/>
										<span>掉线资源</span>
									</div>
								</div>
								<div class="twoRightUp-down">
									<div>占比：20%</div>
								</div>
							</div>
							<div class="twoRightUp">
								<div class="twoRightUp-top" >
									<div class='map11'></div>
									<div class='map21'></div>
									<div class='map31'></div>
									<div class='map4'>
										<span>32</span><br/>
										<span>告警资源</span>
									</div>
								</div>
								<div class="twoRightUp-down">
									<div>占比：20%</div>
								</div>
							</div>
							<div class="twoRightUp">
								<div class="twoRightUp-top" >
									<div class='map11'></div>
									<div class='map21'></div>
									<div class='map31'></div>
									<div class='map4'>
										<span>32</span><br/>
										<span>报修资源</span>
									</div>
								</div>
								<div class="twoRightUp-down">
									<div>占比：20%</div>
								</div>
							</div>


					
					</div>
				</div>
				
				<div style="width: 100%; height: 12px"></div>
				
				<div style="width: 100%; height: calc(50% - 8px)" >
					<div class="recycle-record">
						<div class="recycle-record-title">
							<div style="width: 25%; float: left; text-align: center">
								设备名称
							</div>
							<div style="width: 60%; float: left; text-align: center">
								安装位置
							</div>
							<div style="width: 15%; float: left; text-align: left">在线状态</div>
						</div>
						<div class="recycle-record-content" style="height: calc(100% - 0px);">
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
										<i v-if="line.state==1"  style="color:#01EEFD"><img src="../assets/true.png"/></i>
										<i v-if="line.state==0"  style="color:red"><img src="../assets/false.png"/></i>
									</div>
								</div>
						</div>
						
						<!-- <el-pagination background={ture} layout="prev, pager, next" :total="100" size-change="pageClick" class="paginationStyle"> </el-pagination> -->
					</div>
				</div>


			</div>
</template>

<script>

export default {
  name: "twoRight",
  data() {
    return {
      oneTitle: "资源状态 ",
	  value1:'设备类型',
	  equipmentTypeS:[
		  '设备类型1','设备类型2'
	  ],
	  recycleRecordsT: [
       
		 {
          name: "门禁",
          description: "xx问题",
          state: "1",
        },
       {
          name: "摄像头1",
          description: "xx问题",
          state: "0",
        },
		 {
          name: "探头",
          description: "xx问题",
          state: "1",
        },
       {
          name: "摄像头2",
          description: "xx问题",
          state: "0",
        },
		 {
          name: "瓶摄像头3",
          description: "xx问题",
          state: "1",
        },
       {
          name: "摄像头4",
          description: "xx问题",
          state: "0",
        },
		 {
          name: "摄像头5",
          description: "xx问题",
          state: "1",
        },
       {
          name: "摄像头6",
          description: "xx问题",
          state: "0",
        },
		 {
          name: "摄像头",
          description: "xx问题",
          state: "1",
        },
       {
          name: "摄像头",
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
			pageClick(e){
				console.log(e);
			},
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


