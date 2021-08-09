<template>
 <div style="float: left; width: 100%; height: 100%">
				<div style="width: 100%; height: calc(33.33% - 8px)" class="card">
					<p class="card-title"><img src="../assets/titleL.png" alt="">&nbsp;{{oneTitle}}&nbsp;<img src="../assets/titleR.png" alt=""></p>
					<div class="recycle-record">
						<div class="recycle-record-title">
							<div style="width: 30%; float: left; text-align: center">
								警告等级
							</div>
							<div style="width: 70%; float: left; text-align: left">
								告警描述
							</div>
						</div>
						<div class="recycle-record-content">
							<div class="recycle-record-content-line" v-for="(line, i) in recycleRecords" :key="i">
								<div class="recycle-record-content-item" :title="line.state"
									style="width: 30%; float: left; text-align: center">
									
									<div v-if='line.state=="-1"'>
										  <el-tag type= 'danger' effect="dark" size="small"> 严重</el-tag><br/>
										  <i class="el-icon-s-custom"></i>
									</div>
									<div v-if='line.state=="1"'>
										  <el-tag type= 'success' effect="dark" size="small">重要</el-tag><br/>
										  <i class="el-icon-s-custom " style="color:#01EEFD" ></i>
									</div>
									<div v-if='line.state=="0"'>
										  <el-tag type= '' effect="dark" size="small"> 一般</el-tag><br/>
										  <i class="el-icon-s-custom" style="color:#01EEFD"></i>
									</div>

								</div>
								<div class="recycle-record-content-item" :title="line.describe"
									style="width: 70%; float: left; text-align: center">
									{{ line.describe }}
								</div>
								
							</div>
						</div>
					</div>
				</div>
				<div style="width: 100%; height: 12px"></div>
				<div style="width: 100%; height: calc(33.33% - 8px)" class="card">
					<p class="card-title"><img src="../assets/titleL.png" alt="">&nbsp;{{twoTitle}}&nbsp;<img src="../assets/titleR.png" alt=""></p>
					<div class="recycle-record" style="padding: 10px; width: calc(100% - 30px); height: calc(100% - 70px);">
						<div style="height: 100%; width: 100%" class="twoLeftOne">
							<div class="twoLeftOne-item">
								 <div class="boxTwo">
									 <div class="boxTwo-bg"></div>
									 <img src="../assets/lock.png" align='left' >
								</div>
								 <div class="twoLeftTwo" style="margin-left:.5em">
									<span class="twoLeftTwo" >10%</span><br />
									<span class="member-number twoLeftTwo-text">门禁告警</span>
								 </div>
							</div>
							
							
							<div class="twoLeftOne-item">
								<div class="boxTwo">
									 <div class="boxTwo-bg2"></div>

									<img src="../assets/warning.png" align='left' >
								</div>
								<div class="twoLeftTwo" style="margin-left:.5em">
								<span class="twoLeftTwo">20%</span><br />
								<span class="member-number twoLeftTwo-text">安防告警</span>
							</div>
							</div>

							<div class="twoLeftOne-item">
								<div class="boxTwo">
									 <div class="boxTwo-bg"></div>

									<img src="../assets/Hydrant.png" align='left' >
								</div>
								<div class="twoLeftTwo" style="margin-left:0.5em">
									<span class="twoLeftTwo">10%</span><br />
									<span class="member-number twoLeftTwo-text"  >消防栓告警</span>
								
								
							</div>
							</div>

							<div class="twoLeftOne-item">
								<div class="boxTwo">
									 <div class="boxTwo-bg7"></div>

									<img src="../assets/warning.png" align='left' >
								</div>
								<div class="twoLeftTwo" style="margin-left:0.5em">
									<span class="twoLeftTwo">70%</span><br />
									<span class="member-number twoLeftTwo-text"  >其他告警</span>
								</div>
							</div>
							
							
							

						</div>
						
					</div>
				</div>
				<div style="width: 100%; height: 12px"></div>
				<div style="width: 100%; height: calc(33.33% - 8px)" class="card">
					<p class="card-title"><img src="../assets/titleL.png" alt="">&nbsp;{{threeTitle}}&nbsp;<img src="../assets/titleR.png" alt=""></p>
					<div class="recycle-record">
						<div id="alarmTrend" style="width: 100%;height: 100%;"></div>
					</div>
				</div>


			</div>
</template>

<script>

export default {
  name: "twoLeft",
  data() {
    return {
      oneTitle: "警告信息",
      twoTitle: "警告数量",
      threeTitle: "告警7天趋势",
	  recycleRecords:[
		{
          state: "0",//一般
          describe: "设备老化着火设备老化着火设备老化着火设备设备老化着火设备老化着火设备老化着火",
        },
		{
          state: "1",//重要
          describe: "设备老化着火设备老化着火设备老化着火设备设备老化着火设备老化着火设备老化着火",
        },
		{
          state: "-1",//严重
          describe: "设备老化着火设备老化着火设备老化着火设备设备老化着火设备老化着火设备老化着火",
        },
		{
          state: "0",//一般
          describe: "设备老化着火设备老化着火设备老化着火设备设备老化着火设备老化着火设备老化着火",
        },
		{
          state: "1",//重要
          describe: "设备老化着火设备老化着火设备老化着火设备设备老化着火设备老化着火设备老化着火",
        },
		{
          state: "-1",//严重
          describe: "设备老化着火设备老化着火设备老化着火设备设备老化着火设备老化着火设备老化着火",
        },
		{
          state: "0",//一般
          describe: "设备老化着火设备老化着火设备老化着火设备设备老化着火设备老化着火设备老化着火",
        },
		{
          state: "1",//重要
          describe: "设备老化着火设备老化着火设备老化着火设备设备老化着火设备老化着火设备老化着火",
        },
		{
          state: "-1",//严重
          describe: "设备老化着火设备老化着火设备老化着火设备设备老化着火设备老化着火设备老化着火",
        },
	  ]
    };
  },
  mounted() {
			this.initAlarmTrend();
			window.addEventListener("resize", () => {
				this.$echarts.init(document.getElementById("alarmTrend")).resize();
			});
		},
		methods: {
			initAlarmTrend() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById("alarmTrend"));
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: "axis",
					},
					legend: {
						show:false,
						data: ["图例一"],
						textStyle: {
							color: "white",
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
						bottom: "0px",
						top: "30px",
						containLabel: true,
					},
					xAxis: {
						type: "category",
						boundaryGap: false,
						axisTick: {
							show: false,
						},
						axisLine: {
							lineStyle: {
								color: "#28427a",
							},
						},
						data: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
					},
					yAxis: {
						type: "value",
						axisLine: {
							show: true,
							lineStyle: {
								color: "#28427a",
							},
						},
						splitLine: {
							show: true,
							lineStyle: {
								type: "dashed",
								color: "#ffffff23",
							},
						},
					},
					series: [

						{
							name: "图例一",
							type: "line",
							stack: "总量",
							data: [120, 132, 101, 134, 90, 230, 210],
 							smooth: true,
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: "rgba(0, 229, 255, 0.7)", // 0% 处的颜色
                                    },
                                        {
                                            offset: 0.81,
                                            color: "rgba(0, 64, 87, 0.6)", // 60% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(0, 23, 45, 0)", // 100% 处的颜色
                                        },
                                    ],
                                    global: false // 缺省为 false
                                }
                            },
                            lineStyle:{
                                color:'#44D7B6',
                            }
						},],
				});
			},
		},
 
};
</script>


